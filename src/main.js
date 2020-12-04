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

     if(inicio > fin) {
         let t = inicio;
         inicio = fin;
         fin = t
     }
     
     for(let i = inicio; i <= fin; i = i + 1) {
            if(i%2 != 0) {
                impares = impares + 1;
            }
        }   
    return impares;
    }

    sumarParesWhile() {
     let z = 1;
     let suma = 0; 
     
     while(z <= 20) {
       
        if(z % 2 == 0) {
            suma = suma + z;
        }

        z = z + 1;
     }
     return suma;
    }

    contarImparesWhile(inicio, fin) {
        let i = inicio;
        let impares = 0;

        while(i <= fin) {

            if(i % 2 != 0) {
                impares++;
            }
            i++;
        }
        return impares;
    }

    sumarParesDo() {
        let i = 1;
        let suma = 0;

        do {
            if(i % 2 == 0) {
                suma = suma + i;
            }
            i++;
        } while(i <= 20);

        return suma;
    }

    contarImparesDo(inicio, fin) {
       
    
        let i = inicio;
    let impares = 0;
        
    
    
    do {

            if(i % 2 != 0) {
                impares++;
            }
            i++;
        } while(i <= fin);

        return impares;
    }
}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(4, 23));
console.log(app.contarImparesFor(23, 4));

console.log(app.sumarParesWhile());

console.log(app.contarImparesWhile(4, 12));

console.log(app.sumarParesDo());

console.log(app.contarImparesDo(11, 5));