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

function createData(arr1, arr2){
let data = []
let i = 0
while(arr1.length < i){
    let dataPoke = {}
for(var j = 0; j <arr2.length; j++){

 dataPoke = data.push({id: arr1.length, name: arr2[i] })

}
i++
}
return data
}

let resultData = createData(idsnames)
console.log(resultData)