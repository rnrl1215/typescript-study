import {constants} from "../constant/Constants";

export class Agent {
    private readonly _name : string = constants.defaultTeam;

    constructor(name: string) {
        this._name = name;
    }

   public get name() : string {
        return this._name;
    }

    introduce() {
        console.log(`name: ${this._name}`)
    }
}