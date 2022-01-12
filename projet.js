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

function turnLeft(rover) {
    switch (rover.direction) {
        case "W":
            rover.direction = "W";
            break;
            
        case "S":
            rover.direction = "S";
            break;

		case "E":
			rover.direction = "E";
			break;
        
        case "N":
            rover.direction = "N";
            break;
    
        default:
            console.log("sorry", `${rover}`, "is not a direction...");
    }
    console.log(rover.direction);
};

turnLeft(rover)

function turnRight(rover) {
    switch (rover.direction) {
        case "E":
            break;
            rover.direction = "E";
            
        case "S":
            rover.direction = "S";
            break;

		case "W":
			rover.direction = "W";
			break;
        
        case "N":
            rover.direction = "N";
            break;
    
        default:
            console.log("sorry", `${rover}`, "is not a direction...");
    }
    console.log(rover.direction);
};

turnRight(rover)

//création d'une fonction pour faire avancer le rover

// function moveForward(rover) {
    
// }


