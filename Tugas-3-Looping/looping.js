console.log("============= SOAL 1 ================")
console.log("LOOPING PERTAMA")
var deret1 = 0;
while (deret1 < 20) {
    deret1 += 2
    console.log(deret1 + " - I love coding")
}
console.log("LOOPING KEDUA")
deret2 = 20;
while (deret2 > 0) {
    console.log(deret2 + " - I will become a frontend developer")
    deret2 -= 2
}

console.log("============= SOAL 2 ================")
for (var angka = 1; angka <= 20; angka++) {
    if (angka % 2 == 1 && angka % 3 == 0) {
        console.log(angka + " - I Love Coding ")
    } else if (angka % 2 == 1) {
        console.log(angka + " - Berkualitas ")
    } else {
        console.log(angka + " - Santai ")
    }
}

console.log("============= SOAL 3 ================")
for (var j = 0; j < 4; j++) {
    a = ""
    for (var i = 0; i < 8; i++) {
        a = a + "#"
    }
    console.log(a)
}

console.log("============= SOAL 4 ================")
a = ""
for (var i = 0; i < 7; i++) {
    console.log(a += "#")
}

console.log("============= SOAL 5 ================")
for (var j = 0; j < 8; j++) {
    a = ""
    if (j % 2 == 0) {
        for (var i = 0; i < 4; i++) {
            a += " "
            a += "#"
        }
    } else {
        for (var i = 0; i < 4; i++) {
            a += "#"
            a += " "
        }
    }
    console.log(a)
}