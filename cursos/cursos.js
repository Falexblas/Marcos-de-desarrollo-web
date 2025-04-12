const cursos = [
  {
    id: 1,
    nombre: "Curso de Java",
    descripcion: "Aprende programación orientada a objetos y desarrollo backend con Java.",
    aprendizajes: [
      "Dominarás la sintaxis básica de Java y sus estructuras de control.",
      "Crearás aplicaciones backend robustas utilizando frameworks como Spring Boot.",
      "Implementarás pruebas unitarias con JUnit y Mockito."
    ],
    fecha: "FEB 2025",
    duracion: "10 horas",
    nivel: "Intermedio",
    precio: "S/30 PEN",
    imagen: "/img/curso-java.jpg",
    temario: [
      {
        titulo: "1. Introducción a Java",
        descripcion: "Comienza tu camino en el mundo de Java: conceptos básicos y configuración del entorno.",
        contenido: [
          { titulo: "1.1 - Instalación de JDK", duracion: "08:00" },
          { titulo: "1.2 - Primera aplicación en Java", duracion: "10:00" },
          { titulo: "1.3 - Variables y tipos de datos", duracion: "12:00" }
        ]
      },
      {
        titulo: "2. Programación Orientada a Objetos",
        descripcion: "Aprende los fundamentos de la POO en Java.",
        contenido: [
          { titulo: "2.1 - Clases y objetos", duracion: "15:00" },
          { titulo: "2.2 - Herencia y polimorfismo", duracion: "20:00" },
          { titulo: "2.3 - Interfaces y abstracción", duracion: "18:00" }
        ]
      }
    ],
    categoria: "Backend",
    profesor: "Andres Sacco 🇦🇷",
    perfilProfesor: "@andressacco Ver perfil",
    publico: [
      "Desarrolladores backend o estudiantes interesados en aprender Java desde cero."
    ]
  },
  {
    id: 2,
    nombre: "Curso de Python",
    descripcion: "Introducción a la programación con Python: desde lo básico hasta proyectos prácticos.",
    aprendizajes: [
      "Dominarás sintaxis básica, estructuras de control y manejo de datos.",
      "Crearás scripts y pequeñas aplicaciones funcionales.",
      "Introducirás conceptos de programación orientada a objetos."
    ],
    fecha: "MAR 2025",
    duracion: "5 horas",
    nivel: "Básico",
    precio: "S/15 PEN",
    imagen: "/img/python-curso-gratis.jpg",
    temario: [
      {
        titulo: "1. Introducción",
        descripcion: "Comienza tu camino en la programación con Python: ejercicios prácticos y conceptos clave.",
        contenido: [
          { titulo: "1.1 - Introducción al curso", duracion: "09:01" },
          { titulo: "1.2 - Probando el manejo de reservas de una compañía aérea", duracion: "10:36" },
          { titulo: "1.3 - ¿Qué es una prueba unitaria?", duracion: "12:02" }
        ]
      }
    ],
    categoria: "Programación ",
    profesor: "Laura Gómez 🇨🇴",
    perfilProfesor: "@lauragomez Ver perfil",
    publico: [
      "Principiantes o desarrolladores que desean iniciarse en la programación general o desarrollo de scripts automatizados."
    ]
  },
  {
    id: 3,
    nombre: "Curso de JavaScript",
    descripcion: "Domina el lenguaje de programación más utilizado en el desarrollo web.",
    aprendizajes: [
      "Comprenderás los fundamentos de JavaScript y su uso en el navegador.",
      "Aprenderás a manipular el DOM y crear interacciones dinámicas.",
      "Explorarás conceptos avanzados como closures y promesas."
    ],
    fecha: "ABR 2025",
    duracion: "8 horas",
    nivel: "Intermedio",
    precio: "S/25 PEN",
    imagen: "/img/curso-js.jpg",
    temario: [
      {
        titulo: "1. Fundamentos de JavaScript",
        descripcion: "Conceptos básicos del lenguaje y su integración con HTML/CSS.",
        contenido: [
          { titulo: "1.1 - Variables y tipos de datos", duracion: "10:00" },
          { titulo: "1.2 - Funciones y eventos", duracion: "12:00" },
          { titulo: "1.3 - Manipulación del DOM", duracion: "15:00" }
        ]
      },
      {
        titulo: "2. JavaScript Avanzado",
        descripcion: "Conceptos avanzados para desarrollar aplicaciones modernas.",
        contenido: [
          { titulo: "2.1 - Closures y scope", duracion: "18:00" },
          { titulo: "2.2 - Promesas y async/await", duracion: "20:00" },
          { titulo: "2.3 - Trabajando con APIs", duracion: "22:00" }
        ]
      }
    ],
    categoria: "Frontend",
    profesor: "Carlos Rivas 🇲🇽",
    perfilProfesor: "@carlosrivas Ver perfil",
    publico: [
      "Desarrolladores frontend o estudiantes interesados en aprender JavaScript desde cero."
    ]
  },
  {
    id: 4,
    nombre: "Curso de CSS",
    descripcion: "Aprende a diseñar interfaces modernas y responsivas con CSS.",
    aprendizajes: [
      "Dominarás selectores, propiedades y diseño responsive.",
      "Crearás animaciones y transiciones para mejorar la experiencia de usuario.",
      "Implementarás frameworks CSS como Bootstrap para agilizar el desarrollo."
    ],
    fecha: "JUN 2025",
    duracion: "6 horas",
    nivel: "Básico",
    precio: "S/20 PEN",
    imagen: "/img/curso-css.jpg",
    temario: [
      {
        titulo: "1. Fundamentos de CSS",
        descripcion: "Conceptos básicos y su integración con HTML.",
        contenido: [
          { titulo: "1.1 - Selectores y propiedades", duracion: "10:00" },
          { titulo: "1.2 - Diseño responsive", duracion: "15:00" },
          { titulo: "1.3 - Flexbox y Grid", duracion: "20:00" }
        ]
      },
      {
        titulo: "2. Animaciones y Transiciones",
        descripcion: "Mejora la experiencia de usuario con animaciones.",
        contenido: [
          { titulo: "2.1 - Transiciones simples", duracion: "12:00" },
          { titulo: "2.2 - Animaciones complejas", duracion: "18:00" },
          { titulo: "2.3 - Frameworks CSS", duracion: "22:00" }
        ]
      }
    ],
    categoria: "Diseño Web",
    profesor: "Ana Torres 🇪🇸",
    perfilProfesor: "@anatorres Ver perfil",
    publico: [
      "Diseñadores web o estudiantes interesados en aprender CSS desde cero."
    ]
  },
  {
    id: 5,
    nombre: "Curso de HTML",
    descripcion: "Aprende los fundamentos del lenguaje de marcado HTML para crear sitios web.",
    aprendizajes: [
      "Dominarás etiquetas básicas y estructura de documentos HTML.",
      "Crearás formularios y tablas para recopilar datos.",
      "Implementarás semántica HTML para mejorar la accesibilidad."
    ],
    fecha: "AGO 2025",
    duracion: "4 horas",
    nivel: "Básico",
    precio: "S/10 PEN",
    imagen: "/img/curso-html.jpg",
    temario: [
      {
        titulo: "1. Fundamentos de HTML",
        descripcion: "Conceptos básicos y estructura de un documento HTML.",
        contenido: [
          { titulo: "1.1 - Etiquetas básicas", duracion: "08:00" },
          { titulo: "1.2 - Formularios y tablas", duracion: "10:00" },
          { titulo: "1.3 - Semántica HTML", duracion: "12:00" }
        ]
      },
      {
        titulo: "2. Mejores Prácticas",
        descripcion: "Consejos para escribir HTML limpio y accesible.",
        contenido: [
          { titulo: "2.1 - Accesibilidad", duracion: "15:00" },
          { titulo: "2.2 - Integración con CSS y JS", duracion: "20:00" },
          { titulo: "2.3 - Validación de código", duracion: "18:00" }
        ]
      }
    ],
    categoria: "Diseño Web",
    profesor: "Mario López 🇵🇪",
    perfilProfesor: "@mariolopez Ver perfil",
    publico: [
      "Principiantes o estudiantes interesados en aprender HTML desde cero."
    ]
  },
  {
    id: 6,
    nombre: "Curso de React JS",
    descripcion: "Aprende a construir interfaces dinámicas y reutilizables con React JS.",
    aprendizajes: [
      "Comprenderás los fundamentos de React y JSX.",
      "Aprenderás a manejar estados y props para crear componentes funcionales.",
      "Implementarás hooks como useState y useEffect para gestionar la lógica del componente."
    ],
    fecha: "SEP 2025",
    duracion: "8 horas",
    nivel: "Intermedio",
    precio: "S/25 PEN",
    imagen: "/img/curso-react.jpg",
    temario: [
      {
        titulo: "1. Fundamentos de React",
        descripcion: "Introducción a React y su ecosistema.",
        contenido: [
          { titulo: "1.1 - Instalación y configuración", duracion: "10:00" },
          { titulo: "1.2 - Componentes y JSX", duracion: "12:00" },
          { titulo: "1.3 - Props y State", duracion: "15:00" }
        ]
      },
      {
        titulo: "2. Hooks en React",
        descripcion: "Conceptos avanzados para desarrollar aplicaciones modernas.",
        contenido: [
          { titulo: "2.1 - useState y useEffect", duracion: "18:00" },
          { titulo: "2.2 - useContext y useReducer", duracion: "20:00" },
          { titulo: "2.3 - Custom Hooks", duracion: "22:00" }
        ]
      }
    ],
    categoria: "Frontend",
    profesor: "Laura Gómez 🇨🇴",
    perfilProfesor: "@lauragomez Ver perfil",
    publico: [
      "Desarrolladores frontend o estudiantes interesados en aprender React desde cero."
    ]
  },
  {
    id: 7,
    nombre: "Curso de TypeScript",
    descripcion: "Domina TypeScript para escribir código JavaScript más seguro y escalable.",
    aprendizajes: [
      "Dominarás los tipos básicos y avanzados de TypeScript.",
      "Crearás interfaces y tipos personalizados para mejorar la legibilidad del código.",
      "Implementarás TypeScript en proyectos React y Node.js."
    ],
    fecha: "OCT 2025",
    duracion: "6 horas",
    nivel: "Intermedio",
    precio: "S/20 PEN",
    imagen: "/img/curso-typescript.png",
    temario: [
      {
        titulo: "1. Fundamentos de TypeScript",
        descripcion: "Introducción a TypeScript y su integración con JavaScript.",
        contenido: [
          { titulo: "1.1 - Tipos básicos", duracion: "10:00" },
          { titulo: "1.2 - Interfaces y tipos", duracion: "12:00" },
          { titulo: "1.3 - Funciones y clases", duracion: "15:00" }
        ]
      },
      {
        titulo: "2. TypeScript Avanzado",
        descripcion: "Conceptos avanzados para proyectos complejos.",
        contenido: [
          { titulo: "2.1 - Tipos genéricos", duracion: "18:00" },
          { titulo: "2.2 - Módulos y namespaces", duracion: "20:00" },
          { titulo: "2.3 - Integración con React", duracion: "22:00" }
        ]
      }
    ],
    categoria: "Backend/Frontend",
    profesor: "Carlos Rivas 🇲🇽",
    perfilProfesor: "@carlosrivas Ver perfil",
    publico: [
      "Desarrolladores frontend/backend interesados en mejorar la seguridad del código."
    ]
  },
  {
    id: 8,
    nombre: "Curso de Git y GitHub",
    descripcion: "Aprende a usar Git y GitHub para el control de versiones y colaboración en proyectos.",
    aprendizajes: [
      "Dominarás los comandos básicos de Git para gestionar repositorios locales.",
      "Aprenderás a trabajar con ramas y resolver conflictos de fusión.",
      "Implementarás flujos de trabajo colaborativos con GitHub."
    ],
    fecha: "NOV 2025",
    duracion: "4 horas",
    nivel: "Básico",
    precio: "S/10 PEN",
    imagen: "/img/curso-git-github.jpg",
    temario: [
      {
        titulo: "1. Fundamentos de Git",
        descripcion: "Introducción a Git y su uso en proyectos individuales.",
        contenido: [
          { titulo: "1.1 - Instalación y configuración", duracion: "08:00" },
          { titulo: "1.2 - Comandos básicos", duracion: "10:00" },
          { titulo: "1.3 - Trabajo con ramas", duracion: "12:00" }
        ]
      },
      {
        titulo: "2. Colaboración con GitHub",
        descripcion: "Uso de GitHub para colaborar en proyectos en equipo.",
        contenido: [
          { titulo: "2.1 - Creación de repositorios remotos", duracion: "15:00" },
          { titulo: "2.2 - Pull requests y code reviews", duracion: "18:00" },
          { titulo: "2.3 - Resolución de conflictos", duracion: "20:00" }
        ]
      }
    ],
    categoria: "Herramientas de Desarrollo",
    profesor: "Ana Torres 🇪🇸",
    perfilProfesor: "@anatorres Ver perfil",
    publico: [
      "Desarrolladores o estudiantes interesados en aprender control de versiones."
    ]
  },
  {
    id: 9,
    nombre: "Curso de Angular",
    descripcion: "Domina Angular Framework para construir aplicaciones web robustas y escalables.",
    aprendizajes: [
      "Comprenderás los conceptos básicos de Angular y su arquitectura.",
      "Aprenderás a crear componentes, servicios y módulos.",
      "Implementarás routing y formularios reactivos."
    ],
    fecha: "DIC 2025",
    duracion: "10 horas",
    nivel: "Intermedio",
    precio: "S/30 PEN",
    imagen: "/img/curso-angular.jpeg",
    temario: [
      {
        titulo: "1. Fundamentos de Angular",
        descripcion: "Introducción a Angular y su ecosistema.",
        contenido: [
          { titulo: "1.1 - Configuración del entorno", duracion: "10:00" },
          { titulo: "1.2 - Componentes y templates", duracion: "12:00" },
          { titulo: "1.3 - Data binding", duracion: "15:00" }
        ]
      },
      {
        titulo: "2. Angular Avanzado",
        descripcion: "Conceptos avanzados para proyectos complejos.",
        contenido: [
          { titulo: "2.1 - Routing y navegación", duracion: "18:00" },
          { titulo: "2.2 - Formularios reactivos", duracion: "20:00" },
          { titulo: "2.3 - Servicios y HTTP", duracion: "22:00" }
        ]
      }
    ],
    categoria: "Frontend",
    profesor: "Mario López 🇵🇪",
    perfilProfesor: "@mariolopez Ver perfil",
    publico: [
      "Desarrolladores frontend interesados en aprender Angular desde cero."
    ]
  },
  {
    id: 10,
    nombre: "Curso de Spring Boot",
    descripcion: "Aprende a construir aplicaciones backend robustas con Spring Boot.",
    aprendizajes: [
      "Dominarás los conceptos básicos de Spring Boot y su ecosistema.",
      "Crearás APIs RESTful utilizando Spring MVC.",
      "Implementarás bases de datos relacionales con JPA y Hibernate."
    ],
    fecha: "ENE 2026",
    duracion: "12 horas",
    nivel: "Intermedio",
    precio: "S/35 PEN",
    imagen: "/img/curso-springboot.webp",
    temario: [
      {
        titulo: "1. Fundamentos de Spring Boot",
        descripcion: "Introducción a Spring Boot y su configuración.",
        contenido: [
          { titulo: "1.1 - Instalación y configuración", duracion: "10:00" },
          { titulo: "1.2 - Creación de APIs RESTful", duracion: "12:00" },
          { titulo: "1.3 - Manejo de excepciones", duracion: "15:00" }
        ]
      },
      {
        titulo: "2. Spring Boot Avanzado",
        descripcion: "Conceptos avanzados para proyectos complejos.",
        contenido: [
          { titulo: "2.1 - Integración con bases de datos", duracion: "18:00" },
          { titulo: "2.2 - Seguridad con Spring Security", duracion: "20:00" },
          { titulo: "2.3 - Testing de aplicaciones", duracion: "22:00" }
        ]
      }
    ],
    categoria: "Backend",
    profesor: "Andres Sacco 🇦🇷",
    perfilProfesor: "@andressacco Ver perfil",
    publico: [
      "Desarrolladores backend interesados en aprender Spring Boot desde cero."
    ]
  },
  {
    id: 11,
    nombre: "Curso de PHP",
    descripcion: "Aprende a desarrollar aplicaciones web dinámicas con PHP.",
    aprendizajes: [
      "Dominarás la sintaxis básica de PHP y sus estructuras de control.",
      "Crearás aplicaciones web dinámicas utilizando MySQL.",
      "Implementarás sesiones y autenticación para mejorar la seguridad."
    ],
    fecha: "FEB 2026",
    duracion: "8 horas",
    nivel: "Básico",
    precio: "S/20 PEN",
    imagen: "/img/curso-php.png",
    temario: [
      {
        titulo: "1. Fundamentos de PHP",
        descripcion: "Introducción a PHP y su integración con HTML.",
        contenido: [
          { titulo: "1.1 - Variables y tipos de datos", duracion: "08:00" },
          { titulo: "1.2 - Estructuras de control", duracion: "10:00" },
          { titulo: "1.3 - Funciones y arrays", duracion: "12:00" }
        ]
      },
      {
        titulo: "2. PHP Avanzado",
        descripcion: "Conceptos avanzados para proyectos complejos.",
        contenido: [
          { titulo: "2.1 - Conexión con MySQL", duracion: "15:00" },
          { titulo: "2.2 - Sesiones y autenticación", duracion: "18:00" },
          { titulo: "2.3 - APIs RESTful con PHP", duracion: "20:00" }
        ]
      }
    ],
    categoria: "Backend",
    profesor: "Carlos Rivas 🇲🇽",
    perfilProfesor: "@carlosrivas Ver perfil",
    publico: [
      "Principiantes o desarrolladores interesados en aprender PHP desde cero."
    ]
  }
  
];
  
  


// Obtener el ID del curso desde la URL (por ejemplo: ?id=1)
const params = new URLSearchParams(window.location.search);
const cursoId = params.get('id');

// Buscar el curso por su ID
const curso = cursos.find(curso => curso.id == cursoId);

if (curso) {
  // Función para llenar dinámicamente los datos del curso
  function llenarDatosCurso(curso) {
    // Título de la página
    document.title = `Curso: ${curso.nombre}`;

    // Encabezado
    document.querySelector('h1').textContent = ` ${curso.nombre}`;
    document.querySelector('.descripcion').textContent = curso.descripcion;

    // Aprendizajes
    const aprendizajesList = document.querySelector('.encabezado ul');
    aprendizajesList.innerHTML = ''; // Limpiar antes de agregar nuevos elementos
    curso.aprendizajes.forEach(aprendizaje => {
      const li = document.createElement('li');
      li.textContent = aprendizaje;
      aprendizajesList.appendChild(li);
    });

    // Información extra
    document.querySelector('.info-extra p').textContent = `📅 ${curso.fecha} ⏱ ${curso.duracion} 📈 ${curso.nivel}`;

    // Botón de compra
    document.getElementById('btnAgregarCarrito').innerHTML = `🛒 Compra solo este curso por <del>S/69</del> ${curso.precio}`;

    // Imagen del curso
    document.querySelector('.imagen-curso img').src = curso.imagen;
    document.querySelector('.imagen-curso img').alt = `Curso de ${curso.nombre}`;

    // Temario
    const temarioDiv = document.querySelector('.temario .modulo');
    temarioDiv.innerHTML = ''; // Limpiar antes de agregar nuevos elementos
    curso.temario.forEach(modulo => {
      const divModulo = document.createElement('div');
      divModulo.classList.add('modulo', 'mb-4');
      divModulo.innerHTML = `
        <h3>${modulo.titulo} <span class="badge bg-success">Gratis</span></h3>
        <p>${modulo.descripcion}</p>
        <ul>
          ${modulo.contenido.map(item => `<li>✅ ${item.titulo} <span class="duracion">${item.duracion}</span></li>`).join('')}
        </ul>
      `;
      temarioDiv.appendChild(divModulo);
    });

   // Categoría
   document.getElementById('curso-categoria').textContent = curso.categoria;

   // Profesor
   document.getElementById('curso-profesor').innerHTML = `${curso.profesor}<br><a href="#" class="text-info">${curso.perfilProfesor}</a>`;

   // Público objetivo
   const publicoList = document.getElementById('curso-publico');
   publicoList.innerHTML = ''; // Limpiar antes de agregar nuevos elementos
   curso.publico.forEach(público => {
     const li = document.createElement('li');
     li.textContent = público;
     publicoList.appendChild(li);
   });
 }

  // Llenar los datos del curso
  llenarDatosCurso(curso);
} 

// Elementos del DOM
const btnAgregar = document.getElementById('btnAgregarCarrito');
const carritoIcono = document.querySelector('.bi-cart').closest('a');
const carrito = document.getElementById('carrito');
const contenido = document.getElementById('carrito-contenido');
const total = document.getElementById('carrito-total');

// Inicializar el Offcanvas de Bootstrap
const offcanvas = new bootstrap.Offcanvas(carrito);

// Cargar el carrito desde localStorage al iniciar
let carritoCursos = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para obtener los datos del curso desde el HTML dinámicamente
function obtenerDatosCursoDesdeHTML() {
  const nombre = document.querySelector('h1')?.textContent.trim();
  const imagen = document.querySelector('.imagen-curso img')?.getAttribute('src');

  // Extraer el precio con descuento (el último precio en el texto del botón)
  const precioTexto = document.getElementById('btnAgregarCarrito')?.textContent;
  const precios = precioTexto?.matchAll(/S\/(\d+)/g); // Encuentra todos los precios
  const preciosArray = precios ? Array.from(precios) : []; // Convertir a array
  const precioOferta = preciosArray.length > 1 ? parseFloat(preciosArray[preciosArray.length - 1][1]) : 0;

  return { nombre, imagen, precioOferta };
}

// Mostrar carrito
function mostrarCarrito() {
  if (carritoCursos.length === 0) {
    contenido.innerHTML = '<p class="text-center">Tu carrito está vacío.</p>';
    total.textContent = 'S/0.00 PEN';
    offcanvas.show();
    return;
  }

  contenido.innerHTML = carritoCursos.map((curso, index) => generarHTMLCurso(curso, index)).join('');
  actualizarTotal();
  offcanvas.show();
}

// Abrir carrito desde el ícono del navbar
if (carritoIcono) {
  carritoIcono.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarCarrito();
  });
}

// Abrir desde botón "Agregar al carrito" (solo en detalle-curso.html)
if (btnAgregar) {
  btnAgregar.addEventListener('click', () => {
    const cursoActual = obtenerDatosCursoDesdeHTML();

    // Evitar duplicados
    const yaExiste = carritoCursos.some(c => c.nombre === cursoActual.nombre);
    if (!yaExiste) {
      carritoCursos.push(cursoActual); // Agregar el curso al carrito
      localStorage.setItem('carrito', JSON.stringify(carritoCursos)); // Guardar en localStorage
    }

    mostrarCarrito(); // Actualizar la vista del carrito
  });
}

// Generar contenido HTML para un curso
function generarHTMLCurso(curso, index) {
  return `
    <div class="carrito-item">
      <div class="d-flex align-items-center">
        <img src="${curso.imagen}" alt="${curso.nombre}" class="img-fluid rounded me-3" style="width: 100px; height: 60px;" />
        <div class="carrito-item-info">
          <p class="mb-1 fw-bold">${curso.nombre}</p>
          <p class="text-success">S/${curso.precioOferta.toFixed(2)} PEN</p>
        </div>
      </div>
      <i class="bi bi-trash-fill text-danger fs-5" onclick="eliminarDelCarrito(${index})"></i>
    </div>
  `;
}

// Eliminar un curso del carrito
function eliminarDelCarrito(index) {
  carritoCursos.splice(index, 1); // Eliminar el curso del arreglo
  localStorage.setItem('carrito', JSON.stringify(carritoCursos)); // Actualizar localStorage
  mostrarCarrito(); // Actualizar la vista del carrito
}

// Calcular el total del carrito
function actualizarTotal() {
  const totalValor = carritoCursos.reduce((acc, curso) => acc + curso.precioOferta, 0);
  total.textContent = `S/${totalValor.toFixed(2)} PEN`;
}

// Importar SweetAlert2 desde CDN
const Swal = window.Swal;

// Elemento del botón "Continuar compra"
const continuarCompraBtn = document.getElementById('continuarCompraBtn');

// Cargar el carrito desde localStorage


// Agregar evento al botón "Continuar compra"
if (continuarCompraBtn) {
  continuarCompraBtn.addEventListener('click', (e) => {
    // Prevenir la redirección predeterminada
    e.preventDefault();

    // Verificar si el carrito está vacío
    if (carritoCursos.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Carrito vacío',
        text: 'No puedes continuar porque tu carrito está vacío. Agrega cursos para proceder al pago.',
      });
    } else {
      // Redirigir al usuario a la página de pago
      window.location.href = '/pago.html';
    }
  });
}