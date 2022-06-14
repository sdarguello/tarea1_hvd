//Definiendo selectores
const guadalupe = d3.select("#guadalupe")
const santiago = d3.select("#santiago")
const alex = d3.select("#alex")

//Estableciendo dimensiones de cada área de trabajo por elemento del equipo
const anchoGua = +guadalupe.style("width").slice(0, -2)
const altoGua = (anchoGua * 9) / 16

const anchoSan = +santiago.style("width").slice(0, -2)
const altoSan = (anchoSan * 9) / 16

const anchoAle = +alex.style("width").slice(0, -2)
const altoAle = (anchoAle * 9) / 16

//Aérturando elementos SVG como área de trabajo de las gráficas.
const svg_guadalupe = guadalupe
  .append("svg")
  .attr("width", anchoGua)
  .attr("height", altoGua)
  .attr("class", "guadalupe")

  const svg_santiago = santiago
  .append("svg")
  .attr("width", anchoSan)
  .attr("height", altoSan)
  .attr("class", "santiago")

  const svg_alex = alex
  .append("svg")
  .attr("width", anchoAle)
  .attr("height", altoAle)
  .attr("class", "alex")