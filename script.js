const width = 960;
const height = 600;
const svg = d3.select("svg").attr("viewBox", `0 0 ${width} ${height}`);
const projection = d3.geoMercator().scale(150).translate([width / 2, height / 1.5]);
const path = d3.geoPath().projection(projection);

async function loadMap() {
    const world = await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
    const countries = topojson.feature(world, world.objects.countries);

    svg.selectAll(".country")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path)
        .on("click", async (event, d) => {
            const countryName = d.properties.name || "Unknown";
            const population = await getPopulation(countryName);
            d3.select("#info").text(`${countryName}: Population ${population}`);
        });
}

async function getPopulation(country) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await response.json();
        return data[0]?.population?.toLocaleString() || "Data not available";
    } catch (error) {
        return "Data not available";
    }
}

loadMap();
