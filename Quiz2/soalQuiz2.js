console.log("========================================== ");
console.log("1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)");
console.log("==========================================");
/*  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
  // Code disini
  constructor(subject, points, email) {
    this.subject = subject;
    this.points = points;
    this.email = email;
  }
  avg() {
    if (this.points.length > 1) {
      let sum = 0;
      let avg = 0;
      for (let i = 0; i < this.points.length; i++) {
        sum += this.points[i];
      }
      avg = sum / this.points.length;
      return avg;
    }
  }
}

//test case
let avgScore = new Score("Quiz", [60, 70, 85], "joprima@gmail.com");
console.log(avgScore.avg());
console.log();

console.log("========================================== ");
console.log("2. SOAL Create Score (10 Poin + 5 Poin ES6)");
console.log("==========================================");
/* Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 

  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"

  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/

const data = [
  ["email", "quiz-1", "quiz-2", "quiz-3"],
  ["abduh@mail.com", 78, 89, 90],
  ["khairun@mail.com", 95, 85, 88],
  ["bondra@mail.com", 70, 75, 78],
  ["regi@mail.com", 91, 89, 93],
];

viewScores = (data, subject) => {
  let result = [];
  let sub = data[0].indexOf(subject);
  for (let i = 1; i < data.length; i++) {
    let scores = new Score(subject, data[i][sub], data[i][0]);
    result.push(scores);
  }
  console.log(result);
};

// TEST CASE
viewScores(data, "quiz-1");
viewScores(data, "quiz-2");
viewScores(data, "quiz-3");
console.log();

console.log("========================================== ");
console.log("3. SOAL Recap Score (15 Poin + 5 Poin ES6)");
console.log("==========================================");
/*Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"

    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate

    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate

    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant

    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour

*/

recapScores = (data) => {
  for (let i = 1; i < data.length; i++) {
    let id = new Score("", [data[i][1], data[i][2], data[i][3]], data[i][0]);
    let totalScore = id.avg();

    if (totalScore > 90) {
      predikat = "honour";
    } else if (totalScore > 80) {
      predikat = "graduate";
    } else if (totalScore > 70) {
      predikat = "participant";
    }

    console.log(`${i}. Email: ${id.email}`);
    console.log(`Rata-rata: ${totalScore}`);
    console.log(`Predikat: ${predikat}`);
    console.log();
  }
};

recapScores(data);
