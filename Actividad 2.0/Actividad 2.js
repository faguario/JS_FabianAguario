const alto = Math.floor(Math.random()*10) + 1;
const ancho = Math.floor(Math.random()*10) + 1;
console.log('alto:'+alto);
console.log('ancho:'+ancho);
let mat = [];

    let a=0,b=1,c,d=1;
    for(let i = 0; i<alto;i++)
    { 
      mat[i] = new Array();
      for(let j=0; j<ancho;j++)
      {
        let c = a+b;
        mat[i].push(c);
          a = b;
          b = c;
        if(i%2==1){
          mat[i].reverse();
        }
      }
      aumenta=1;
    }
    console.log(mat);