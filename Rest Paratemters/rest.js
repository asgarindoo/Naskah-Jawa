// Fungsi dengan rest parameter dalam objek
function displayPersonDetails(name, age, ...otherDetails) {
  console.log("Nama:", name);
  console.log("Umur:", age);
  console.log("Detail Tambahan:", otherDetails);
}

// Panggil fungsi dengan objek
displayPersonDetails("Mahmud", 25, "Programmer", "Cibaduyut");
