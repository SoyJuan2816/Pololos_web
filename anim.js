// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Regálame tu corazón", time: 26 },
  { text: "Déjame entrar a ese lugar", time: 29 },
  { text: "Donde nacen las flores", time: 35 },
  { text: "Donde nace el amor", time: 40 },
  { text: "Entrégame tus labios rotos", time: 44 },
  { text: "Los quiero besar", time: 47 },
  { text: "Los quiero curar", time: 49 },
  { text: "Los voy a cuidar", time: 53 },
  { text: "Con todo mi amor", time: 57 },

  { text: "Es raro el amor", time: 64 },
  { text: "(Ah, ah, ah)", time: 66 },
  { text: "Es raro el amor", time: 68 },
  { text: "(Ah, ah, ah)", time: 70 },
  { text: "Que se te aparece cuando menos piensas", time: 73 },
  { text: "Es raro el amor", time: 77 },
  { text: "(Ah, ah, ah)", time: 79 },
  { text: "Es raro el amor", time: 80 },
  { text: "(Ah, ah, ah)", time: 82 },
  { text: "No importa la distancia", time: 85 },
  { text: "Ni el tiempo", time: 87 },
  { text: "Ni la edad", time: 89 },
  { text: "Uh, uh, uh", time: 91 },

  { text: "Moja el desierto de mi alma", time: 119 },
  { text: "Con tu mirar", time: 122 },
  { text: "Con tu tierna voz", time: 123 },
  { text: "Con tu mano en mi mano", time: 128 },
  { text: "Por la eternidad", time: 132 },
  { text: "Y entrégame esos labios rotos", time: 136 },
  { text: "Los quiero besar", time: 138 },
  { text: "Los quiero curar", time: 140 },
  { text: "Los voy a cuidar", time: 145 },
  { text: "Con todo mi amor", time: 149 },

  { text: "Es raro el amor", time: 157 },
  { text: " (Ah, ah, ah)", time: 159 },
  { text: "Es raro el amor", time: 159.8 },
  { text: " (Ah, ah, ah)", time: 162 },
  { text: "Que se te aparece cuando menos piensas", time: 164 },
  { text: "Es raro el amor", time: 169 },
  { text: " (Ah, ah, ah)", time: 171 },
  { text: "Es raro el amor", time: 174 },
  { text: "(Ah, ah, ah)", time: 176 },
  { text: "No importa la distancia", time: 177.5 },
  { text: "Ni el tiempo", time: 179 },
  { text: "Ni la edad", time: 181 },
  { text: "Uh, ah-ah-ah", time: 184 },
  { text: "Uh, ah-ah-ah", time: 188 },

  { text: "Ah-ah-ah", time: 199 },
  { text: "Ah-ah-ah", time: 204 },
  { text: "Amor, amor", time: 208 },
  { text: "Amor, amor", time: 210 },
  { text: "Amor, amor", time: 212 },
  { text: "Amor, amor", time: 214 },
  { text: "Amor, amor", time: 216 },
  { text: "Amor, amor, amor", time: 218 },
  { text: "Ah-ah-ah", time: 224 },
  { text: "Ah-ah-ah", time: 229 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);





var playPauseBtn = document.querySelector("#playPauseBtn");
var progressBar = document.querySelector("#progressBar");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
}

function updateProgressBar() {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
}

function seekAudio() {
  var seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
}

playPauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgressBar);
progressBar.addEventListener("input", seekAudio);