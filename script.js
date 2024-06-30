let tarifario = [];

async function cargarDatos() {
    try {
        const response = await fetch('tarifario.json'); // Esto buscará el archivo en la carpeta 'public'
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }
        tarifario = await response.json();
        console.log('Datos cargados:', tarifario);
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

function buscarValor() {
    const referencia = document.getElementById('referenceInput').value.trim().toUpperCase();
    const resultado = document.getElementById('resultado');

    const referenciaEncontrada = tarifario.find(item => item['Número de Referencia'].toUpperCase() === referencia);

    if (referenciaEncontrada) {
        const valor = referenciaEncontrada['Valor de Referencia Antes de IVA'].toLocaleString('es-ES', { maximumFractionDigits: 2 });
        resultado.textContent = `El valor de referencia antes de IVA es: $${valor}`;
    } else {
        resultado.textContent = 'Número de referencia no encontrado.';
    }
}

document.getElementById('searchButton').addEventListener('click', buscarValor);

// Iniciar la carga de datos al cargar la página
cargarDatos();
