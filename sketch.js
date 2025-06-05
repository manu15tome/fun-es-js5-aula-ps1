// let= faça
let campoIdade;

// atribuir um valor númerico
function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("50");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

// if= " se "
// else= " caso contrário "
function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "Minha Culpa";
    } else {
      return "Outer Banks";
    }
  } else {
    return "Enrolados";
  }
}

