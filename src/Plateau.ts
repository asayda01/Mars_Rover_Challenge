export class Plateau {
    Plateau_x: number;
    Plateau_y: number;
    constructor(x: number, y: number) {
        this.Plateau_x = x;
        this.Plateau_y = y  }
};

export function validator_Plateau (valid_x_Plat : number ,valid_y_Plat : number) : boolean {
    return (!(valid_x_Plat < 0 || valid_y_Plat < 0));
};