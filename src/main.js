export default class App {
 
    sumarParesFor() {
      let suma = 0;
        for(let x = 1; x <= 20; x = x + 1) {
        if(x%2 == 0) {
            suma = suma + x;
        }
      }  
    return suma;
    }

    contarImparesFor(inicio, fin) {
     let impares = 0;
        for(let i = inicio; i <= fin; i = i + 1) {
            if(i%2 != 0) {
                impares = impares + 1;
            }
        }   
    return impares;
    }

}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(4, 23));
console.log(app.contarImparesFor(3, 25));