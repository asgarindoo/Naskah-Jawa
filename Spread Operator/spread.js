// Pecah Array
let numbers = [1, 2, 3, 4, 5];
let copyOfNumbers = [...numbers];
console.log("Pecah Array:", copyOfNumbers);

// Menggabungkan Array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log("Menggabungkan Array:", combinedArray);

// Menambah Properti ke Objek
let person = {
  name: "John",
  age: 30,
};
let updatedPerson = {
  ...person,
  occupation: "Developer",
};
console.log("Menambah Properti ke Objek:", updatedPerson);

// Fungsi dengan Jumlah Parameter yang Dinamis
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Fungsi dengan Jumlah Parameter yang Dinamis:", sum(1, 2, 3, 4, 5));
