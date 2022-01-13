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
    if ((rover.x >= 0 && rover.x <= 9) && (rover.y >= 0 && rover.y <= 9)) {
        grid[rover.y][rover.x] = rover.direction;
        console.table(grid)
    };

}

//moveForward(rover)

function pilotRover(str) {

    //boucle des fonctions
    for (i = 0; i < 1; i++) {

        // boucle de turnLeft
        for (i = 0; i < 1; i++) {
            const arrayLeft = ["N", "W", "S", "E"];
            let arrayIndex = arrayLeft.indexOf("N")
            if (str === "l" && arrayIndex === 0) {
                arrayIndex += 1;
                rover.direction = "W";
                turnLeft(rover);
                grid[rover.x][rover.y] = rover.direction;

            } else if (str === "l" && arrayIndex === 1) {
                arrayIndex += 2;
                rover.direction = "S";
                turnLeft(rover);
                grid[rover.x][rover.y] = rover.direction;
            }
            console.table(grid)
        }
        //Boucle de turnRight
        // for () {

        // }

        // //boucle de moveForward
        // for () {

        // }

    }

};

pilotRover("l");

