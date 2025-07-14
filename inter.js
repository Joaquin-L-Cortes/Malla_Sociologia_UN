const optativas = {
  "Historia de Colombia": [
    "Sociedad Colombiana Siglo XIX",
    "Historia de Colombia I",
    "Historia de Colombia II"
  ],
  "Sociologías Temáticas": [
    "Cultura y Sociedad en América Latina",
    "Desplazamiento en Colombia"
    // y más...
  ]
};

function mostrarOptativas(grupo) {
  const opciones = optativas[grupo] || [];
  let html = `<h3>${grupo}</h3><ul>`;
  opciones.forEach(asig => html += `<li onclick="seleccionarMateria('${asig}')">${asig}</li>`);
  html += "</ul>";
  document.getElementById("popup").innerHTML = html;
  document.getElementById("popup").style.display = "block";
}

function seleccionarMateria(nombre) {
  alert(`Asignatura seleccionada: ${nombre}`);
  document.getElementById("popup").style.display = "none";
}
