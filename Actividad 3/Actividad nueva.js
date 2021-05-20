var fecha = new Date();
fecha.setTime(fecha.getTime()+1000*60*15);

function inicio(){
        res = prompt('Escribe "Derecha" o "Izquierda" según el camino que quiera escoger');
        if(res==='Derecha'){
            res2 = prompt('Escribe "Derecha" o "Izquierda" según el camino que quiera escoger');
            document.cookie="cook1=derecha";
            if(res2==='Derecha'){
                window.location = "./Bruja.html"
                document.cookie="cook2=derecha";

            }
            else if ( res2 ==='Izquierda'){
                window.location = "./Hongo.html"
                document.cookie="cook2=izquierda";

            }
        }  
        else if (res==='Izquierda'){
            res3 = prompt('Escribe "Derecha" o "Izquierda" según el camino que quiera escoger');
            document.cookie="cook1=Izquierda";
            if(res3==='Derecha'){
                window.location="./Arbol.html"
                document.cookie="cook2=Derecha"
            }
            else if (res3==='Izquierda'){
                window.location="./Casa.html"
                document.cookie="cook2=Izquierda"
            }
        }
}

let temporizador = setTimeout(inicio, 1500);