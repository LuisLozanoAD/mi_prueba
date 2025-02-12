const title = "Hola\n\n";
const letter = `Espero que te encuentres bien,

Si estás leyendo esto, es porque ese día no hubo clases… y, claro, te enteraste gracias a mí.

¿Y una partidita o te freseas?

¿Cómo no recordar esas noches interminables de juego? Risas que, sin darnos cuenta, se fueron transformando en conversaciones largas, en confidencias inesperadas. Obligados por una pandemia que nos encerró a todos en casa, pero que, sin saberlo, nos abrió la puerta el uno al otro. El mundo se detuvo, pero nosotros no.

Durante mucho tiempo, lo único que escuchaba era la melodía de tu voz y un inevitable "Tu compañero ha sido derribado" (sí, otra vez). Derrotas seguras, pero al menos las risas no faltaron. Y entre partida y partida, fui descubriendo algo más. ¿Es posible enamorarse de una voz? Yo lo hice. Aunque no era solo eso: eran tus historias interminables, tus risas espontáneas, tus ocurrencias que me sacaban carcajadas, esa forma tan sutil que tienes de avergonzarte… y sí, incluso tus enojos. Me gustaban más de lo que debería admitir. Sin darme cuenta, me estaba enamorando de ti. De quien eres realmente.

Por fin tenía una compañera… de charlas interminables y, bueno, de juegos no tan exitosos. Pero no importaba perder si te tenía cubriéndome las espaldas. Yo, que estaba tan acostumbrado a mi soledad, a mi tranquilidad, de pronto descubrí que el desorden bonito de tenerte cerca también daba paz. Que compartir mis días contigo no solo me hacía feliz, sino que me hacía sentir más vivo.

Y claro, como siempre, vinieron los miedos. "¿Esto es real?" me preguntaba. Esos pensamientos que no me dejaban en paz: ¿Podré cambiar? ¿Mi frialdad la lastimará? ¿Y si salgo herido? Así que hice lo que mejor sabía hacer: aislarme. Traté de alejarte, aunque en el fondo sabía que quería todo lo contrario. Pero en vez de irte, te quedaste. ¿Estás loca, mujer? me decía. ¿Qué ves en mí que ni yo mismo reconozco todavía?

Qué tonto era. No había nada que cuestionar. Yo ya te quería. Solo necesitaba aceptarlo. Pero amar no es fácil, ¿no? Bueno… cuando se trata de ti, sí lo es. Porque lo que sentía por ti era genuino. Y cuando un sentimiento es así, todo se vuelve más simple. Aunque mi yo del pasado no lo entendiera, aunque mis miedos gritaran más fuerte que mi corazón.

Llegó ese día en que tú, con toda tu valentía, decidiste que no podíamos seguir así. Y ahí fue cuando el miedo cambió de forma. Porque el miedo de perderte era mucho más grande que cualquier duda que tuviera. ¿Era necesario ese ultimátum? Probablemente no. Pero así de torpe soy. Solo necesitaba ese empujón para darme cuenta de que nunca quise perderte. Siempre quise que fueras tú.

Y ahora, aquí estoy, con estas palabras que quizás no alcancen, pero que salen del corazón.

Permíteme ser egoísta una vez más. Sé que tengo muchos errores, que a veces soy frío, y que no siempre hago las cosas bien. Pero si hay algo que tengo claro es que te quiero en mi vida. Tal vez no merezca pedirte esto, pero no puedo evitarlo.

¿Te quedas conmigo?
¿Quieres ser mi enamorada?

Con cariño,
Luis`;

const speed = 50;
let index = 0;

function typeWriter(text, elementId, callback) {
    if (index < text.length) {
        const element = document.getElementById(elementId);
        element.innerHTML += text.charAt(index);
        element.scrollTop = element.scrollHeight;  // Hace que el contenedor se desplace automáticamente
        index++;
        setTimeout(() => typeWriter(text, elementId, callback), speed);
    } else if (callback) {
        callback();
    }
}

window.onload = () => {
    typeWriter(title, 'typewriter-text', () => {
        index = 0;
        typeWriter(letter, 'typewriter-text');
    });
};
