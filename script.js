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

}
function entangleAttack() {
    console.log("ENTAGLE WORKS")

}
function dragonBladeAttack() {
    console.log("DRAGON BLADE WORKS")

}
function starFireAttack() {
    console.log("STAR FIRE WORKS")

}