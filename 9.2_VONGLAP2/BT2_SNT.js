let a = +prompt("Nhập vao so luong so nguyen to dau tien muon biet: ")
let number, i, j
let result = ""
// Truong hop nhap vao 1 thi chi ra so 2.
if (a===1) {
    result += "2"
    document.getElementById("result").innerHTML = result
} else {
    // Kiem tra tu so 3
for (number = 1, i = 3; number < a; i++) {
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            break
        }
    }
    if (j === i) {
        result += i + "<br>"
        number++
    }
}
result = "2" + "<br>" + result;
document.getElementById("result").innerHTML = result
}