/// BAI 1
for (i=1;i<100;i++) {
    if (i==99)
        alert("Done!!!")
}


/// BAI 2
// let num = +prompt("Nhap nhiet do: ")
// while (num < 20 || num > 100) {
//     while (num > 100) {
//         num = prompt("Hay giam nhiet do: ")
//     }
//     while (num < 20) {
//         num = prompt("Hay tang nhiet do: ")
//     }
// }
// alert("Nhiet do Ok roi day pro!")

// / BAI 3 + 5
// let a = 0, b = 1, c
// let count = 1
// let sum = 0
// let number = +prompt("Nhap so chu so fibo muon hien thi: ")
// while (count <= number) {
//     c = a + b
//     a = b
//     b = c
//     sum += c
//     document.write(c + "<br>")
//     count++
// }
// document.write("Tong cua " + number + " so fibo dau tien la: "+ sum)

/// BAI 4
// let a = 0, b = 1, c = 1
// while (c % 5 !== 0) {
//     c = a + b
//     a = b
//     b = c
// }
// alert("So nguyen to dau tien chia het cho 5 la: " + c)

/// BAI 6
// let count = 0
// let sum = 0
// while (count < 30) {
//     sum += 7
//     console.log(sum)
//     count++
// }
// alert("Tong 30 so dau tien chia het cho 7: " + sum)

///BAI 7
// let result = ""
// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//         result += "FizzBuzz" + "<br>"
//     } else if (i % 5 === 0) {
//         result += "Buzz" + "<br>"
//     } else if (i % 3 === 0) {
//         result += "Fizz" + "<br>"
//     } else {
//         result += i + "<br>"
//     }
// }
// document.write(result)

///BAI 8
function kiemTra() {
    let a = prompt("Ban muon doan trong khoang noa: ")
    let random = parseInt(Math.random()*a)
    let b = prompt("Nhap so ban doan: ")
    let i
    for (i=1;i<=3;i++){
        if (b==random) {
            alert("Chuc mung ban da doan dung!")
            break
        } else if (b<random) {
            b = prompt("So ban nhap be hon! Hay nhap lai: ")
        } else {
            b = prompt("So ban nhap lon hon! Hay nhap lai: ")
        }
    }
    if (i=3 && b!=random) {
        alert("Het luot choi!")
    }
}

