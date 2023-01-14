import { move_a_rover } from "../src/main_mars";
import { Rover }        from "../src/Rover";
import { Plateau }      from "../src/Plateau";

describe("throws an error if a plateau cannot be created with given upper-right coordinates. ",() => {
    test (" if inputs are INvalid, it throws an error and asks for valid coordinates",() => {
        const plat_1 = new Plateau (-3,5);
        const rover_1 = new Rover (4,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(rover_1,plat_1)).toBe(`Invalid plateau coordinates are given : (${plat_1.Plateau_x},${plat_1.Plateau_y}). Please type-in non-negative coordinates !`);
        const plat_2 = new Plateau (-1,-1);
        const rover_2 = new Rover (2,5,"S","LMLMRMRMLMLMRM");
        expect ( move_a_rover(rover_2,plat_2)).toBe(`Invalid plateau coordinates are given : (${plat_2.Plateau_x},${plat_2.Plateau_y}). Please type-in non-negative coordinates !`);
        const plat_3 = new Plateau (0,0);
        const rover_3 = new Rover (7,5,"W","RMLMLML");
        expect ( move_a_rover(rover_3,plat_3)).toBe(`Invalid plateau coordinates are given : (${plat_3.Plateau_x},${plat_3.Plateau_y}). Please type-in non-negative coordinates !`);
    })}
);

describe("throws an error if a rover initializes outside of a plateau. ",() => {
    test ("if inputs are valid but rovers aren't on a given plateau, it throws an error and asks for valid coordinates wherein the rovers must be",() => {
        const plat_4 = new Plateau (5,5);
        const rover_4 = new Rover (7,9,"S","MLMMLRMLRRM");
        expect ( move_a_rover(rover_4,plat_4)).toBe(`Invalid rover coordinates are given : (${plat_4.Plateau_x},${plat_4.Plateau_y}). Please type-in non-negative coordinates !`)});
    test ("if inputs are valid but rovers cannot move on a given plateau, it throws an error and asks for valid upper-right coordinates which allow rovers to explore",() => {
        const plat_5 = new Plateau (1,1);
        const rover_5 = new Rover (3,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(rover_5,plat_5)).toBe("The rover has stopped on location :3 3 E as the new coordinates will be out of bounds");
    })}
);


describe("Moves rovers and returns their new coordinates on a plateau ",() => {
    test ("if inputs are valid and rovers`re still on a given plateau, it must return new coordinates of rovers",() => {
        const plat_6 = new Plateau (5,5);
        const rover_6 = new Rover (1,2,"N","LMLMLMLMM");
        expect ( move_a_rover(rover_6,plat_6)).toBe("1 3 N");
        const plat_7 = new Plateau (5,5);
        const rover_7 = new Rover (3,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(rover_7,plat_7)).toBe("5 1 E");
    });
    test ("if inputs are valid but rovers have reached edges of a plateau, it must stop rovers to prevent them from leaving a plateau and inform status of rovers",() => {
        const plat_8 = new Plateau (5,5);
        const rover_8 = new Rover (4,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(rover_8,plat_8)).toBe(`The rover has stopped on location :5 3 E as the new coordinates will be out of bounds`);
        const plat_9 = new Plateau (3,3);
        const rover_9 = new Rover (1,2,"W","MRRMMMMLM");
        expect ( move_a_rover(rover_9,plat_9)).toBe(`The rover has stopped on location :3 2 E as the new coordinates will be out of bounds`);
    })}
);