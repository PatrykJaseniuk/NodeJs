//AM
const promis = new Promise(function(funkcjaPierwsza,funkcjaDruga)
{
    console.log('promis rozpoczyna prace')
    setTimeout(funkcjaPierwsza,1000)
    console.log('promis konczy prace')
})

console.log('po skonstruowaniu promisu')
let wynik
setTimeout(function()
{
   wynik =  promis.then
(
   function(){return 'operacje zakonczone powodzeniem'}
)

},2000)

//setInterval(function(){console.log('stan obietnicy:'+ promis.state+' '+ 'wynik: '+ promis.result)},1000)

//console.log( wynik)