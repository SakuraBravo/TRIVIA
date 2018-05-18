function introducirNombre(user){ <!--Función vinculada al botón-->
  var name = prompt("Ingresa tu nombre :)");
  var element = document.getElementById("name");
  element.innerHTML = "Bienvenid@ " + name + " <3";<!--me gustaría que aqui terminara la función-->
  var score = 0;

  <!--Hacemos una matriz con la localización de los id que se encuentran en el html-->
  var correcta = [document.getElementById("zona2-1"),document.getElementById("zona2-2"),document.getElementById("zona2-3")];
  var incorrecta = [document.getElementById("zona3-1"),document.getElementById("zona3-2"),document.getElementById("zona3-3")];

  <!--Declaramos dónde se imprimirán mi mensaje de Default y el Score-->
  var zonaDef = document.getElementById("zona4");
  var zonaScore = document.getElementById("zona5");

  <!--Declaramos Arrays(matrices) para las variables de preguntas y las posibles respuestas-->
  var preguntas = ["¿Cuál es la capital más segura del mundo?\n", "¿Cuál es la ciudad más contaminada del mundo?\n", "¿Cuál es la mejor ciudad para vivir?\n"];
  var respuestas1 = ["1. Ciudad de México\n", "2. Tokio\n", "3. Estocolmo\n", "4. Zurich\n"];
  var respuestas2 = ["A. Nueva Delhi\n", "B. Beijin\n","C. Pakistan\n","D. Los Ángeles\n"];
  var respuestas3 = ["1. Lausanne\n", "2. Fukuoka\n","3. Amsterdam\n","4. Barcelona\n"];

  <!--Comenzamos la Trivia-->
  var firstInter = confirm ("Bienvenid@ " + name + "\n" + "¿List@ para jugar?");
  if (firstInter){
  alert ("Por favor coloca el número o la letra que corresponda a la respuesta correcta.");<!--Instrucciones de la Trivia-->
  switch (prompt (preguntas[0] + respuestas1)){
    case "2":
      score = score + 1;
      alert("¡Respuesta correcta!");
      correcta[0].innerHTML = "¡Es correcto!    " + preguntas[0] + "    La respuesta " + respuestas1[1];
    break;
    default: alert ("Tu respuesta es incorrecta");
    incorrecta[0].innerHTML = "Tu respuesta a la pregunta:" + preguntas[0] + "es incorrecta." + "La respuesta correcta es:" + respuestas1[1];
    break;
  }
  switch (prompt(preguntas[1] + respuestas2).toUpperCase()) {
    case "C":
      score = score + 1;
      alert("¡MUY BIEN!");
      correcta[1].innerHTML = "¡Excelente!    " + preguntas[1] + "La letra " + respuestas2[2] + " es la respuesta correcta.";
      break;
    default: alert("¡UPS! Te equivocaste ");
      incorrecta[1].innerHTML = "La respuesta correcta a la pregunta " + preguntas[1] + "es:" + respuestas2[2];
    break;
  }
  switch (prompt(preguntas[2] + respuestas3)) {
    case "3":
      score = score + 1;
      alert("¡EXCELENTE! Eres un genio.");
      correcta[2].innerHTML = preguntas[2] + "obviamente es en   " + respuestas3[2];
      break;
    default: alert("U_U Te equivocaste, que mal.");
      incorrecta[2].innerHTML = "Que triste pero la respuesta correcta de   " + preguntas[2] + "es ese lugar llamado " + respuestas3[2];
    break;
  }
  zonaScore.innerHTML = "SCORE:" + score;
  }else {
    var zonaDef = document.getElementById("default");
    zonaDef.innerHTML = "Buuu Buuuu " + name + ":( Juguemos después";
  }
}
<!---->
