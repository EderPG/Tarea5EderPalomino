var player1 = "Player 1";

function editNames(){
    player1 = prompt("Change Player1 name");

    document.querySelector("p.Player1")
							.innerHTML = player1;
}

function lanzarMoneda(){
    setTimeout (function (){
        var randomNumber1 = Math.floor(Math.random() * 2) + 1;

        document.querySelector(".img1").setAttribute("src",
					"coin" + randomNumber1 + ".jpg");


        if(randomNumber1 == 2){
            document.querySelector("h1").innerHTML
                            = (player1 + " Ganaste");
        }
        else if(randomNumber1 == 1){
            document.querySelector("h1").innerHTML
                            = (player1 + " Perdiste");
        }


    }, 500);
}