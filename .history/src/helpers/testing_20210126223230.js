let names = [ "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie"]
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const convertArrayToObject = (array, key) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item
    }),
    {}
  );

let results = convertArrayToObject(names, 'id')

console.log(results)

function createData(arr1){
let data = []

while(arr.length < i)
for(var i = 0; i <arr.length; i++){

   data.push({name: arr[i]})
}
return data
}

let resultData = createData(names)
console.log(resultData)