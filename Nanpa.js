// Sorry, I don't have enough motivation to name variables in English, which is not my native language.
// I haven't creat a corresponding html file to run the function is. Anyway today it doesn't seem that I have enough motivation. To run this, use node.js or something.

function tokiponade(hikisuu){
    var gonokurawi, gonoamari, ninokurawi, ninoamari;

    gonokurawi = Math.floor(hikisuu / 5);
    gonoamari = hikisuu - (5 * gonokurawi);
    ninokurawi = Math.floor(gonoamari / 2);
    ninoamari = gonoamari - (2 * ninokurawi);

    modoriti = "";    

    if(hikisuu == 0){
        modoriti = "ala ";
    }


    if(gonokurawi != 0){
        for(i = 0; i < gonokurawi; i++){
            modoriti = modoriti + "luka ";
        }
    } 
    if(ninokurawi != 0){
        for(i = 0; i < ninokurawi; i++){
            modoriti = modoriti + "tu ";
        }
    }
    if(ninoamari != 0){
        modoriti = modoriti + "wan ";
    }
    
    var nagasa = modoriti.length;
    modoriti = modoriti.substr(0,　nagasa - 1);
    return modoriti;

}

console.log(tokiponade(process.argv[2]));