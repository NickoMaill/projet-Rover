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
            rover.direction = "S";
            break;

        case "S":
            rover.direction = "E";
            break;

        case "E":
            rover.direction = "N";
            break;

        case "N":
            rover.direction = "W";
            break;

        default:
            console.log("sorry", `${rover}`, "is not a direction...");
    }
     grid[rover.y][rover.x] = rover.direction;
    //console.table(grid);
};

//turnLeft(rover)

function turnRight(rover) {
    switch (rover.direction) {
        case "E":
            rover.direction = "S";
            break;

        case "S":
            rover.direction = "W";
            break;

        case "W":
            rover.direction = "N";
            break;

        case "N":
            rover.direction = "E";
            break;

        default:
            console.log("sorry", `${rover}`, "is not a direction...");
    }
    grid[rover.y][rover.x] = rover.direction;
    //console.table(grid)
};

//turnRight(rover)

//création d'une fonction pour faire avancer le rover

function moveForward(rover) {
    if ((rover.x >= 0 && rover.x <= 9) && (rover.y >= 0 && rover.y <= 9)) {
        grid[rover.y][rover.x] = rover.direction;
        console.table(grid)
    };

}

//moveForward(rover)

function pilotRover(str) {
    let strSplit = str.split("");
    //console.log(strSplit);

    //boucle des fonctions

    for (i = 0; i <= strSplit.length; i++) {
        // console.log(strSplit);

        switch (strSplit[i]) {
            case "r":
                turnRight(rover);
                break;

            case "l":
                turnLeft(rover)
                break;

            //case "f":
              //  moveForward(rover)
                //break;

            default: 
            
                break;
        }

    };
    
    console.table(grid);

}

pilotRover("rrrllll");