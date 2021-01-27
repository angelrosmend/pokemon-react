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

function createData( arr2, arr1){
let data = []

for(var j = 0; j <arr2.length; j++){
    for(var i = 0; i < arr1.length; i++){
     data.push({ name: arr2[j], id: arr1[i] })
    }

}

return data
}

let resultData = createData(names, ids)
console.log(resultData)