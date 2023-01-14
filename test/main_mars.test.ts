import { move_a_rover }              from "../src/main_mars";
import { Rover,validator_Rover }     from "../src/Rover";
import { Plateau,validator_Plateau } from "../src/Plateau";


describe("valid inputs are given",() => {
    test (" DRAFT TESTS - return correct outputs -",() => {
        const new_plat_1 = new Plateau (5,5);
        const new_rover_1 = new Rover (1,2,"N","LMLMLMLMM");
        expect ( move_a_rover(new_rover_1,new_plat_1)).toBe("1 3 N");
        const new_plat_2 = new Plateau (5,5);
        const new_rover_2 = new Rover (3,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(new_rover_2,new_plat_2)).toBe("5 1 E");
    })
}
);

describe("INvalid inputs are given",() => {
    test (" DRAFT TESTS - INVALID inputs /  THROWS ERRORs",() => {
        const new_plat_3 = new Plateau (5,5);
        const new_rover_3 = new Rover (4,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(new_rover_3,new_plat_3)).toBe("3The rover has stopped on location :5 3 E as the new coordinates will be out of bounds");
        //const new_plat_3 = new Plateau (5,5);
        //const new_rover_3 = new Rover (4,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(new_rover_3,new_plat_3)).toBe("3The rover has stopped on location :5 3 E as the new coordinates will be out of bounds");
    })
}
);


describe("Coordinats are INVALID ",() => {
    test (" DRAFT TESTS - coordinate inputs are INVALID /  THROWS ERRORs",() => {
        const new_plat_4 = new Plateau (-3,5);
        const new_rover_4 = new Rover (4,3,"E","MMRMMRMRRM");
        expect ( move_a_rover(new_rover_4,new_plat_4)).toBe(`Invalid plateau coordinates are given : (-3,5). Please type-in non-negative coordinates !`);
        //const new_plat_3 = new Plateau (5,5);
        //const new_rover_3 = new Rover (4,3,"E","MMRMMRMRRM");
        //expect ( move_a_rover(new_rover_3,new_plat_3)).toBe("3The rover has stopped on location :5 3 E as the new coordinates will be out of bounds");
    })
}
);