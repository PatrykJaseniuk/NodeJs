function f(wiadomosc)
{
    console.log(wiadomosc)
}


setTimeout(function (){f('nareszcie skonczylem czekac')},1000)



setInterval(function(){f('dziala co jakis czas')},2000)


f('dziala natychmiast')