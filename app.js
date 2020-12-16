// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");
// document.write("Hello World"+"<br/>");

// for(let i=0; i< 10;i++) {
//     document.write("Hello World"+"<br/>");
// }


// for (i=0; i<10; i++) {
//     if (i===7) {
//     break;
//     }
// }

// document.write('"The" number is ' + i + "<br>");


// var x= 0;
// while (x<5) {
//     console.log(x);
//     x = x + 1;
// };

// // var x= 5;
// // while(x<5) {
// //     console.log(x);
// //     x = x + 1;
// // }







 

//     else {
//         document.write (i + "is odd" + "<br>");
//     }

// };

// var money= 3500.00;
// var bills= 4500.00;

// if (money > bills) {
//     document.write("You are covered!")
// }

// else if (money === bills || (money < 3000)) {
//     document.write("youre good, just barely!")
// }

// else if (money !== bills) {
//     document.write("Youre in trouble!")
// }

// else {
//     document.write ("Uh-Oh!")
// }


// var students= [["Kevin", 95], ["Marvin", 60], ["Syed", 75] ["Sheily", 40], ["Ngoc", 50]];

// var score = 0;

// console.log(score);

// if (score < 90) {
//     console.log("A+");
// }

// else if (score < 80) {
//     console.log("A");
// }

// else if (score < 70) {
//     console.log("B");
// }

// else if (score < 60) {
//     console.log("C");
// }

// else if (score < 50) {
//     console.log("F");
// }

// Break Statement, Return Value with the URL
//document.write
//alert


function assignGrade(score) {


    if (score > 90) {
        return 'A';
    }

    if (score > 80) {
        return 'B';
    }
    if (score > 70) {
        return 'C';
    }
    if (score > 60) {
        return 'D';
    }

    else {
        return 'F';
    }


}

document.write(' You got an ' + assignGrade(85) + "<br>");
document.write(' You got an ' + assignGrade(95) + "<br>");
document.write(' You got an ' + assignGrade(56) + "<br>");
document.write(' You got an ' + assignGrade(100) + "<br>");

assignGrade();

