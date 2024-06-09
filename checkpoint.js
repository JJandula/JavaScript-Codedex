const frasesHoroscopo = [
    "El éxito te espera si sigues perseverando en tus metas.",
    "Es un buen momento para expresar tus sentimientos abiertamente.",
    "Recibirás una buena noticia que te llenará de alegría.",
    "Mantén la mente abierta a nuevas oportunidades que se presenten.",
    "Tu creatividad estará en su punto más alto esta semana.",
    "No te preocupes por lo que no puedes controlar, concéntrate en lo que sí.",
    "Un amigo te brindará el apoyo que necesitas en estos momentos.",
    "Sé amable contigo mismo y date el descanso que mereces.",
    "Hoy es un buen día para hacer algo que te saque de tu zona de confort.",
    "La vida te presentará desafíos, pero también te dará las herramientas para superarlos.",
    "Escucha tu voz interior y confía en tu sabiduría interna.",
    "Recuerda que cada día es una nueva oportunidad para crecer y aprender.",
    "La gratitud transforma lo que tenemos en suficiente.",
    "No temas pedir ayuda cuando la necesites; todos necesitamos apoyo a veces.",
    "Aprovecha al máximo cada momento presente, ya que el tiempo es un recurso valioso."
];


const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];


function randomIndex(lista) {
    return Math.floor(Math.random() * lista.length)
}

let randomText = randomIndex(frasesHoroscopo)
let randomIn = frasesHoroscopo[randomText]

let randomMes = randomIndex(meses)
let randomPos = meses[randomMes]


const mesUsuario = randomPos.toLowerCase()


if (mesUsuario === "enero")
    console.log("Tu mes es Enero, eres Capricornio: " + randomIn)
else if (mesUsuario === "febrero")
    console.log("Tu mes es Febrero, eres Acuario: " + randomIn)
else if (mesUsuario === "marzo")
    console.log("Tu mes es Marzo, eres Piscis: " + randomIn)
else if (mesUsuario === "abril")
    console.log("Tu mes es Abril, eres Aries: " + randomIn)
else if (mesUsuario === "mayo")
    console.log("Tu mes es Mayo, eres Tauro: " + randomIn)
else if (mesUsuario === "junio")
    console.log("Tu mes es Junio, eres Geminis: " + randomIn)
else if (mesUsuario === "julio")
    console.log("Tu mes es Julio, eres Cancer: " + randomIn)
else if (mesUsuario === "agosto")
    console.log("Tu mes es Agosto, eres Leo: " + randomIn)
else if (mesUsuario === "septiembre")
    console.log("Tu mes es Septiembre, eres Virgo: " + randomIn)
else if (mesUsuario === "octubre")
    console.log("Tu mes es Octubre, eres Libra: " + randomIn)
else if (mesUsuario === "noviembre")
    console.log("Tu mes es Noviembre, eres Escorpio: " + randomIn)
else if (mesUsuario === "diciembre")
    console.log("Tu mes es Diciembre, eres Sagitario: " + randomIn)
else {
    console.log("Error...")
}


