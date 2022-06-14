import {Agent} from "./Agent";
import {constants} from "../constant/Constants";

export class Player {
    private readonly _name: string;
    private _team: string = constants.defaultTeam;
    private _contractPeriodMonth: number = 0;
    private _agent : Agent | undefined;

    constructor(name: string) {
        this._name = name;
    }

    introduce() {
        console.log(`name: ${this._name}, team: ${this._team}, contract period: ${this._agent}`);
    }

    join(team: string, contractMonth: number, ) {
        this._team = team;
        this._contractPeriodMonth = contractMonth;
    }

    leave() {
        this._team = constants.defaultTeam;
    }

    extendContract(periodMonth : number) {
        this._contractPeriodMonth += periodMonth;
    }

    managedBy(agent:Agent) {
        this._agent = agent;
    }
}