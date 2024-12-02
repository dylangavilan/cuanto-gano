type Dolar = {
    compra: number
    venta: number
    nombre: string
    moneda: "USD"
    fechaActualizacion: string
    casa: Casas
}

type Casas = 'oficial' | 'contadoconliqui' | 'blue' | 'tarjeta' | 'ars';
