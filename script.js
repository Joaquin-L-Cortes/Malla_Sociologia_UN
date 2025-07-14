// script.js

const grid = document.getElementById("malla");
const popup = document.getElementById("popup");

let materiasCursadas = [];

function crearCelda(materia) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.classList.add(materia.tipo);

  if (!puedeCursar(materia)) {
    div.classList.add("bloqueada");
    div.title = `Prerrequisitos: ${materia.prerrequisitos.join(", ")}`;
  } else {
    div.addEventListener("click", () => seleccionarMateria(materia));
  }

  div.textContent = `${materia.nombre} (${materia.creditos})`;
  return div;
}

function renderMalla() {
  // Vacía el grid
  grid.innerHTML = "";
  
  // Agrupa materias por semestre (1 a 8 columnas)
  const columnas = 8;
  const distribucion = Array.from({ length: columnas }, () => []);

  materias.forEach(materia => {
    const col = Math.min(materia.semestre - 1, columnas - 1);
    distribucion[col].push(materia);
  });

  // Rellenar columnas por orden
  const maxFilas = Math.max(...distribucion.map(c => c.length));
  for (let fila = 0; fila < maxFilas; fila++) {
    for (let col = 0; col < columnas; col++) {
      const materia = distribucion[col][fila];
      if (materia) {
        const celda = crearCelda(materia);
        grid.appendChild(celda);
      } else {
        const vacia = document.createElement("div");
        vacia.classList.add("cell");
        vacia.style.visibility = "hidden";
        grid.appendChild(vacia);
      }
    }
  }

  // Agrega botones para optativas
  for (const grupo in optativas) {
    const celda = document.createElement("div");
    celda.classList.add("cell", "optativa");
    celda.textContent = `Grupo: ${grupo}`;
    celda.onclick = () => mostrarOptativas(grupo);
    grid.appendChild(celda);
  }
}

function puedeCursar(materia) {
  if (!materia.prerrequisitos || materia.prerrequisitos.length === 0) return true;
  return materia.prerrequisitos.every(req => materiasCursadas.includes(req));
}

function seleccionarMateria(materia) {
  if (!puedeCursar(materia)) {
    alert("No cumples los prerrequisitos para esta asignatura.");
    return;
  }
  const confirmacion = confirm(`¿Deseas cursar "${materia.nombre}"?`);
  if (confirmacion) {
    materiasCursadas.push(materia.nombre);
    renderMalla();
  }
}

function mostrarOptativas(grupo) {
  const opciones = optativas[grupo] || [];
  let html = `<h3>${grupo}</h3><ul>`;
  opciones.forEach(asig => {
    html += `<li onclick="seleccionarOptativa('${asig}')">${asig}</li>`;
  });
  html += "</ul><button onclick=\"cerrarPopup()\">Cerrar</button>";
  popup.innerHTML = html;
  popup.style.display = "block";
}

function cerrarPopup() {
  popup.style.display = "none";
}

function seleccionarOptativa(nombre) {
  if (materiasCursadas.includes(nombre)) {
    alert("Ya seleccionaste esta optativa.");
    return;
  }
  materiasCursadas.push(nombre);
  alert(`Optativa "${nombre}" agregada.`);
  cerrarPopup();
}

// Inicializar
renderMalla();
