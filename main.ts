input.onButtonPressed(Button.A, function () {
    personne += 1
})
input.onButtonPressed(Button.AB, function () {
    personne = 0
})
input.onButtonPressed(Button.B, function () {
    personne += -1
})
let personne = 0
personne = 0
basic.forever(function () {
    basic.showNumber(personne)
    if (personne == 20) {
        basic.showString("Nombre de joueur maximal atteint ")
    }
})
