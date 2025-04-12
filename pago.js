// Importar SweetAlert2 desde CDN
const Swal = window.Swal;

// Cargar el carrito desde localStorage
let carritoCursos = JSON.parse(localStorage.getItem('carrito')) || [];

// Elementos del DOM
const resumenCarrito = document.getElementById('resumen-carrito');
const carritoTotal = document.getElementById('carrito-total');
const creditCardForm = document.getElementById('creditCardForm');
const yapePlinForm = document.getElementById('yapePlinForm');
const payWithCreditCard = document.getElementById('payWithCreditCard');
const payWithYapePlin = document.getElementById('payWithYapePlin');

// Función para generar el HTML de un curso
function generarHTMLCurso(curso) {
  return `
    <div class="d-flex align-items-center mb-3">
      <img src="${curso.imagen}" alt="${curso.nombre}" class="me-3" style="width: 100px; height: 60px; object-fit: cover; border-radius: 8px;">
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

// Manejar la selección del método de pago
document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
  radio.addEventListener('change', () => {
    if (document.getElementById('creditCard').checked) {
      creditCardForm.style.display = 'block';
      yapePlinForm.style.display = 'none';
    } else if (document.getElementById('yapePlin').checked) {
      creditCardForm.style.display = 'none';
      yapePlinForm.style.display = 'block';
    }
  });
});

// Validar y procesar el pago con tarjeta de crédito
payWithCreditCard.addEventListener('click', () => {
  const cardNumber = document.getElementById('cardNumber').value.trim();
  const expirationDate = document.getElementById('expirationDate').value.trim();
  const cvv = document.getElementById('cvv').value.trim();
  const cardHolderName = document.getElementById('cardHolderName').value.trim();
  const documentType = document.getElementById('documentType').value.trim();
  const documentNumber = document.getElementById('documentNumber').value.trim();

  // Validar campos obligatorios
  if (!cardNumber || !expirationDate || !cvv || !cardHolderName || !documentType || !documentNumber) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa todos los campos obligatorios.',
    });
    return;
  }

  // Validar número de tarjeta
  if (!/^\d{16}$/.test(cardNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El número de tarjeta debe contener exactamente 16 dígitos.',
    });
    return;
  }

  // Validar fecha de expiración
  const [month, year] = expirationDate.split('/');
  const currentYear = new Date().getFullYear() % 100; // Últimos dos dígitos del año actual
  if (
    !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate) ||
    parseInt(month) < 1 ||
    parseInt(month) > 12 ||
    parseInt(year) < currentYear
  ) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'La fecha de expiración debe estar en formato MM/YY y ser válida.',
    });
    return;
  }

  // Validar CVV
  if (!/^\d{3}$/.test(cvv)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El CVV debe contener exactamente 3 dígitos.',
    });
    return;
  }

  // Validar tipo de documento
  if (!documentType) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Selecciona un tipo de documento.',
    });
    return;
  }

  // Validar número de documento
  if (documentType === 'DNI' && !/^\d{8}$/.test(documentNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El DNI debe contener exactamente 8 dígitos.',
    });
    return;
  }

  // Simular el proceso de pago
  procesarPago();
});

// Validar y procesar el pago con Yape/Plin
payWithYapePlin.addEventListener('click', () => {
  const yapeNumber = document.getElementById('yapeNumber').value.trim();
  const approvalCode = document.getElementById('approvalCode').value.trim();

  // Validar campos obligatorios
  if (!yapeNumber || !approvalCode) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa todos los campos obligatorios.',
    });
    return;
  }

  // Validar número de cuenta de Yape/Plin
  if (!/^\d{9}$/.test(yapeNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El número de cuenta de Yape/Plin debe contener exactamente 9 dígitos.',
    });
    return;
  }

  // Validar código de aprobación
  if (!/^\d{6}$/.test(approvalCode)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El código de aprobación debe contener exactamente 6 dígitos.',
    });
    return;
  }

  // Simular el proceso de pago
  procesarPago();
});

// Función para simular el proceso de pago
function procesarPago() {
  Swal.fire({
    icon: 'success',
    title: 'Pago exitoso',
    text: '¡Gracias por tu compra!',
    confirmButtonText: 'Ir al inicio',
  }).then(() => {
    // Limpiar el carrito
    localStorage.removeItem('carrito');
    carritoCursos = [];
    mostrarResumenCarrito();

    // Redirigir al index.html
    window.location.href = '/index.html';
  });
}