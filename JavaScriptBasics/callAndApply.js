

function g()
{
    return this.param1 + this.param2
}

ob={
    param1: 'Borysek',
    param2: 'Andrzejek'
}

//call
console.log(g.call(ob))

//apply

console.log(ob.apply)