const inptDia = document.querySelector('#input-dia');
const inptMes = document.querySelector('#input-mes');
const inptAno = document.querySelector('#input-ano');
const labelDia = document.querySelector('#labelDia')
const labelMes = document.querySelector('#labelMes');
const labelAno = document.querySelector('#labelAno');
const erroDia = document.querySelector('#erroDia');
const erroMes = document.querySelector('#erroMes');
const erroAno = document.querySelector('#erroAno');
const btnCalcular = document.querySelector('#btn-calcular');
const dataAno = document.querySelector('#ano');
const dataMes = document.querySelector('#mes');
const dataDia = document.querySelector('#dia');


btnCalcular.addEventListener('click', () => {
    if(verificaDia() && verificaMes() && verificaAno()){
        dataAno.innerText = calculaTempoVida(inptDia.value,inptMes.value,inptAno.value)[2];
        dataMes.innerText = calculaTempoVida(inptDia.value,inptMes.value,inptAno.value)[1];
        dataDia.innerText = calculaTempoVida(inptDia.value,inptMes.value,inptAno.value)[0];      
    }else{
        verificaDia();
        verificaMes();
        verificaAno();
    }
})


function calculaTempoVida(dia,mes,ano){
    const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
    const diasVividos = calculaDiasVividos(dataNascimento);
    const mesesVividos = calculaMesesvividos(dataNascimento);
    const anosVividos = calculaAnosVividos(dataNascimento);
    

    return [diasVividos,mesesVividos,anosVividos];
    
   
}


function calculaDiasVividos(dtNasc){
    const data = new Date();    
    const diferenca = data - dtNasc;
    let diasVividos = Math.floor(diferenca / (24 * 60 * 60 * 1000));

    return diasVividos;
}


function calculaMesesvividos(dtNasc){
    const dataAtual = new Date();
    let diferencaEmMs = dataAtual.getMonth() - dtNasc.getMonth();

    let diferencaEmMeses = (dataAtual.getFullYear() - dtNasc.getFullYear()) * 12;
    diferencaEmMeses -= dtNasc.getMonth() + 1;
    diferencaEmMeses += dataAtual.getMonth();

    return diferencaEmMeses;
    
}

function calculaAnosVividos(dtDNasc){
   const dataAtual = new Date();
   let diferenca = dataAtual.getFullYear() - dtDNasc.getFullYear();

   if(dataAtual.getMonth() < dtDNasc.getMonth() || dataAtual.getMonth() === dtDNasc.getMonth() && dataAtual.getDate() < dtDNasc.getDate()){
        diferenca -= 1;
   }

   return diferenca; 
}



function verificaDia(){
    if(!inptDia.value){
        lancaErro(inptDia);
        lancaErro(labelDia);
        erroDia.innerText = 'Invalido!';
        return false
    }else if(Number(inptDia.value) < 1 || Number(inptDia.value) > 31){
        lancaErro(inptDia);
        lancaErro(labelDia);
        erroDia.innerText = 'Invalido!';
        return false
    }else{
        inptDia.classList = '';
        labelDia.classList.remove('errado');
        erroDia.innerText = '';
    }
    return true;
}


function verificaMes(){
    if(!inptMes.value){
        lancaErro(inptMes);
        lancaErro(labelMes);
        erroMes.innerText = 'Invalido!'
        return false;
    }else if(Number(inptMes.value) < 1 || Number(inptMes.value) > 12){
        lancaErro(inptMes);
        lancaErro(labelMes);
        erroMes.innerText = 'Invalido!'
    }else{
        inptMes.classList = '';
        labelMes.classList.remove('errado');
        erroMes.innerText = '';
    } 
    return true;
}


function verificaAno(){
    if(!inptAno.value){
        lancaErro(inptAno);
        lancaErro(labelAno);
        erroAno.innerText = 'Invalido!'
        return false;
    }else if(Number(inptAno.value) < 1905 || Number(inptAno.value) > 2099){
        lancaErro(inptAno);
        lancaErro(labelAno);
        erroAno.innerText = 'Invalido!'
        return false;
    }else{
        inptAno.classList = '';
        labelAno.classList.remove('errado');
        erroAno.innerText = '';
    };
    return true;
}


function lancaErro(el){
    el.classList.add('errado');
}