const os = require('os')
const procesory = function ()
{ 
console.log('procesory: ')
for (const iterator of os.cpus())
{
    console.log(iterator)
}
}

const signals = function ()
{
    console.log('dostepne sygnaly:')
    for (const iterator of os.constants.signals) {
        console.log(iterator)
    }
    }
  
console.log('arcitektura: ' + os.arch())
procesory()
console.log('endian :' + os.endianness())
console.log('wolna pamiec: ' + os.freemem())
console.log('katalog domowy' + os.homedir())
console.log('hostname: ' + os.hostname())
console.log('cos :' + os.loadavg())
//signals()
console.log(os.constants.signals)