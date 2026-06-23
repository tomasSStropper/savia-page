// Datos de proyectos de Savia.
// status: "curso" = Proyectos en curso | "pasado" = Proyectos y actividades pasadas
// Campos opcionales: si no existen, simplemente no se muestran en la tarjeta.
// image: null por ahora -> se muestra el placeholder de marca. Coordinar fotos luego.

export const projects = [
  // ===================== PROYECTOS EN CURSO =====================
  {
    id: "curso-1",
    status: "curso",
    title: "Manejo adecuado de los materiales valorizables de las islas Venado y Caballo",
    location: "Golfo de Nicoya",
    tags: ["Gestión de Residuos", "Economía Circular", "Fortalecimiento de capacidades"],
    challenge:
      "Contribuir a la salud pública de los habitantes, a la protección de los ecosistemas marino-costeros y a la conservación de la biodiversidad en las islas Venado y Caballo —reconocidas como patrimonio natural del Estado— mediante el fortalecimiento del modelo comunitario de gestión de residuos sólidos valorizables.",
    partners: "PNUD, ADI Isla Venado, UNA, Instituciones Públicas.",
    image: null, // Foto pendiente: no compartir hasta tener el permiso.
  },
  {
    id: "curso-2",
    status: "curso",
    title: "Actividades y proyectos de sensibilización y educación ambiental",
    location: "Orotina de Alajuela, Paraíso de Cartago, Carrillo de Guanacaste",
    tags: ["Recurso Hídrico", "Biodiversidad", "Gestión de Residuos"],
    challenge:
      "Sensibilizar e impulsar la participación de las y los residentes de proyectos habitacionales en acciones de sostenibilidad.",
    partners: "Empresa Consultoría Mar Azul S.A, sociedad civil.",
    image: null,
  },
  {
    id: "curso-3",
    status: "curso",
    title: "Comisión Manejo Integral de Residuos Sólidos",
    location: "Cóbano, Puntarenas",
    tags: ["Gestión de Residuos", "Gobernanza", "Economía Circular", "Descarbonización"],
    challenge:
      "Lograr una Gestión Integral de Residuos Sólidos en el Distrito de Cóbano por medio de la coordinación e interacción de los actores sociales.",
    partners: "Ministerio de Salud, MAG, ADIs, ONGs, sociedad civil.",
    image: null,
  },
  {
    id: "curso-4",
    status: "curso",
    title: "Educación en manejo de cuencas y monitoreo participativo",
    location: "Cóbano, Puntarenas",
    tags: ["Manejo de cuencas", "Ciencia ciudadana", "Biodiversidad", "Servicios Ecosistémicos"],
    challenge:
      "Sensibilizar y educar sobre el manejo y protección de la cuenca del río Ario mediante actividades de monitoreo participativo.",
    partners: "Asociación CIRENAS, Stroud Water Research Center, MEP, sociedad civil.",
    credit: "Foto: Pablo “Chespi” Elizondo",
    image: null,
  },

  // ===================== PROYECTOS Y ACTIVIDADES PASADAS =====================
  {
    id: "pasado-1",
    status: "pasado",
    title: "Eco-Maletas: Eco-alfabetización con enfoque lúdico",
    location: "Coto Brus, Puntarenas",
    tags: [
      "Biodiversidad y Servicios Ecosistémicos",
      "Contaminación",
      "Cambio Climático",
      "Educación para el Desarrollo Sostenible",
    ],
    challenge:
      "Facilitar procesos educativos de grupos académicos y comunitarios a través del aporte de herramientas didácticas que fomenten un mayor interés hacia problemas socio-ambientales y enriquezcan el conocimiento en cómo dar solución a los mismos mediante la adopción de buenos hábitos ambientales.",
    results: [
      "18 escuelas del cantón de Coto Brus con 1 Eco-Maleta como herramienta educativa para las clases de ciencias, estudios sociales, educación cívica, matemáticas y agricultura.",
      "Incremento de la comprensión de estudiantes y profesores sobre ecosistemas, beneficios de los bosques, contaminación y residuos sólidos, y cambio climático.",
      "Aumento de la integración de la OET y las comunidades que rodean la E.B. Las Cruces.",
    ],
    implementation: "Organization for Tropical Studies.",
    partners: "MEP, Banco Nacional, HB Fuller Foundation.",
    links: [
      { label: "Sitio del proyecto", url: "https://ecomaletas.wordpress.com/" },
      { label: "Video", url: "https://www.youtube.com/watch?v=3uLf7Mtl5V4" },
    ],
    image: null,
  },
  {
    id: "pasado-2",
    status: "pasado",
    title: "Ocean Friendly Business",
    location: "Santa Teresa, Cóbano",
    tags: ["Incentivos para la sostenibilidad", "Certificación", "Asesoría empresarial"],
    challenge:
      "Facilitar procesos educativos de grupos académicos y comunitarios a través del aporte de herramientas didácticas que fomenten un mayor interés hacia problemas socio-ambientales y enriquezcan el conocimiento en cómo dar solución a los mismos mediante la adopción de buenos hábitos ambientales.",
    results: [
      "Más de 30 comercios transicionaron hacia prácticas más sostenibles.",
      "18 comercios certificados como OFB.",
      "Disminución del consumo de plásticos de un solo uso y de productos químicos cosméticos y de limpieza.",
    ],
    implementation: "Nicoya Peninsula Waterkeeper.",
    partners: "Municipalidad de Cóbano, Ministerio de Salud, Sector Comercial.",
    links: [
      {
        label: "Sitio del proyecto",
        url: "https://www.nicoyawaterkeeper.org/en/ocean-friendly-business",
      },
    ],
    image: null,
  },
  {
    id: "pasado-3",
    status: "pasado",
    title: "Centro de Acopio Waterkeeper-Bionic",
    location: "Cóbano, Puntarenas",
    tags: ["Gestión de Residuos", "Alianzas estratégicas", "Cambio de comportamiento"],
    // FALTA: el "Desafío" de este proyecto estaba en blanco en el mockup.
    challenge: null,
    results: [
      "5 rutas diarias de recolección y 11 estaciones de reciclaje establecidas.",
      "+700 usuarios.",
      "+1400 ton de materiales valorizables recuperados.",
      "12 empleos.",
      "+30% de cobertura en comercios.",
    ],
    implementation: "Nicoya Peninsula Waterkeeper.",
    partners: "Bionic, Municipalidad de Cóbano, Vivero Lacom.",
    image: null,
  },

  // FALTA: 4º proyecto pasado ("Proyecto C") estaba todo en xxxx. Cuando tengas los datos,
  // descomentá este bloque y completá los campos.
  // {
  //   id: "pasado-4",
  //   status: "pasado",
  //   title: "",                 // FALTA
  //   location: "",              // FALTA
  //   tags: [],                  // FALTA
  //   challenge: null,           // FALTA
  //   results: [],               // FALTA
  //   implementation: "",        // FALTA
  //   partners: "",              // FALTA
  //   image: null,
  // },
];

// Bloque especial al final de "Pasados": no son proyectos con foto, es una lista.
export const otherActivities = {
  title: "Otras actividades realizadas",
  items: [
    "Sala de Educación Ambiental",
    "Detectives de Aves",
    "Capacitaciones para Guías de Turismo Naturalista",
    "Festival Eco-Cultural Las Cruces",
    "Sistemas de captación de aguas pluviales",
  ],
};
