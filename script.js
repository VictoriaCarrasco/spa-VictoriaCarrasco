const content = document.getElementById("content");

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

function render() {
  const route = location.hash.slice(1) || "home";
  switch (route) {
    case "home":
      content.innerHTML = `
        <h1>🌐 Sitio en Construcción</h1>
        <p>Bienvenido al proyecto. Aún estamos trabajando en los contenidos.</p>
      `;
      break;
    case "carrusel":
      content.innerHTML = `
        <h2>🖼️ Carrusel de Imágenes</h2>
        <div class="carrusel">
          <img src="https://via.placeholder.com/500x200?text=Imagen+1" class="active" />
          <img src="https://via.placeholder.com/500x200?text=Imagen+2" />
          <img src="https://via.placeholder.com/500x200?text=Imagen+3" />
        </div>
      `;
      iniciarCarrusel();
      break;
    case "estructura":
      content.innerHTML = `
        <h2>📋 Estructura por completar</h2>
        <h3>🖼️ Acá ingrese una imagen:</h3>
        <img src="stitch.jpg" alt="Imagen de Stitch" />

        <h3>📄 Aquí va una tabla:</h3>
        <table>
          <tr>
            <th> Integrantes del grupo</th>
          </tr>
          <tr>
            <td> Victoria Carrasco </td>
          </tr>
          <tr>
            <td> Felipe Silva </td>
          </tr>
          <tr>
            <td> Carolina Ramirez </td>
          </tr>
          <tr>
            <td> Bastian Chavez </td>
          </tr>
        </table>

        <h3>📑 Acá va una lista ordenada:</h3>
        <ol>
          <li> Programación front end</li>
          <li> Base de datos no estructurada </li>
          <li> Seguridad de la información </li>
        </ol>

        <h3>📑 Acá va una lista no ordenada:</h3>
        <ul>
          <li> Programación front end</li>
          <li> Base de datos no estructurada </li>
          <li> Seguridad de la información </li>
        </ul>

        <h3>📥 Aquí debe ir un formulario:</h3>
        <form>
            <h2>Formulario de contacto:</h2>
            <label for="nombre"> Nombre:</label> <br>
            <input type="text" id="name" name="name"><br>
            <label for="correo"> Correo electronico:</label> <br>
            <input type="email" id="correo" name="correo"><br>
            <label for="lname"> Mensaje</label> <br>
            <textarea id="mensaje" name="mensaje" cols="30" placeholder="Escribe el mensaje aqui"></textarea><br><br>
            <input type="submit" value="Enviar">
        </form>

        <h3>🔘 Aquí agregue un botón:</h3>
        <buttom>Haz click aqui!</buttom>
      `;
      break;
    default:
      content.innerHTML = `<p>Ruta no encontrada.</p>`;
  }
}

function iniciarCarrusel() {
  const imgs = document.querySelectorAll(".carrusel img");
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove("active");
    current = (current + 1) % imgs.length;
    imgs[current].classList.add("active");
  }, 2000);
}
