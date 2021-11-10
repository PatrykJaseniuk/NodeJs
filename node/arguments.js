const argsParser = require('minimist')//modules/library to parse arguments

const args = process.argv.slice(2)
args.forEach((value, index)=>
{
    console.log(index," ",value)
})

parsedArgs = argsParser(args)

console.log(parsedArgs.borys) //arguments need to have '--' before its name example: '--borys=10'