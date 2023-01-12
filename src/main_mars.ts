//import { Coordinates } from "./Coordinates";
import { Rover,validator_Rover } from "./Rover";
import { Plateau } from "./Plateau";
//import { Orientation_new } from "./Orientation";


function move_a_rover(the_rover:Rover,the_plateau:Plateau) : string {

    for (let i:number = 0 ;  i< the_rover.Rover_commands.length ; i++) {
  
      if (the_rover.Rover_commands[i] === "M") {
  
        if (the_rover.Rover_facing === "N") {
          
          if (validator_Rover(the_rover.Rover_x,the_rover.Rover_y+1,the_plateau) === false ) {
            return `1The rover has stopped on location ${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing} as the new coordinates will be out of bounds`;
          };
          the_rover.Rover_y += 1 ;
  
        } else if (the_rover.Rover_facing === "S") {
          
          if (validator_Rover(the_rover.Rover_x, the_rover.Rover_y-1 ,the_plateau) === false ) {
            return `2The rover has stopped on location ${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing} as the new coordinates will be out of bounds`;
          };
          the_rover.Rover_y -= 1 ;
  
        } else if (the_rover.Rover_facing === "E") {
          
          if (validator_Rover(the_rover.Rover_x+1,the_rover.Rover_y,the_plateau) === false ) {
            return `3The rover has stopped on location ${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing} as the new coordinates will be out of bounds`;
          };
          the_rover.Rover_x += 1 ;
  
        } else if (the_rover.Rover_facing === "W") {
          if (validator_Rover(the_rover.Rover_x-1,the_rover.Rover_y,the_plateau) === false ) {
            the_rover.Rover_x += 1 ; 
            return `4The rover has stopped on location ${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing} as the new coordinates will be out of bounds`;
          };
          the_rover.Rover_x -= 1 ;
        }
  
  
      } else if (the_rover.Rover_commands[i] === "R") {
        
        if (the_rover.Rover_facing === "N") {
          the_rover.Rover_facing = "E" ;
          
  
        } else if (the_rover.Rover_facing === "S") {
          the_rover.Rover_facing = "W" ;
  
        } else if (the_rover.Rover_facing === "E") {
          the_rover.Rover_facing = "S" ;
  
        } else if (the_rover.Rover_facing === "W") {
          the_rover.Rover_facing = "N" ; 
        }
  
  
  
      } else if (the_rover.Rover_commands[i] === "L") {
  
        if (the_rover.Rover_facing === "N") {
          the_rover.Rover_facing = "W" ;
  
        } else if (the_rover.Rover_facing === "S") {
          the_rover.Rover_facing = "E" ;
  
        } else if (the_rover.Rover_facing === "E") {
          the_rover.Rover_facing = "N" ;
  
        } else if (the_rover.Rover_facing === "W") {
          the_rover.Rover_facing = "S" ; 
        }
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
  
  console.log("33333333333333333333333333333333");
  const new_plat_3 = new Plateau (5,5);
  const new_rover_3 = new Rover (4,3,"E","MMRMMRMRRM");
  console.log (move_a_rover(new_rover_3,new_plat_3) ); 
  console.log("444444444444444444444444444444444444");