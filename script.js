//ask user to play a game
 let confirmation = prompt("Do you want to play a game against Grant?");
 
 if (confirmation.toLowerCase() == "yes")
 {

//if yes,

//prompt user to enter name
let yourName = prompt("Enter your name.");

//start with 40points for you, 10 points for grant
let yourHealth = 40;
let grantHealth = 10;
let yourWins = 0;

//while loop to begin battle
while (yourHealth > 0 || grantHealth > 0) {
yourHealth -= (Math.ceil(Math.random()*2));
grantHealth -= (Math.ceil(Math.random()*2));
console.log(`${yourName} has ${yourHealth} health points.`);
console.log(`Grant has ${grantHealth} health points.`);



    //if Grant's health equals 0
    if (grantHealth <= 0) {
        //grant is defeated AND you get 1 win, Grant gets 10 health points
        yourWins++;
        console.log(`Congratulations. You beat Grant ${yourWins} time\(s\).`);
            //if you have 3 wins, you win. Game over
        if (yourWins === 3) {
            console.log("Grant gives up. You beat him 3 times.");
            break;
            
        } else {
            grantHealth = 10;
            continue;
        }

       

    }



    //if Grant wins, game over.
    if (yourHealth === 0) {
        console.log("Grant beat you. Game over.");
        break;
    }

}

}




 

