function createParagraph() {
    let dato1, dato2, num1, num2;
dato1 = window.prompt("Introduzca primer numero", "0");
num1 = parseFloat(dato1);
dato2 = window.prompt("Introduzca segundo numero", "0");
num2 = parseFloat(dato2);
if (num1>num2){
    document.write(`<br/> <br/> El numero ${num1} es mayor que ${num2}` );
}
else if (num1<num2){
    document.write(`<br/> <br/> El numero ${num2} es mayor que ${num1}` );
}
  }
  
  const buttons = document.querySelectorAll('button');
  
  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }