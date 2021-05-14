console.log('Hola');
class Pokemon {
    constructor(nombre, naturaleza, tipo, vida, ataque, defensa, velocidad, nivel){
        this.nombre= nombre;
        this.naturaleza= naturaleza;
        this.tipo= tipo;
        this.vida= vida,
        this.ataque= ataque;
        this.defensa= defensa;
        this.velocidad= velocidad;
        this.nivel= nivel;
    }

    subir()
    {
        console.log('Su pokémon ha subido de nivel');
        this.nivel++;
        console.log(this.nivel);

        switch (this.naturaleza)
        {
            case 'Audaz':
                this.ataque++;
                console.log(this.ataque);
                break;
            case 'Osada':
                this.defensa++;
                console.log(this.defensa);
                break;
            case 'Cauta':
                this.vida++;
                console.log(this.vida);
                break;
            case 'Alegre':
                this.velocidad++;
                console.log(this.velocidad);
                break;
        }
        
        if(this.nivel>=100)
        {
            console.log('Felicidades, tu pokémon es nivel 100')
        }
    }

    presentarse()
    {
        console.log('Hola me llamo '+ this.nombre + '  soy tipo ' + this.tipo + '  y estoy al nivel ' + this.nivel);
    }

    suma()
    {
        console.log (this.vida + this.ataque + this.defensa + this.velocidad);
    }

    prom()
    {
        console.log ((this.vida + this.ataque + this.defensa + this.velocidad)/4)
    }
    
}
const CHARMANDER = new Pokemon('Charmander', 'Audaz',  'Fuego', 50,50, 40, 50,50);

const GOLBAT = new Pokemon ('Golbat', 'Osada','Veneno', 50,60,40,30,70);

const PIDGEOT = new Pokemon ('Pidgeot', 'Osada', 'Normal', 65, 70, 75, 70,90);

const ARBOK = new Pokemon ('Arbok', 'Audaz', 'Veneno', 80,70,75,80,85);

const KIKI = new Pokemon('Kiki','Alegre','Hada',100,100,100,100,100);
