const fs = require('fs')

fs.stat('input.js',
    function (err, stats)
    {
        if (err)
        {
            console.log('error')
        }
        else
        {
            console.log(stats)    
        }        
    }
)

fs.open(
    'borysek.txt',
    'w+'
    , function (err, fileDiscriptor)
    {
            
    }
)
let content = 'AMGP'
fs.writeFile
(
    'plik.txt',
    content,
    function (error)
    {
        console.log(error)
    }
)

fs.readFile
(
    'plik.txt',
    'utf8',
    function (error, data)
    {
        if (error)
        {
            console.log('error')
        }
        else
        {
            console.log(data)
        }
    }
)