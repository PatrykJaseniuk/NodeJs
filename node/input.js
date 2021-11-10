const redline = require('readline')

const interface = redline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interface.question('Powiedz co mam dla Ciebie zrobic\n',polecenie=>{
    console.log('Wybacz jeszcze nie potrafie wykonac polecenia:',polecenie)
    interface.close()
})