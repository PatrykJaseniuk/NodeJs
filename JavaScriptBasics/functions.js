function f(arg1)
{
    arg1.param = 'zmiana wartosci'
}

let ob =5

//ob['param']='andzdrej'

f(ob)

console.log(ob['param'])

//call

function g()
{
    return this.param1 + this.param2
}

