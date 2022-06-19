// Selecciones
const graf = d3.select("#graf");

// Dimensiones
const anchoTotal = +graf.style("width").slice(0, -2);
const altoTotal = (anchoTotal * 9) / 16;

const margins = {
  top: 60,
  right: 20,
  bottom: 75,
  left: 100,
};
const ancho = anchoTotal - margins.left - margins.right;
const alto = altoTotal - margins.top - margins.bottom;

// Elementos gráficos (layers)
const svg = graf
  .append("svg")
  .attr("width", anchoTotal)
  .attr("height", altoTotal)
  .attr("class", "mapa");

const g = svg
  .append("g")
  .attr("transform", `translate(${margins.left}, ${margins.top})`);

//DEFINIENDO ELEMENTO GRÁFICOS DE LA LIBERÍA D3.GEO QUE MOSTRARÁN EL MAPA
var projection = d3
  .geoMercator()
  .scale(600)
  .translate([anchoTotal, altoTotal / 2]);
var geoPath = d3.geoPath().projection(projection);

const load = async (variable = "casos_totales") => {
  // Carga de Datos
  data = await d3.csv("dengue.csv", d3.autoType);
  geoMexico = await d3.json("mexico.json", d3.autoType);

  // DEFINIENDO ACCESORS
  const yAccessor = (d) => d[variable];
  const xAccessor = (d) => d.abreviatura;

  const caracteristicas = geoMexico.features;
  //geoArea nos da el area dado un GeoJson
  //extent nos devuelve el minimo y maximo valor

  var tamanioCarMex = d3.extent(caracteristicas, function (d) {
    return d3.geoArea(d);
  });

  var newFeatureColor = d3.scaleQuantize().domain(tamanioCarMex);

  data.sort((a, b) => yAccessor(b) - yAccessor(a));

  console.log(data);
  console.log(d3.map(data, xAccessor));

  const map = g
    .selectAll("path")
    .data(geoMexico.features)
    .enter()
    .append("path")
    .attr("d", geoPath)
    .attr("id", (d) => d.id)
    .attr("class", "estados")
    .style("fill", (d) => {
      //AQUI SE USA LA ESCALA DE COLORES EN BASE AL AREA DE CADA PAIS

      if (d.id != "MX-YUC") {
        return newFeatureColor(d3.geoArea(d));
      } else {
        return "red";
      }
    })
    .style("stroke", (d) => d3.rgb(newFeatureColor(d3.geoArea(d))).darker());
};

load("margen");
