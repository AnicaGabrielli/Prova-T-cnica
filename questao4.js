let faturamentoTotal = 67836.43 + 36678.66 + 29229.88 + 27165.48 + 19849.53;

let percentualSP = (67836.43 / faturamentoTotal) * 100;
let percentualRJ = (36678.66 / faturamentoTotal) * 100;
let percentualMG = (29229.88 / faturamentoTotal) * 100;
let percentualES = (27165.48 / faturamentoTotal) * 100;
let percentualOutros = (19849.53 / faturamentoTotal) * 100;

console.log("SP: " + percentualSP.toFixed(2) + "%");
console.log("RJ: " + percentualRJ.toFixed(2) + "%");
console.log("MG: " + percentualMG.toFixed(2) + "%");
console.log("ES: " + percentualES.toFixed(2) + "%");
console.log("OUTROS: " + percentualOutros.toFixed(2) + "%");
