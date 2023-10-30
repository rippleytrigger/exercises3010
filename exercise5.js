let a, b, c;

a = 5;
b = 4;
c = 3;

(a > b && a > c)?
    console.log("A es el número mayor")
    :
    (b > a && b > c)?
    console.log("B es el número mayor")
    :
    (c > a && c > b)?
    console.log("C es el número mayor")
    :
    console.log("Todos los números son iguales")