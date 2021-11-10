console.time('pomiar')
const tablica =['pierwszy', 'drugi', 'trzeci','pierwszy']

for (const iterator of tablica) {
    console.count(iterator) //wyswietla liczbe, ile razy podany string zostal wyswietlony
}
for (const iterator of tablica) {
    console.count(iterator) //wyswietla liczbe, ile razy podany string zostal wyswietlony
}

console.countReset('pierwszy')
console.log('\n\ncount reset \'pierwszy\'\n\n')

for (const iterator of tablica) {
    console.count(iterator) //wyswietla liczbe, ile razy podany string zostal wyswietlony
}

//drukowanie stack trace
function f()
{
    g()
}
function g()
{
    h()
}
function h()
{
    console.trace()
}

f()
console.timeEnd('pomiar')//wyswietlanie pomimaru czasu

//colorowanie outputu

console.log ('\x1b[33m%s\x1b[0m', 'witam panstwa!')

//contorling output using library

const chalk = require('chalk')
console.log(chalk.red('Witam Wszystkich Czerwonych!'))

//progres bar

const ProgressBarr = require('progress')
const bar = new ProgressBarr(':bar', {total:10})
bar.step =function()
{
    bar.tick() //dlczego this.tick() nie dziala i musi byc bar.tick()
    if(this.complete)
    {
        clearInterval(timer)
    }
    console.count('borsy')
}


const timer = setInterval(bar.step, 1000)

const ob={}
ob.f=function(){console.log('dzial f')}
ob.g= function(){ this.f()}
ob.g()

