//declaration de la grille et du rover

const grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = {
    direction: "N",
    x: 0,
	y: 0,

};

console.table(grid);
//création des fonctions de direction gauche (W) et droite (E)

function turnLeft(left) {
    switch (left) {
        case "W":
            console.log("W");
            break;
    
        default:
            console.log(rover.direction);
    }
}

turnLeft("W")

function turnRight(right) {
    switch (right) {
        case "E":
            console.log("E");
            break;
    
        default:
            console.log(rover.direction);
    }
}

turnRight("E")


//création d'une fonction pour faire avancer le rover



