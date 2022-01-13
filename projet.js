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

//création des fonctions de direction gauche et droite 

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
};

//turnRight(rover)

//création d'une fonction pour faire avancer le rover

function moveForward(rover) {

    grid[rover.y][rover.x] = " ";

    switch (rover.direction) {
        case "E":
            rover.x += 1;
            break;

        case "S":
            rover.y += 1;
            break;

        case "W":
            rover.x -= 1;
            break;

        case "N":
            rover.y -= 1;
            break;

        default:
            break;
    };

    grid[rover.y][rover.x] = rover.direction;

};

//moveForward(rover)

//Création d'une boucle pour piloter plus efficacement le Rover

function pilotRover(str) {
    let strSplit = str.split("");

    for (i = 0; i < strSplit.length; i++) {

        switch (strSplit[i]) {
            case "r":
                turnRight(rover);
                break;

            case "l":
                turnLeft(rover)
                break;

            case "f":
                moveForward(rover)
                break;

            default:
                break;
        };

    };

    console.table(grid);

};

pilotRover("rfrf");