// Array & Object
// Deklarasi array
// cara 1, Array literal
// let numbers = [1, 2, 3, 4, 5]
// tipe data dalam array dapat berbeda-beda
// cara 2, kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10)

// //tipe data adalam array
// let numbers = [1, 2, 3, 4, 5]//numbers
// let student = ["John", "Jane", "Bob"]//string
// let john = ['John', 30, true, [80, 90, 100]]//boolean

// console.log(numbers);
// console.log(student);
// console.log(john);

// //mengakses element di dalam array mealui index
// console.log(numbers[3]);
// console.log(student[1]);
// console.log(john[3]);
// console.log(john[3][1]);

// //mengubah nilai dalm array
// numbers[3]=100;
// console.log(numbers);

// //menghitung panjang aray banyak data
// console.log(numbers.length);

// //mengakses elements terakhir
// console.log(numbers[numbers.length -1 ]);

// //mengubah array menjadi string
// let array = [1, 2, 3, "halo", false, true];
// console.log(array.toString());

// //menggabungkan array dengan join()
// console.log(array.join()); // Output: 1,2,3,halo,false,true
// console.log(array.join(" ")); // Output: 1 2 3 halo false true
// console.log(array.join("#")); // Output: 1#2#3#halo#false#true
// console.log(array.join("...")); // Output: 1...2...3...halo...false...true

// //menambah dan mengeluarkan elements array
// //pop()
// array.pop();//menghapus element paling terakhir
// console.log(array);
// //push()
// array.push("Selamat Pagi");//menambhakan element di paling akhir
// console.log(array);
// //shift()
// array.shift();//menghapus element paling pertama
// console.log(array);
// //unshift
// array.unshift("Selamat Pagi");//menambahakan element di paling awal
// console.log(array);

// //menambah, menghapus dan mengganti element dengan splice()
// let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
// buah.splice(2, 0, "Lemon", "Kiwi"); //0 berarti tidak ada yang akan dihapus, sehingga hanya disisipkan
// console.log(buah); // Output: ["Pisang", "Jeruk", "Lemon", "Kiwi", "Apel", "Mangga"]

// let array = [1, 2, 3, "halo", false, true];
// console.log(array);
// buah.splice(4, 0, 4, 5); //0 berarti tidak ada yang akan dihapus, sehingga hanya disisipkan
// console.log(array);


// //Menggabungkan Lebih Dari Satu Array dengan concat()
// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);

// console.log(makanan); 

// //Mengambil Element Array dengan slice()
// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); 
// console.log(cemilanManis); 

// // JavaScript Object
// //berisi properti dan nilai
// //cara 1 object literal
// let john = {
//     firstName : 'john',
//     age : 38,
//     isMarriesd : true,
//     grade : [80, 90, 100],
// };
// console.log(john.firstName);

// //cara 2 dengan kata kunci new
// let orang = new Object();

// orang.nama = 'john';
// orang.umur = 67;
// orang.pekerjaan = 'programmer';

// console.log(orang);

// //cara akses
// //dot notation
// console.log(john.firstName);
// //bracket notation
// console.log(john["firstName"]);

// //Menambah Properti Baru pada Objek
// //dot notation
// john.pekerjaan = "programmer"
// console.log(john);
// //bracket Notation
// john['kebangsaan']= 'waega negara Indonesia'
// console.log(john);

//object method
let john = {
    firstName : 'john',
    age : 38,
    isMarriesd : true,
    grade : [80, 90, 100],
    sayGreetings: function () {
        console.log("Hello my name is" + this.firstName);
    },
};
console.log(john);

//delete object 
delete john.grade;
console.log(john);

//Array object
let student = {
    NIM : "123",
    Name : "abc",
    Address : "efg",
};
console.log(student);