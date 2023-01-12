import { Plateau } from "./Plateau";
export class Rover {
    Rover_x: number;
    Rover_y: number;
    Rover_facing: string;
    Rover_commands: string;
    constructor(x: number, y: number, facing: string, commands: string) {
      this.Rover_x = x;
      this.Rover_y = y;
      this.Rover_facing = facing;
      this.Rover_commands = commands }  
}

export function validator_Rover ( valid_x_rover : number, valid_y_rover : number, the_plateau : Plateau ) : boolean {
  
  if (valid_x_rover < 0 || valid_y_rover < 0 ) return false;
  if (valid_x_rover > the_plateau.Plateau_x ||  valid_y_rover > the_plateau.Plateau_y  )  return false;
  return true;
};