//ejemplo para combinar las promesas en promise all. Las promesa se enviara cuando se resuelvan todas y se enviaran segun su posicion en el array

async function generadorPdf() {
  try {
    const [datos, tasasDeInteres] = await Promise.all([Api.leerDatos(), db.leerTasas()])

    const deudores = await Deudores.calcularDeuda(datos, tasasDeInteres)
    const pdf = await PDF.generar(deudores)

    return pdf
  } catch (err) {
    console.error('Error con las promesas')
    throw err
  }
}
