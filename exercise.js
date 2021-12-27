function startGame() {
    
    for(var i = 8 ; i >0 ; i--)
    {
        let yourChoice = prompt('Seciminizi daxil edin , 97 ve 122 arasi bir eded secin!');
        yourChoice = String.fromCharCode(yourChoice);

        

        console.log("Senin Secimin: " , yourChoice);
    
        function randomIntFromInterval(min , max) { 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    
        var rndInt = randomIntFromInterval(97, 122)
        rndInt = String.fromCharCode(rndInt);
        console.log("Komputerin Secimi :" , rndInt)
        if(yourChoice === rndInt)
        {
            console.log("Tebrikler! Siz duzgun texmin etdiniz.")
            break;
        }
        else
        {
            console.log("Teessuf ki siz qalib gele bilmediniz!" , i ,  "seciminiz qalib")

        }
    }
}
startGame();