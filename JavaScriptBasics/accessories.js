obiekt = {
    pole1: 1,
    pole2: 2,
    pole3: 3,
    set pole(value) {
        pole3 = value
        pole1 = value
        pole2 = value
    }
}

obiekt.pole=10
for(key in obiekt)
{
    console.log(obiekt[key],'\n')
}
