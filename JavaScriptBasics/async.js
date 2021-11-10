const asyncFunction = async function()
{
    let slowo
    setTimeout(function(){slowo='Andzejek'},2000)
    return slowo
}

const anotherAsyncFunction = async function()
{
    let slowo = await asyncFunction()
    return slowo+=' Borysek'
}

anotherAsyncFunction().then(console.log)