function Konstruktor()
{
    
    this.pole1='wartosc1'
    this.pole2 ='wartosc2'
    console.log('Dziala Konstruktor')
}

Konstruktor.prototype.pole3='warotsc3'
Konstruktor.borys ={}
Konstruktor.borys.andrzej="Magda"
Konstruktor()

obiekt = new Konstruktor()


for (const key in Konstruktor) {
    console.log(key)
 }

 console.log('\n\n')

for (const key in obiekt) {
   console.log(key)
}