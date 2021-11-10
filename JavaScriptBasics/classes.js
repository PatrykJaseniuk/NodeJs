class Komputer{
    constructor()
    {
        this.pole1="wartosc1"
    }
}

const ob = new Komputer()

console.log(ob.pole1)

class Dell extends Komputer
{
    constructor()
    {
        super()
        this.pole2='wartosc2'
    }
}

dell = new Dell()
console.log('\n'+ dell.pole1 + ' ' + dell.pole2 )

//mozna by to zrobic poprostu

function KlasaBazowa()
{
    const ob={}
    ob.pole1='klasaBazowa'
    return ob
}

function KlasaPochodna()
{
    const ob = KlasaBazowa()
    ob.pole2='klasaPochodna'
    return ob
}

const  obiekt = KlasaPochodna() 

console.log('\n\n'+ obiekt.pole1 + ' '+ obiekt.pole2)

//Wedlug mnie klasy w js sa nieprzydatne i kaplikuja kod