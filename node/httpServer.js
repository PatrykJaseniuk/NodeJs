const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer
(
    function (req, res)
    {
        res.statusCode = 200
        res.setHeader = ('content-Type', 'text/html')
        //res.end('<h1>Hello, World!</h1>')

        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            console.log(JSON.parse(data).todo); // 'Buy the milk'
            res.end();
        })
    }
)

server.listen
(
    port,
    function ()
    {
        console.log('server dziala na porcie', port)
    }
)