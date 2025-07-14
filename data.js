// data.js

const materias = [
  // Semestre 1
  {
    nombre: "Introducción a la Sociología",
    codigo: "2015249",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Fundamentación",
    prerrequisitos: [],
    semestre: 1
  },
  {
    nombre: "Análisis de Datos Cuantitativos",
    codigo: "2025310",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Fundamentación",
    prerrequisitos: [],
    semestre: 1
  },
  {
    nombre: "Software Aplicado a las Ciencias Sociales",
    codigo: "2026176",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Fundamentación",
    prerrequisitos: [],
    semestre: 1
  },

  // Semestre 2
  {
    nombre: "Teoría Sociológica: Émile Durkheim",
    codigo: "2015853",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Teorías Sociológicas",
    prerrequisitos: [],
    semestre: 2
  },
  {
    nombre: "Teoría Sociológica: Karl Marx",
    codigo: "2015865",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Teorías Sociológicas",
    prerrequisitos: [],
    semestre: 2
  },
  {
    nombre: "Teoría Sociológica: Max Weber",
    codigo: "2015866",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Teorías Sociológicas",
    prerrequisitos: [],
    semestre: 2
  },

  // Semestre 3
  {
    nombre: "Pensamiento Sociológico Latinoamericano",
    codigo: "2015256",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Teorías Sociológicas",
    prerrequisitos: [],
    semestre: 3
  },
  {
    nombre: "Métodos Cuantitativos",
    codigo: "2015806",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Metodología e Investigación",
    prerrequisitos: ["Análisis de Datos Cuantitativos"],
    semestre: 3
  },
  {
    nombre: "Métodos Cualitativos",
    codigo: "2015805",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Metodología e Investigación",
    prerrequisitos: [],
    semestre: 3
  },

  // Semestre 4
  {
    nombre: "Indicadores Sociales",
    codigo: "2015803",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Metodología e Investigación",
    prerrequisitos: ["Análisis de Datos Cuantitativos"],
    semestre: 4
  },
  {
    nombre: "Demografía",
    codigo: "2015799",
    creditos: 3,
    tipo: "obligatoria",
    agrupacion: "Metodología e Investigación",
    prerrequisitos: ["Análisis de Datos Cuantitativos"],
    semestre: 4
  },
  {
    nombre: "Taller I: Documentación e Investigación",
    codigo: "2015813",
    creditos: 5,
    tipo: "obligatoria",
    agrupacion: "Metodología e Investigación",
    prerrequisitos: [],
    semestre: 4
  },

  // Semestre 5
  {
    nombre: "Taller II: Proyecto de Investigación",
    codigo: "2015814",
    creditos: 8,
    tipo: "obligatoria",
    agrupacion: "Metodología e Investigación",
    prerrequisitos: ["Taller I: Documentación e Investigación"],
    semestre: 5
  },
  {
    nombre: "Trabajo de Grado",
    codigo: "2015293",
    creditos: 10,
    tipo: "obligatoria",
    agrupacion: "Metodología e Investigación",
    prerrequisitos: ["Taller II: Proyecto de Investigación"],
    semestre: 5
  }
];

const optativas = {
  "Historia de Colombia": [
    "Sociedad Colombiana Siglo XIX",
    "Historia de Colombia I",
    "Historia de Colombia II",
    "Historia de Colombia III",
    "Historia de Colombia IV",
    "Historia de Colombia V"
  ],
  "Sociologías Temáticas": [
    "Sociología Temática: Cultura y Sociedad en América Latina",
    "Sociología Temática: Ciencia, Industria e Imperios",
    "Sociología Temática: Sociología del Dinero",
    "Sociología Temática: Sociología de la Novela",
    "Sociología Temática: Clientelismo Político"
  ],
  "Sociologías Especiales": [
    "Sociología Especial: Religión",
    "Sociología Especial: Rural",
    "Sociología Especial: Sociología del Consumo",
    "Sociología Especial: Sociología Económica",
    "Sociología Especial: Educación"
  ]
};
