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

}

let app = new App();

console.log(app.sumarParesFor());