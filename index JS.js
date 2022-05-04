
var edad = 15;
if ((edad<20)||(edad>=60)) {
    console.log('en mi cumpleaños compran helados de chocochips')
}



var perro = true;
var gato = false;
if ((perro==true)&&(gato==true)){
    console.log('entonces estoy feliz');
}else{
    console.log('estoy triste');
}



var numero_inicial =1;
function contador_de_numeros (numero_inicial){
    while (numero_inicial<=100){
        if (numero_inicial%3==1){
            console.log (numero_inicial);
        }
        numero_inicial=numero_inicial+3
    }
}
contador_de_numeros (numero_inicial);



var numero_inicial =1;
function contador_de_numeros (){
    for (var inicial =1;inicial<=100;inicial=inicial+3){
        console.log(inicial)
    }
}
contador_de_numeros();
