// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(q1, q2, q3) {
    let qq;
    if (q1 > q2) {
        qq = q1
    }
    else{
        qq = q2
    }
    if (qq > q3) {
        return qq;
    }
    else {
        return q3;
    }
}
