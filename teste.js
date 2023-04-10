
/*const dataAtual = new Date();
const dataAniverssario = new Date('2006','4','11');
console.log(dataAniverssario);

let dierencaMs = dataAtual.getMonth() - dataAniverssario.getMonth();

let diferencaM = (dataAtual.getFullYear() - dataAniverssario.getFullYear()) * 12;
diferencaM -= dataAniverssario.getMonth() + 1;
diferencaM += dataAtual.getMonth() + 1;

console.log(diferencaM); */

/* const dia = 1;
const mes = 1;
const ano = 2000;

const  dataAniverssario = new Date(`${ano}-${mes}-${dia}`);
const dataAtual = new Date();

let diferenca = dataAtual - dataAniverssario;
console.log(diferenca);

// Converter diferenca de ms para dias

let diasVividos = Math.round(diferenca / (24 * 60 * 60 * 1000));

console.log(diasVividos); */


/*const dataAniverssario = new Date('2006-12-1');
const dataAtual = new Date();


let diferenca = dataAtual.getFullYear() - dataAniverssario.getFullYear();

if(dataAtual.getMonth() < dataAniverssario.getMonth() || dataAtual.getMonth() === dataAniverssario.getMonth() && dataAtual.getDate() < dataAniverssario.getDate()){
    diferenca -= 1;
}

console.log(diferenca); */ 

/*const dataAtual = new Date();
const dtNasc = new Date('2006-6-11')

    let diferencaEmMs = dataAtual.getMonth() - dtNasc.getMonth();

    let diferencaM = (dataAtual.getFullYear() - dtNasc.getFullYear()) * 12;
    diferencaM -= dtNasc.getMonth() + 1;
    diferencaM += dataAtual.getMonth();

   /* let diferencaEmMeses = (dataAtual.getFullYear() - dtNasc.getFullYear()) * 12;
    diferencaEmMeses -= dtNasc.getMonth() + 1;
    diferencaEmMeses += dtAtual.getMonth(); 

    console.log(diferencaM); 


    const dataAtual = new Date();
const dataAniverssario = new Date('2006-6-11');
console.log(dataAniverssario);

let dierencaMs = dataAtual.getMonth() - dataAniverssario.getMonth();

let diferencaM = (dataAtual.getFullYear() - dataAniverssario.getFullYear()) * 12;
diferencaM -= dataAniverssario.getMonth() + 1;
diferencaM += dataAtual.getMonth();

console.log(diferencaM); */