# 🌍 Interactive World Map with Population Data

An interactive world map built using **D3.js**, **TopoJSON**, and the **REST Countries API**. Click on any country to view its population in real time. The project showcases dynamic SVG rendering, real-world data fetching, and smooth hover interactions.

---

## ✨ Features

- 🌐 Interactive and zoomable SVG map
- 🧭 Country highlighting on hover
- 📊 Real-time population data using [REST Countries API](https://restcountries.com/)
- 📐 Geo-projection using `d3.geoMercator`
- 🖌️ Clean and modern UI with smooth transitions

---

## 🔧 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- [D3.js v6](https://d3js.org/)
- [TopoJSON](https://github.com/topojson/topojson)
- [REST Countries API](https://restcountries.com/)

---

## 📁 Folder Structure

interactive-world-map/
├── index.html # Main HTML structure
├── style.css # Styling and layout
└── script.js # D3 rendering and population fetching


---

## 🚀 Getting Started

### 🔹 Clone the Repository

```bash
git clone https://github.com/yourusername/interactive-world-map
cd interactive-world-map

🖼️ Screenshot

Replace with an actual screenshot or GIF once hosted

❓ How It Works
The map loads a world dataset (countries-110m.json) using TopoJSON.

D3 renders the countries onto the <svg> element.

On clicking a country, the app:

Extracts the country's name from the clicked shape.

Sends a request to the REST Countries API.

Displays the population in the info panel.

✅ To Deploy on GitHub Pages
Push your project to a GitHub repo.

Go to Settings > Pages.

Under Source, select main branch and root directory.

Your site will be live at:
https://yourusername.github.io/interactive-world-map/

📜 License
This project is licensed under the MIT License

👨‍💻 Author
Developed by Peetha Manikantha (238W5A0515)
Feel free to reach out on LinkedIn or via email

