 // Cargar el carrito desde localStorage
  const carritoCursos = JSON.parse(localStorage.getItem('carrito')) || [];

  // Elementos del DOM
  const resumenCarrito = document.getElementById('resumen-carrito');
  const carritoTotal = document.getElementById('carrito-total');

  // Función para generar el HTML de un curso
  function generarHTMLCurso(curso) {
    return `
      <div class="d-flex align-items-center mb-3">
        <img src="${curso.imagen}" alt="${curso.nombre}" class="me-3" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
        <div>
          <h5>${curso.nombre}</h5>
          <p>S/${curso.precioOferta.toFixed(2)} PEN</p>
        </div>
      </div>
    `;
  }

  // Mostrar los cursos del carrito
  function mostrarResumenCarrito() {
    if (carritoCursos.length === 0) {
      resumenCarrito.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
      carritoTotal.textContent = 'S/0.00';
      return;
    }

    // Generar el HTML para los cursos
    resumenCarrito.innerHTML = carritoCursos.map(curso => generarHTMLCurso(curso)).join('');

    // Calcular el total
    const totalValor = carritoCursos.reduce((acc, curso) => acc + curso.precioOferta, 0);
    carritoTotal.textContent = `S/${totalValor.toFixed(2)} PEN`;
  }

  // Inicializar el resumen del carrito
  mostrarResumenCarrito();