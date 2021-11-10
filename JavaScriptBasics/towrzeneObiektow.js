tablica = [];
tablica[0]='pierwszy element'
tablica[1]= 'drugi element'
tablica[3]= 'trzeci element'
tablica['czwarty']= 'czwarty element'
tablica.piaty = 'piaty element'

tablica.forEach(element => {
    console.log(element)
});

console.log(tablica.piaty)
console.log(tablica['czwarty'])
console.log(tablica.czwarty)
console.log(tablica['piaty'])
 obiekt ={}
obiekt.atrybut1 = 'wartosc pierwszego atrybutu'
obiekt.funkcja = function (){return this.atrybut1}
obiekt.lambda = ()=>{console.log('dziala lambda')}
obiekt.obiekt ={}
obiekt.obiekt.atrybut1='wartosc atrybutu 1 w obiekcie'
obiekt.obiekt.funkcja= function (){return this.atrybut1}

console.log('\n\n')
for (let i in tablica) //i przyjmuje wartosc kolejnych kluczy
{
    console.log(tablica[i])
}

console.log(obiekt.funkcja())
console.log(obiekt.obiekt.funkcja())
obiekt.lambda()

array = Object.values(obiekt)
array.forEach((value)=>{console.log(value)})

brakDefinicji = {}
brakDefinicji.pole='Borys'
console.log(brakDefinicji.pole)

function Konstruktor()
{
    const ob={}
    ob.pole1='vartosc1'
    ob.pole2 = 'vartosc2'
    ob.pole3 = 'vartosc3'
    return ob
}

const skonstruowanyObiekt = Konstruktor()
skonstruowanyObiekt.

console.log(skonstruowanyObiekt)