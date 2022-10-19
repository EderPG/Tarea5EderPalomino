function createParagraph() {
    // const para = document.createElement('p');
    // para.textContent = 'You clicked the button!';
    // document.body.appendChild(para);
    let dato1, dato2, dato3, num1, num2, num3;
dato1 = window.prompt("Introduzca primera nota ", "0");
num1 = parseFloat(dato1);
dato2 = window.prompt("Introduzca segunda nota ", "0");
num2 = parseFloat(dato2);
dato3 = window.prompt("Introduzca tercera nota ", "0");
num3 = parseFloat(dato3);
let resultado = (num1 + num2 + num3)/3;
if (resultado>=5){
    document.write(`<br/> <br/> El promedio es ${resultado} APROBADO` );
}
if (resultado<5){
    document.write(`<br/> <br/> El promedio es ${resultado} REPROBADO` );
}
  }
  
  const buttons = document.querySelectorAll('button');
  
  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }