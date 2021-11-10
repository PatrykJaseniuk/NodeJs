
let promise1 = function (input) {
    return new Promise(function (resolve, reject) {
        console.log('dziala funkcja 1' + input)
        setTimeout(function(){resolve(input)},5000)
    })
}

let promise2 = function (input) {
    return new Promise(function (resolve, reject) {
        console.log('dziala funkcja 2 input:' + input)
        input += '\n  |'
        setTimeout(function(){resolve(input)}, 2000)
    })
}

let promise3 = function (input) {
    return new Promise
    (
        function (resolve, reject) 
        {
            console.log('dziala funkcja 3 input: ' + input)
            input += '\n--V--'
            setTimeout(function(){resolve(input)}, 1000)
        }
    )
}

let promise4 = function (input) { 
    return new Promise(function (resolve, reject) {
        console.log('dziala funkcja 4: ' + input)
        input += '\n  ||'
        setTimeout(function(){resolve(input)}, 500)
    })
}



let resolve1 = function (wynik) {
    console.log('wynik f1 ' + wynik)
    return promise2(wynik)
}

let resolve2 = function (wynik) {
    console.log('wynik f2 ' + wynik)
    return promise3(wynik)
}

let resolve3 = function (wynik) {
    return promise4(wynik)
}

let resolve4 = function (wynik) {
    console.log(wynik)
}

promise1('\n  O').then(resolve1).then(resolve2).then(resolve3).then(console.log)

//setTimeout(console.log('timeout'),2000)
