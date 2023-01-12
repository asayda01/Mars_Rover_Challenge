//import { Coordinates } from "./Coordinates";
import { Rover,validator_Rover } from "./Rover";
import { Plateau } from "./Plateau";
import { type } from "os";
//import { Orientation_new } from "./Orientation";

type insts = "M" | "L" | "R";
function move_a_rover(the_rover:Rover,the_plateau:Plateau) : string {

    for (let i:number = 0 ;  i< the_rover.Rover_commands.length ; i++) {

      switch (the_rover.Rover_commands[i]) {

        case "M":

          switch (the_rover.Rover_facing) {
            case "N" :
              the_rover.Rover_y += 1 ;
              if (validator_Rover(the_rover,the_plateau) === false ) {
                console.log ( "1The rover has stopped as the new coordinates will be out of bounds");
                break}
  
            case "S" :
              the_rover.Rover_y -= 1 ;
              if (validator_Rover(the_rover,the_plateau) === false ) {
                console.log ( "2The rover has stopped as the new coordinates will be out of bounds");
                break}
  
            case "E":
              the_rover.Rover_x += 1 ;
              if (validator_Rover(the_rover,the_plateau) === false ) {
                console.log ( "3The rover has stopped as the new coordinates will be out of bounds");
                break}
  
            case "W" :
              the_rover.Rover_x -= 1 ;
              if (validator_Rover(the_rover,the_plateau) === false ) {
                console.log ( "4The rover has stopped as the new coordinates will be out of bounds");
                break}                  }
  
  
        case "R":
          
          switch(the_rover.Rover_facing) {
            case "N" :
              the_rover.Rover_facing = "E" ;
            
            case "S" :
              the_rover.Rover_facing = "W" ;
            
            case "E" :
              the_rover.Rover_facing = "S" ;
            
            case "W" :
              the_rover.Rover_facing = "N"  }
  
  
  
        case "L" :
          
        switch (the_rover.Rover_facing) {

          case "N" :
            the_rover.Rover_facing = "W" ;
  
          case "S" :
            the_rover.Rover_facing = "E" ;
          
          case "E" :
            the_rover.Rover_facing = "N" ;
          
          case "W" :
            the_rover.Rover_facing = "S"  }
                                                    }
                                                          }
    return `${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing}`;
  };
  
  console.log("111111111111111111111111111111");
  const new_plat_1 = new Plateau (5,5);
  const new_rover_1 = new Rover (1,2,"N","LMLMLMLMM");
  console.log (move_a_rover(new_rover_1,new_plat_1) ); 
  console.log("222222222222222222222222222222");
  const new_plat_2 = new Plateau (5,5);
  const new_rover_2 = new Rover (3,3,"E","MMRMMRMRRM");
  console.log (move_a_rover(new_rover_2,new_plat_2) ); 
  /*
  console.log("33333333333333333333333333333333");
  const new_plat_3 = new Plateau (5,5);
  const new_rover_3 = new Rover (4,3,"E","MMRMMRMRRM");
  console.log (move_a_rover(new_rover_3,new_plat_3) ); 
  console.log("444444444444444444444444444444444444");
  */