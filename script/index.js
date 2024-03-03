
const mostarReloj = ()=>{
    let fecha = new Date();
    let hr =  (formatoHora(fecha.getHours()));
    let min = (formatoHora(fecha.getMinutes()));
    let seg = (formatoHora(fecha.getSeconds()));
    document.getElementById('hora1').innerHTML = `${hr}:${min}:${seg}`;

    const meses=['Ene','Feb','mar','abr','may','jun','jul','ago','sep','opt','nov','dic'];
    const dias=['dom','lun','mar','mie','jue','vie','sab'];
    let diasSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diasSemana}, ${dia}, ${mes}, ${año}`;
    document.getElementById('fecha1').innerHTML = fechaTexto;

    document.getElementById('container').classList.toggle('animar')

}

const formatoHora = (hora1)=>{
    if(hora1 < 10){
        hora1 = "0" + hora1;
   
    } 
    return hora1;
}

setInterval(mostarReloj, 1000);

