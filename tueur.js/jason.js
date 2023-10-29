
function generateRandomName() {
    const names = ["Jake", "Natasha", "Blade", "Eugene", "Jen-Louis"];
    return names[Math.floor(Math.random() * names.length)];
}


function calculateSurvivorAction() {
    const randomAction = Math.random();
    if (randomAction < 0.2) {
        return { action: "esquive", damage: 10 };
    } else if (randomAction < 0.4) {
        return { action: "inflige des dégâts", damage: 15 };
    } else {
        return { action: "meurt sans rien faire", damage: 0 };
    }
}


let jasonHP = 100;
let survivors = [
    { name: "Jake", role: "Populaire", isDead: false },
    { name: "Natasha", role: "Bimbo", isDead: false },
    { name: "Blade", role: "Noir", isDead: false },
    { name: "Eugene", role: "Gros", isDead: false },
    { name: "Jen-Louis", role: "Nerd", isDead: false }
];


function getRandomSurvivor() {
    const aliveSurvivors = survivors.filter(survivor => !survivor.isDead);
    return aliveSurvivors[Math.floor(Math.random() * aliveSurvivors.length)];
}


while (survivors.some(survivor => !survivor.isDead) && jasonHP > 0) {
    const randomSurvivor = getRandomSurvivor();
    const { action, damage } = calculateSurvivorAction();

    console.log(`Jason a attrapé ${randomSurvivor.name} "${randomSurvivor.role}".`);

    if (action === "esquive") {
        console.log(`${randomSurvivor.name} "${randomSurvivor.role}" esquive l'attaque de Jason et inflige ${damage} points de dégâts.`);
        jasonHP -= damage;
    } else if (action === "inflige des dégâts") {
        console.log(`${randomSurvivor.name} "${randomSurvivor.role}" inflige ${damage} points de dégâts à Jason et meurt en le faisant.`);
        jasonHP -= damage;
        randomSurvivor.isDead = true;
    } else {
        randomSurvivor.isDead = true;
        console.log(`${randomSurvivor.name} "${randomSurvivor.role}" s'est fait briser la nuque.`);
    }

    console.log(`Il reste ${jasonHP > 0 ? jasonHP : 0} points de vie à Jason.`);

    if (survivors.every(survivor => survivor.isDead)) {
        console.log("Tous les survivants sont morts.");
    } else if (jasonHP <= 0) {
        console.log("Jason est mort.");
    }
}