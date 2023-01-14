import { Rover,validator_Rover } from "./Rover";
import { Plateau,validator_Plateau } from "./Plateau";


export function move_a_rover(the_rover:Rover,the_plateau:Plateau) : string {

  if (validator_Plateau(the_plateau.Plateau_x,the_plateau.Plateau_y) === false) 
  return `Invalid plateau coordinates are given : (${the_plateau.Plateau_x},${the_plateau.Plateau_y}). Please type-in non-negative coordinates !`;

    for (let i:number = 0 ;  i< the_rover.Rover_commands.length ; i++) {
  
      if (the_rover.Rover_commands[i] === "M") {
  
        if (the_rover.Rover_facing === "N") {
          
          if (validator_Rover(the_rover.Rover_x,the_rover.Rover_y+1,the_plateau) === false ) {
            return `1The rover has stopped on location :${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing} as the new coordinates will be out of bounds`;
          };
          the_rover.Rover_y += 1 ;
  
        } else if (the_rover.Rover_facing === "S") {
          
          if (validator_Rover(the_rover.Rover_x, the_rover.Rover_y-1 ,the_plateau) === false ) {
            return `2The rover has stopped on location :${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing} as the new coordinates will be out of bounds`;
          };
          the_rover.Rover_y -= 1 ;
  
        } else if (the_rover.Rover_facing === "E") {
          
          if (validator_Rover(the_rover.Rover_x+1,the_rover.Rover_y,the_plateau) === false ) {
            return `3The rover has stopped on location :${the_rover.Rover_x} ${the_rover.Rover_y} ${the_rover.Rover_facing} as the new coordinates will be out of bounds`;
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
  