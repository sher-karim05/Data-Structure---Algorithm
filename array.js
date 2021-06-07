const even = [2,4,6,8,10];
const names = ['saleem', 'sabir','javeed','kabir','faisal']
// iterate through array
for(const ev of even){
    console.log(ev)
}

even.push(4)
console.log(even.length)

const findIndex = even.findIndex(c => c === 8)
console.log(`Index of 8 is ${findIndex}`)

//splice remove an element at a certain index

names.splice(2,1);

console.log(`after fourth index one item is deleted ${names
}`)