const monsterMaxDamage = 10;
const playerMaxDamage = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);


function attackHandler() {
    const damage = dealMonsterDamage(monsterMaxDamage);
    const playerDamage = dealPlayerDamage(playerMaxDamage);
    currentMonsterHealth -= damage;
    currentPlayerHealth -= playerDamage;

    if(currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
        alert('you won!');
    } else if(currentMonsterHealth >= 0 && currentPlayerHealth <= 0) {
        alert('you lost!');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('that is a draw!');
    }

}
attackBtn.addEventListener('click', attackHandler);

