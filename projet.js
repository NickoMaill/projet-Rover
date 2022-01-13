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

//console.table(grid);

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
    // grid[0][0] = rover.direction;
    //console.table(grid);
};

//turnLeft(rover)

function turnRight(rover) {
    switch (rover.direction) {
        case "E":
            rover.direction = "E";
            break;
            
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
     grid[0][0] = rover.direction;
    console.table(grid)
};

//turnRight(rover)

//création d'une fonction pour faire avancer le rover

function moveForward(rover) {
    if ((rover.x >= 0 && rover.x <= 9  ) && ( rover.y >= 0 && rover.y <= 9)) {
        grid[rover.x][rover.y] = rover.direction;
        console.table(grid)
    };
    
}

//moveForward(rover)

function pilotRover(str) {
    switch (str) {
        case "l":
            turnLeft(rover.direction = "W")
            break;
    
        default:
            break;
    }


}
