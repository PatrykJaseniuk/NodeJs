function Plansza(x,y)
{
    const plansza={}
    plansza.plansza =new Array(y)
    for(index in plansza.plansza)
    {
        plansza.plansza[index]= new Array(x)
    }

    plansza.size={x:x, y:y}
    plansza.wyczysc = function()
    {
        plansza.plansza.forEach(value=>{
            for(index in value)
            {
                value[index]='*'
            }
        })
    }

    plansza.wyswietl = function()
    {
        plansza.plansza.forEach(value=>{
            value.forEach(value=>{
                console.log(value)
                console.log('+')
            })
            console.log('\n-')
        })
    }
    return plansza
}
const plansza = Plansza(10,10)

const obiekt={}
obiekt.tablica= []
obiekt.wypelnij= function()
{
    console.log('dziala wypelnianie')
    for(let index = 0; index < 10; index++)
    {
        this.tablica[index]='*'
    }
}
obiekt.wyswietl = function()
{
    console.log('dziala wyswietlanie')
    this.tablica.forEach(value=>{
        console.log(value)
    })
}

// plansza.wyswietl()
// plansza.wyczysc()

obiekt.wypelnij()
obiekt.wyswietl()
