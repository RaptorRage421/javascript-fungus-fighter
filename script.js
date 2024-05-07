// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackPoints = 100;

function onReady() {
    console.log("Ready to go!")
    document.querySelector('.attack-btn.arcane-scepter').addEventListener('click', arcaneScepterAttack);
    document.querySelector('.attack-btn.entangle').addEventListener('click', entangleAttack)
    document.querySelector('.attack-btn.dragon-blade').addEventListener('click', dragonBladeAttack)
    document.querySelector('.attack-btn.star-fire').addEventListener('click', starFireAttack)
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

onReady()

function arcaneScepterAttack() {
    console.log("ARCANE SCEPTER WORKS")
    const cost = {
        apCost: 12,
        damage: 14
    }
    console.log(cost.damage)
    fungusHP -= cost.damage
    attackPoints -= cost.apCost
    console.log("HP Remaining: ", fungusHP)
    console.log("Attack Points Remaining: ", attackPoints)
    renderHP()
    renderAP()
}
function entangleAttack() {
    console.log("ENTAGLE WORKS")
    const cost = {
        apCost: 23,
        damage: 9
    }
    renderHP()
    renderAP()
}
function dragonBladeAttack() {
    console.log("DRAGON BLADE WORKS")
    const cost = {
        apCost: 38,
        damage: 47
    }
    renderHP()
    renderAP()
}
function starFireAttack() {
    console.log("STAR FIRE WORKS")
    const cost = {
        apCost: 33,
        damage: 25
    }
    renderHP()
    renderAP()
}

function renderHP() {
    console.log("renderHP is Working")
    let hpValue = document.getElementById('hp-meter')
    let hpText = document.getElementById('hptext').innerText
    hpValue.value = fungusHP
    hpText = Number(fungusHP)
    console.log("New Rendered HP Value: ", hpText)
}

function renderAP() {
    console.log("renderAP is Working")
    let apValue = document.getElementById('ap-meter')
    let apText = document.getElementById('aptext')
    
    apText.innerText = Number(attackPoints)
    apValue.value = attackPoints
    console.log('New Rendered AP Value: ', apValue.value)
   
// console.log(apValue) 
}




