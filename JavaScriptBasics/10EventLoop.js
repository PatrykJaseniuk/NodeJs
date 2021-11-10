const f = function()
{
    const Bar = require('progress')
    const bar = new Bar(':bar',10000000)
    for(i=0; i<10000000;i++)
    {
        bar.tick()
    }
}

setTimeout(function(){console.log('dziala'),0})
f()
console.log('witam')