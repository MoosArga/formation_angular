import { SimpleUnit } from "./simple-unit";
import { UnitCost } from "./unit-cost";

export class Unit extends SimpleUnit {

  expansion: string;
  age: string;
  cost: UnitCost;
  created_in: string;
  build_time: number;
  reload_time: number;
  attack_delay: number;

}
