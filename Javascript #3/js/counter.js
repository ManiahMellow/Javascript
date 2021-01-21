let a = 0;

naik.onclick = function () {
    a++;
    document.querySelector("h3").innerHTML= a;
};

turun.onclick = function () {
    if (a > 0) {
        a--;
        document.querySelector("h3").innerHTML = a;
    }
};