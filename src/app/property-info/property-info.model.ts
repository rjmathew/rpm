export class PropertyInfo {
  yearPurchased : number;
  description : string;

  constructor(pYearPurchased? : number , pDescription? : string ) {
    this.yearPurchased = pYearPurchased;
    this.description = pDescription;
  }

  getString() : string {
    return "test";
  }
}
