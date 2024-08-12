let number = 0; // Índice del video actual
let data = []; // Array para almacenar los datos de videos

const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
const button = document.getElementById('btn');

// Función para obtener los datos del archivo JSON
function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        data = request.response; // Almacena los datos en la variable global
        updateContent(); // Muestra el primer video
      } else {
        console.error('Error al cargar los datos:', request.statusText);
      }
    }
  };
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

// Función para actualizar el contenido en la página
function updateContent() {
  if (data.length > 0) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
  }
}

// Función que maneja el clic del botón
function changeVideo() {
  if (data.length === 0) {
    // Si los datos aún no se han cargado, llama a getData
    getData();
  } else {
    // Si los datos ya están cargados, solo actualiza el contenido
    updateContent();
    number = (number + 1) % data.length; // Incrementa el índice y vuelve al inicio si es necesario
  }
}

window.onload = () => {
  button.addEventListener('click', changeVideo);
};
