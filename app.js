// Función para obtener el valor del input y llamar a la API
const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input-character');
    let valor = inputTexto.value.toLowerCase();
    peticionApi(valor);
}

// Función que realiza la petición a la API de Rick and Morty
const peticionApi = (character) => {
    const baseUrl = 'https://rickandmortyapi.com/api/character/';
    const endpoint = `?name=${character}`;
    const url = `${baseUrl}${endpoint}`;

    axios
      .get(url)
      .then((res) => printData(res.data.results[0]))
      .catch((err) => console.log(err));
}

const printData = (data) => {
  let respuesta = document.getElementById('show-info');
  respuesta.style.display = 'block'; 
  respuesta.innerHTML = `
    <img src="${data.image}" alt="${data.name}">
    <label><h3>Nombre: ${data.name}</h3></label>
    <label><h3>Estado: ${data.status}</h3></label>
    <label><h3>Especie: ${data.species}</h3></label>
  `;
}

// Función para mostrar un mensaje de error si el personaje no es encontrado
const printError = (mensaje) => {
  let respuesta = document.getElementById('show-info');
  respuesta.style.display = 'block';
  respuesta.classList.add('error-message'); // Añadir clase de error
  respuesta.innerHTML = `
    <label><h3>${mensaje}</h3></label>
  `;
}

// Agregar el evento al botón para buscar el personaje
document.getElementById('search-btn').addEventListener('click', obtenerValorInput);
