var y = 2;
var x = 1 + (y *= 2);
console.log(x);

var a = 2,
    b = -3;
if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
};

var c = 10;
switch (c) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    default:
        console.log(15);
}

function addition(x, y) {
    return x + y;
};
console.log(addition(2, 7));

function subtraction(x, y) {
    return x - y;
};
console.log(subtraction(2, 7));

function multiplication(x, y) {
    return x * y;
};
console.log(multiplication(2, 7));

function division(x, y) {
    return x / y;
};
console.log(division(2, 7));

function mathOperation(arg1, arg2, operation) {
    var result;
    switch (operation) {
        case addition:
            result = addition(arg1, arg2)
            console.log(result);
        case subtraction:
            result = subtraction(arg1, arg2)
            console.log(result);
        case multiplication:
            result = multiplication(arg1, arg2)
            console.log(result);
        default:
            result = division(arg1, arg2)
            console.log(result);
            return result;
    };
};
mathOperation(4, 5, division);

// null это отсутствие значения, поэтому он не равен ничему, даже 0.

function power(val, pow) {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    };
};

console.log(power(2, 3));

var a = 1, b = 1, c, d;
c = ++a;
alert(c); // 2 -префикс
d = b++;
alert(d); // 1 -постфикс
c = (2 + ++a);
alert(c); // 5 -префикс + уже сохраненное значение 2
d = (2 + b++);
alert(d); // 4 -постфикс + уже сохраненное значение 2
alert(a); // 3 -результат 2кратного применения оператора инкремента
alert(b); // 3 -результат 2кратного применения оператора инкремента
