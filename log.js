     document.addEventListener("DOMContentLoaded", function () {
        const userDropdown = document.getElementById("userDropdown");
        const usernameDisplay = document.getElementById("usernameDisplay");
    
        let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    
        if (usuarioActivo) {
          usernameDisplay.textContent = usuarioActivo.name;
        } else {
          usernameDisplay.textContent = "Iniciar sesión";
        }
    
        userDropdown.addEventListener("click", function (e) {
          e.preventDefault();
    
          usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    
          if (usuarioActivo) {
            mostrarModalPerfil(usuarioActivo.name);
          } else {
            mostrarModalLogin();
          }
        });
      });
    
      function mostrarModalPerfil(nombre) {
        const modalHTML = `
          <div class="modal fade" id="perfilModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content bg-dark text-white">
                <div class="modal-header">
                  <h5 class="modal-title">👤 Perfil</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                  <p>Hola, <strong>${nombre}</strong></p>
                  <button class="btn btn-danger mt-2" onclick="cerrarSesion()">Cerrar sesión</button>
                </div>
              </div>
            </div>
          </div>
        `;
    
        document.getElementById("perfilModal")?.remove();
    
        const wrapper = document.createElement("div");
        wrapper.innerHTML = modalHTML;
        document.body.appendChild(wrapper.firstElementChild);
    
        new bootstrap.Modal(document.getElementById("perfilModal")).show();
      }
    
      function mostrarModalLogin() {
        const modalHTML = `
          <div class="modal fade" id="loginModal" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-dark text-white">
                <div class="modal-header">
                  <h5 class="modal-title">Iniciar sesión</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <form id="loginForm">
                    <div class="mb-3">
                      <label for="loginEmail" class="form-label">Correo</label>
                      <input type="email" class="form-control" id="loginEmail" required />
                    </div>
                    <div class="mb-3">
                      <label for="loginPassword" class="form-label">Contraseña</label>
                      <input type="password" class="form-control" id="loginPassword" required />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Ingresar</button>
                  </form>
                  <hr>
                  <p class="text-center">¿No tienes cuenta? <a href="#" id="showRegister">Regístrate aquí</a></p>
                </div>
              </div>
            </div>
          </div>
        `;
    
        document.getElementById("loginModal")?.remove();
    
        const wrapper = document.createElement("div");
        wrapper.innerHTML = modalHTML;
        document.body.appendChild(wrapper.firstElementChild);
    
        const modal = new bootstrap.Modal(document.getElementById("loginModal"));
        modal.show();
    
        // Login
        document.getElementById("loginForm").addEventListener("submit", function (e) {
          e.preventDefault();
          const email = document.getElementById("loginEmail").value;
          const password = document.getElementById("loginPassword").value;
    
          const usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
          const usuario = usuarios.find(u => u.email === email && u.password === password);
    
          if (usuario) {
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
            document.getElementById("usernameDisplay").textContent = usuario.name;
            modal.hide();
            Swal.fire({ icon: 'success', title: `¡Bienvenido, ${usuario.name}!`, timer: 1500, showConfirmButton: false });
          } else {
            Swal.fire({ icon: 'error', title: 'Correo o contraseña incorrectos' });
          }
        });
    
        // Mostrar registro
        document.getElementById("showRegister").addEventListener("click", function (e) {
          e.preventDefault();
          modal.hide();
          setTimeout(mostrarModalRegistro, 300);
        });
      }
    
      function mostrarModalRegistro() {
        const modalHTML = `
          <div class="modal fade" id="registerModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
               <div class="modal-content bg-dark text-white">
                <div class="modal-header">
                  <h5 class="modal-title">Registro</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                  <form id="registerForm">
                    <div class="mb-3">
                      <label for="regName" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="regName" required />
                    </div>
                    <div class="mb-3">
                      <label for="regEmail" class="form-label">Correo</label>
                      <input type="email" class="form-control" id="regEmail" required />
                    </div>
                    <div class="mb-3">
                      <label for="regPassword" class="form-label">Contraseña</label>
                      <input type="password" class="form-control" id="regPassword" required />
                    </div>
                    <button type="submit" class="btn btn-success w-100">Registrarme</button>
                  </form>
                  <hr>
                  <p class="text-center">¿Ya tienes cuenta? <a href="#" id="showLogin">Inicia sesión</a></p>
                </div>
              </div>
            </div>
          </div>
        `;
    
        document.getElementById("registerModal")?.remove();
    
        const wrapper = document.createElement("div");
        wrapper.innerHTML = modalHTML;
        document.body.appendChild(wrapper.firstElementChild);
    
        const modal = new bootstrap.Modal(document.getElementById("registerModal"));
        modal.show();
    
        // Registro
        document.getElementById("registerForm").addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.getElementById("regName").value;
          const email = document.getElementById("regEmail").value;
          const password = document.getElementById("regPassword").value;
    
          let usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];
    
          if (usuarios.some(u => u.email === email)) {
            Swal.fire({ icon: 'warning', title: 'El correo ya está registrado' });
            return;
          }
    
          const nuevoUsuario = { name, email, password };
          usuarios.push(nuevoUsuario);
          localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));
          localStorage.setItem("usuarioActivo", JSON.stringify(nuevoUsuario));
          document.getElementById("usernameDisplay").textContent = name;
          modal.hide();
    
          Swal.fire({ icon: 'success', title: `¡Registrado con éxito, ${name}!`, timer: 1500, showConfirmButton: false });
        });
    
        // Volver al login
        document.getElementById("showLogin").addEventListener("click", function (e) {
          e.preventDefault();
          modal.hide();
          setTimeout(mostrarModalLogin, 300);
        });
      }
    
      function cerrarSesion() {
        localStorage.removeItem("usuarioActivo");
        Swal.fire({ icon: 'info', title: 'Sesión cerrada', timer: 1200, showConfirmButton: false });
        setTimeout(() => {
          location.reload();
        }, 1300);
      }
    