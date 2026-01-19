// Funciona para abortar una promesa, fetch la incorporo no hace mucho como parametro secundario.

const controlador = new AbortController()

async function empezar() {
  const respuesta = await fetch(url, { signal: controlador.signal })

  const datos = await respuesta.json()
}

function cancelar() {
  controlador.abort()
}
