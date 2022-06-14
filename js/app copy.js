
//Seleccionadores para gráficas de Guadalupe
const graf_sexo = d3.select("#graf_sexo")
const graf_edad = d3.select("#graf_edad")

//Seleccionadores para gráficas de Santiago
const graf_leng = d3.select("#graf_leng")
const graf_muni = d3.select("#graf_muni")

//Seleccionadores para gráficas de Alex
const graf_def = d3.select("#graf_def")
const graf_entidad = d3.select("#graf_entidad")

/*Función para asignar el ancho total y el alto total del div para trabajar con las gráficas
const anchoTotal = (graf) => {
  +graf.style("width").slice(0, -2)
}
const altoTotal = (anchoTotal.graf * 9) / 16
console.log(anchoTotal)
console.log(altoTotal)
*/

//Definiendo ancho y alto el área de trabajo de las graficas de Guadalupe
const anchoSexo= +graf_sexo.style("width").slice(0, -2)
const altoSexo = (anchoSexo * 9) / 16

const anchoEdad= +graf_edad.style("width").slice(0, -2)
const altoEdad = (anchoEdad * 9) / 16

//Definiendo ancho y alto el área de trabajo de las graficas de Santiago
const anchoLeng= +graf_leng.style("width").slice(0, -2)
const altoLeng = (anchoLeng * 9) / 16

const anchoMuni= +graf_muni.style("width").slice(0, -2)
const altoMuni = (anchoMuni * 9) / 16

//Definiendo ancho y alto el área de trabajo de las graficas de Alex
const anchoDef= +graf_def.style("width").slice(0, -2)
const altoDef = (anchoDef * 9) / 16

const anchoEnt= +graf_entidad.style("width").slice(0, -2)
const altoEnt = (anchoEnt * 9) / 16

//Definiendo elementos SVG de las gráficas de Guadalupe
const svg_sexo = graf_sexo
  .append("svg")
  .attr("width", anchoSexo)
  .attr("height", altoSexo)
  .attr("class", "graf_sexo")

  const svg_edad = graf_edad
  .append("svg")
  .attr("width", anchoEdad)
  .attr("height", altoEdad)
  .attr("class", "graf_edad")