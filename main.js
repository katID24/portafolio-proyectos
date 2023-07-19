let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Asistente de investigador, creadora de sitios web y artículos sobre química de alimentos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
