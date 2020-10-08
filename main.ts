game.splash("Pizza Order")
let LABOUR_COST = 0.75
let RENT_OF_SHOP = 1
let materials = 0.5 * game.askForNumber("Diameter of pizza in inches")
let TAX = 1.13
let subtotal = LABOUR_COST + (RENT_OF_SHOP + materials)
game.splash("The subtotal of the pizza is:  " + LABOUR_COST + " dollars plus " + RENT_OF_SHOP + " dollar plus  " + materials + " dollars is " + subtotal + " dollars ")
let total = subtotal * (TAX * (100 / 100))
game.splash("The total of the pizza is: " + subtotal + " dollars by " + TAX + " dollars " + total + " dollars")
let rounded_total_1 = 100 * total
game.splash("The rounded total is:  " + total + " times " + "100 ")
let rounded_total_2 = Math.round(rounded_total_1)
let rounded_total = rounded_total_2 / 100
game.splash("Rounded total equals " + rounded_total)
