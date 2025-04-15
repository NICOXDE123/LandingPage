// 1. Selecciona un elemento por su ID
const titulo = document.getElementById("titulo");

// Añade un evento al hacer clic en el título
titulo.addEventListener("click", () => {
    // Cambia el texto del título cuando se hace clic
    titulo.textContent = "¡Buenos dias!";
});

// 2. Selecciona todos los elementos con la clase "cambiar-color"
const botones = document.getElementsByClassName("cambiar-color");

// Recorre cada botón y le agrega un evento de clic
for (let boton of botones) {
    boton.addEventListener("click", () => {
        // Cambia el color de fondo del body a un color aleatorio
        document.body.style.backgroundColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16); // Genera un color hexadecimal aleatorio
    });
}

// 3. Selecciona todas las imágenes de la página
const imagenes = document.getElementsByTagName("img");

for (let img of imagenes) {
    // Crea un nuevo elemento <p> como subtítulo debajo de cada imagen
    const caption = document.createElement("p");
    caption.textContent = "Imagen cargada exitosamente";
    caption.style.fontStyle = "italic"; // Estilo cursiva para el texto
    img.insertAdjacentElement("afterend", caption); // Inserta el subtítulo justo después de la imagen

    // Añade un evento para ampliar o reducir la imagen al hacer clic
    img.addEventListener("click", () => {
        img.classList.toggle("ampliada"); // Cambia la clase "ampliada" si ya está o no
    });
}

// 4. Selecciona un formulario con querySelector usando su ID
const formulario = document.querySelector("#formulario");

// Añade un evento al enviar el formulario
formulario.addEventListener("submit", e => {
    e.preventDefault(); // Previene el comportamiento por defecto (que se envíe y recargue la página)
    alert("Formulario enviado con éxito"); // Muestra un mensaje de alerta
});