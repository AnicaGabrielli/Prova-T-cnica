let sequenciaF = [0, 1];

function calcularS(num) {
    if (num < 0) {
        console.log("Números negativos não fazem parte da sequência Fibonacci");
    } else {
        let i = 2;
        while (sequenciaF[i - 1] <= num) {
            sequenciaF.push(sequenciaF[i - 1] + sequenciaF[i - 2]);
            if (sequenciaF[i] === num) {
                console.log(`O número ${num} pertence à sequência de Fibonacci: ${sequenciaF}`);
                return;
            }
            i++;
        }
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

calcularS(144);
