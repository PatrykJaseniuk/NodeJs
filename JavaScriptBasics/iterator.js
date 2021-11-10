function Constructor() {
    const obiekt = {}
    obiekt.atrybut0 = 'atrybut0'
    obiekt[Symbol.iterator] = function () 
    {
        const iterator = {}
       iterator.i=0
       iterator.array=[]
       for(key in this)
       {
            iterator.array[iterator.i++]= this[key]
       }
       iterator.i=0
        iterator.next = function () 
        {
            if (this.i < 5) {
                return { value: iterator.array[this.i++], done: false }
            }
            else 
            {
                return {value: null, done: true}
            }
        }
        return iterator;
    }
    return obiekt;
}

obiekt = Constructor()
obiekt.atrybut1 = "1"
obiekt.aa='aa'
obiekt.borysek ='borysk'

for (element of obiekt) {
    console.log(element)
}