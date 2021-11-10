const promis = function(input)
{
    return new Promise
    (
        function(out)
        {
            setTimeout(function(){out(input)},5000)
        }
    )
}

promis('Antoni').then(function(resault){console.log(resault)})

const p = new Promise
(
    function(r)
    {
        setTimeout(r,2000)
    }
)

p.then(function(){console.log('witam')})