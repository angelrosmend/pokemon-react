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
let i = 0;
let item1
let item2
while(i < arr1.length){
for(; i <arr2.length; i++){
   item2 = arr2[]
}
 item1 = arr1[i]
data.push({...item1, ...item2})

}

return data
}

let resultData = createData(names, ids)
console.log(resultData)