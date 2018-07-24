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
    console.log(`${yourName} has ${yourHealth} health left.`);
    console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);

yourHealth -= (Math.ceil(Math.random()*2));
grantHealth -= (Math.ceil(Math.random()*2));




    //if Grant's health equals 0
    if (grantHealth <= 0) {
        //grant is defeated AND you get 1 win, Grant gets 10 health points
        yourWins++;
        console.log(`Fatal blow! Grant has ${grantHealth} health.`);
        console.log(`${yourName} beat Grant ${yourWins} time\(s\).`);
            //if you have 3 wins, you win. Game over
        if (yourWins === 3) {
            console.log(`Grant has no more health potions. ${yourName} wins!!!`);
            break;
            
        } else {
            grantHealth = 10;
            console.log(`Grant drank a health potion and is back for more!`);
            continue;
        }

       

    }



    //if Grant wins, game over.
    if (yourHealth <= 0) {
        console.log("Grant beat you. Game over.");
        break;
    }

}

}




 

