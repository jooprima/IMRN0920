console.log("===Soal 1===");
console.log("");

function teriak() {
  return "Halo Sanbers!";
}
console.log(teriak());
console.log(" ");

console.log("===Soal 2===");
console.log(" ");

function kalikan(x, y) {
  return x * y;
}
var num1 = 12;
var num2 = 4;
var hasilPerkalian = kalikan(num1, num2);
console.log(hasilPerkalian);

console.log(" ");

console.log("===Soal 3===");
console.log(" ");

function introduce(name, age, address, hobby) {
  var kalimat =
    "Nama saya adalah " +
    name +
    "," +
    " usia saya " +
    age +
    " tahun," +
    " alamat saya di " +
    address +
    "," +
    " dan hobby saya yaitu " +
    hobby +
    " !";
  return kalimat;
}

var name = "Yohanes";
var age = 30;
var address = "Jln. Rekayasa, Bolaang Mongondow";
var hobby = "Bercocok Tanam";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
console.log(" ");
