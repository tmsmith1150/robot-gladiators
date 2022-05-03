
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttacks = 10;
console.log(playerName, playerHealth, playerAttacks);

var enemyName = "Hotdog";
var enemyHealth = 50;
var enemyAttacks = 12;
console.log(enemyName, enemyHealth, enemyAttacks);

var fight = function() {
    alert("The fight has begun!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttacks;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      if (enemyHealth <= 0) {
          alert(enemyName + " has died!");
      }
      else {
          alert(enemyName + "still has " + enemyHealth + " health left;")
      }

      playerHealth = playerHealth - enemyAttacks;
      console.log( 
          enemyName + "just attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining");

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

  // Log a resulting message to the console so we know that it worked.
    
}
fight();