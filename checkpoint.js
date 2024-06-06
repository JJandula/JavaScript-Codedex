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


const mesUsuario = randomPos


if (mesUsuario === "Enero")
    console.log("Tu mes es Enero, eres Capricornio: " + randomIn)
else if (mesUsuario === "Febrero")
    console.log("Tu mes es Febrero, eres Acuario: " + randomIn)
else if (mesUsuario === "Marzo")
    console.log("Tu mes es Marzo, eres Piscis: " + randomIn)
else if (mesUsuario === "Abril")
    console.log("Tu mes es Abril, eres Aries: " + randomIn)
else if (mesUsuario === "Mayo")
    console.log("Tu mes es Mayo, eres Tauro: " + randomIn)
else if (mesUsuario === "Junio")
    console.log("Tu mes es Junio, eres Geminis: " + randomIn)
else if (mesUsuario === "Julio")
    console.log("Tu mes es Julio, eres Cancer: " + randomIn)
else if (mesUsuario === "Agosto")
    console.log("Tu mes es Agosto, eres Leo: " + randomIn)
else if (mesUsuario === "Septiembre")
    console.log("Tu mes es Septiembre, eres Virgo: " + randomIn)
else if (mesUsuario === "Octubre")
    console.log("Tu mes es Octubre, eres Libra: " + randomIn)
else if (mesUsuario === "Noviembre")
    console.log("Tu mes es Noviembre, eres Escorpio: " + randomIn)
else if (mesUsuario === "Diciembre")
    console.log("Tu mes es Diciembre, eres Sagitario: " + randomIn)
else {
    console.log("Error...")
}


