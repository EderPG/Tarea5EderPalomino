
		// Player name
		var player1 = "Player 1";
		var player2 = "Player 2";
        var player3 = "Player 3";

		// Function to change the player name
		function editNames() {
			player1 = prompt("Change Player1 name");
			player2 = prompt("Change player2 name");
            player3 = prompt("Change Player3 name");

			document.querySelector("p.Player1")
							.innerHTML = player1;
							
			document.querySelector("p.Player2")
							.innerHTML = player2;

            document.querySelector("p.Player3")
                            .innerHTML = player3;
		}

		// Function to roll the dice
		function rollTheDice() {
			setTimeout(function () {
                var r1=0;
                var r2=0;
                var r3=0;
                var pos1=0,pos2=0,pos3=0;


				var randomNumber1 = Math.floor(Math.random() * 6) + 1;
				var randomNumber2 = Math.floor(Math.random() * 6) + 1;
                var randomNumber3 = Math.floor(Math.random() * 6) + 1;


				document.querySelector(".img1").setAttribute("src",
					"dice" + randomNumber1 + ".png");

				document.querySelector(".img2").setAttribute("src",
					"dice" + randomNumber2 + ".png");

                document.querySelector(".img3").setAttribute("src",
                    "dice" + randomNumber3 + ".png");

                    if (randomNumber1 === randomNumber2 && randomNumber1 === randomNumber3) {
                        document.querySelector("h1").innerHTML = "Draw!";
                    }
                    
                    else if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
                        document.querySelector("h1").innerHTML
                            = (player1 + " WINS!");
                    }
                    
                    
                    if (randomNumber2 === randomNumber1 && randomNumber2 === randomNumber3) {
                        document.querySelector("h1").innerHTML = "Draw!";
                    }
                    
                    else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
                        document.querySelector("h1").innerHTML
                            = (player2 + " WINS!");
                    }
                    
                    
                    if (randomNumber3 === randomNumber1 && randomNumber3 === randomNumber1) {
                        document.querySelector("h1").innerHTML = "Draw!";
                    }
                    
                    else if (randomNumber3 > randomNumber2 && randomNumber3 > randomNumber1) {
                        document.querySelector("h1").innerHTML
                            = (player3 + " WINS!");
                    }
			
			}, 500);
		}