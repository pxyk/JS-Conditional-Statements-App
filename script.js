// App-1
/* var dogum = prompt("Doğum yılınızı giriniz : ");
var yil = 2022;
var yas = yil - dogum;

if(yas<18){
    console.log("Ehliyet alamazsınız");
    console.log("Ehliyet almak için "+(18-yas)+ " sene beklemelisiniz");
}
else if(yas>18){
    console.log("Ehliyet alabilirsiniz.");
}
else{
    console.log("Yanlış bir değer");
}
*/

// App-2

var ay = prompt("Ay bilgisini girin : ");

switch (ay) {
    
    case '12':
    case '1':
    case '2':
        console.log("Kış Mevsimi");
        break;

    case '3':
    case '4':
    case '5':
        console.log("İlkbahar Mevsimi");
        break;

    case '6':
    case '7':
    case '8':
        console.log("Yaz Mevsimi");
        break;

    case '9':
    case '10':
    case '11':
        console.log("Sonbahar Mevsimi");
        break;

    default:
        console.log("Yanlış bir ay girdiniz.");
}