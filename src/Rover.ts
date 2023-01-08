import { Coordinates } from "./Coordinates";
export interface Rover {
    coordinates : Coordinates,
    next_command : string | null
};