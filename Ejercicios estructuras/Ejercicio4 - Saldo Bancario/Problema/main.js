// Escribe aquí tu codigo Javascript


var suma=0;
do{
numeroCuenta=parseInt(prompt('Ingresar numero de cuenta de 5 digitos(para detner el programa ingresar un valor negativo):'));
if(numeroCuenta<0) alert('El programa ha terminado');
else{
nombreCliente=prompt('Ingresar nombre del cliente:');
saldo=parseInt(prompt('Ingresar saldo'));
if(saldo>0){
    console.log('Numero de cuenta:'+numeroCuenta+'\n Nombre del cliente:'+nombreCliente+'\n Saldo:'+saldo+'\n Estado de la cuenta:Acreedor');
    suma+=saldo;
}
else if(saldo===0) console.log('Numero de cuenta:'+numeroCuenta+'\n Nombre del cliente:'+nombreCliente+'\n Saldo:'+saldo+'\n Estado de la cuenta:Nulo');
else console.log('Numero de cuenta:'+numeroCuenta+'\n Nombre del cliente:'+nombreCliente+'\n Saldo:'+saldo+'\n Estado de la cuenta:Deudor');}
}while(numeroCuenta>0);
console.log('la suma de los saldos acreedores es:'+suma);

