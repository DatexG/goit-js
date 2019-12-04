const arr = [
  { name: "Petro", age: 17, hair: "yellow" },
  { name: "Vlad", age: 18, hair: "green" },
  { name: "Natasha", age: 19, hair: "yellow" }
];

const searchHair = function(arrs, har) {
  const result = [];

  for (const arr of arrs ) {
    if (har == arr.hair) {
      result.push(arr.name);
    }
  }
  return result;
};

console.log(searchHair(arr, "yellow"));

// console.log(people)
