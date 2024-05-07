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
    console.log(`Doing ${cost.damage} damage to the Fungus
Using ${cost.apCost} AP`)
    fungusHP -= cost.damage
    attackPoints -= cost.apCost
    // console.log("HP Remaining: ", fungusHP)
    // console.log("Attack Points Remaining: ", attackPoints)
    if (fungusHP < 0){
        fungusHP = 0
    }
    
    
    renderHP()
    renderAP()

}
function entangleAttack() {
    let button = document.getElementById('entangle')
    console.log("ENTAGLE WORKS")
    const cost = {
        apCost: 23,
        damage: 9
    }
    console.log(`Doing ${cost.damage} damage to the Fungus
    Using ${cost.apCost} AP`)
    fungusHP -= cost.damage
    attackPoints -= cost.apCost
    if (fungusHP < 0){
        fungusHP = 0
    }
  

   
    renderHP()
    renderAP()
}
function dragonBladeAttack() {
    let button = document.getElementById('dragon')
    console.log("DRAGON BLADE WORKS")
    
    const cost = {
        apCost: 38,
        damage: 47
    }
    console.log(`Doing ${cost.damage} damage to the Fungus
    Using ${cost.apCost} AP`)
    fungusHP -= cost.damage
    attackPoints -= cost.apCost
    if (fungusHP < 0){
        fungusHP = 0
    }
   
   
    renderHP()
    renderAP()
}
function starFireAttack() {
    let button = document.getElementById('starfire')
    console.log("STAR FIRE WORKS")
    
    const cost = {
        apCost: 33,
        damage: 25
    }
    console.log(`Doing ${cost.damage} damage to the Fungus
Using ${cost.apCost} AP`)
    fungusHP -= cost.damage
    attackPoints -= cost.apCost
    if (fungusHP < 0){
        fungusHP = 0
    }
    
    renderHP()
    renderAP()
}

function renderHP() {
    console.log("renderHP is Working")
    let hpValue = document.getElementById('hp-meter')
    let hpText = document.getElementById('hptext')
    hpValue.value = fungusHP
    hpText.innerText = Number(fungusHP)
    console.log("New Rendered HP Value: ", hpValue.value)
}

function renderAP() {
    console.log("renderAP is Working")
    let buttons = document.getElementsByClassName('attack-btn')
    let apValue = document.getElementById('ap-meter')
    let apText = document.getElementById('aptext')
    if (attackPoints <= 0){
        attackPoints = 0
        for (let i=0; i<buttons.length;i++){
            buttons[i].disabled = true
        }
    }
   
    apText.innerText = Number(attackPoints)
    apValue.value = attackPoints
    console.log('New Rendered AP Value: ', apValue.value)
   
// console.log(apValue) 
}




