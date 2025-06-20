🌍 Interactive World Map with Population Data
This project is a D3.js-based interactive world map that allows users to click on countries and instantly view their population. It combines D3.js, TopoJSON, and the REST Countries API to visualize geographic data and display real-time country statistics.

✨ Features
Interactive SVG map rendered with D3.js.

Hover effects and clickable countries.

Live population data fetched from the REST Countries API.

Clean, responsive UI with subtle animations.

Uses TopoJSON world geometry data.

🧰 Technologies Used
HTML5

CSS3

JavaScript (ES6)

D3.js v6

TopoJSON

RESTCountries API

📌 How It Works
Loads a TopoJSON map of the world from the world-atlas dataset.

Uses d3.geoMercator() for geographic projection.

On clicking a country, a fetch request is sent to the RESTCountries API.

The population is then displayed dynamically in the info box.
