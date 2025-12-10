function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcular() {
    let n = document.getElementById("numero").value;
    n = Number(n);

    let r = factorial(n);

    document.getElementById("resultado").textContent = r;
}
