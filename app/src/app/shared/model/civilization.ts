import { SimpleCivilization } from "./simple-civilization";

export class Civilization extends SimpleCivilization {

  army_type: string;
  unique_unit: string[];
  uniqueUnitName: string[];
  team_bonus: string;
  civilization_bonus: string[];

  constructor(civilization: Civilization) {
    super();
    Object.assign(this, civilization);
    this.uniqueUnitName = this.unique_unit.map(u => {
      const names = u.match(/\w+$/);
      return names && names.length ? names[0]: '';
    });
  }

}
