export class Age {
  constructor(fromDate, toDate) {
    this._fromDate = fromDate;
    this._toDate = toDate || "now";
  }
  getInSeconds() {
    let fromTime = this._fromDate.getTime();
    let toTime = (this._toDate === "now") ? new Date().getTime() : this._toDate.getTime();
    return Math.floor((toTime - fromTime) / 1000);
  }
  getInYears() {
    return this.getInSeconds() / (60 * 60 * 24 * 365);
  }
  getInMercuryYears() {
    return this.getInYears() * .24;
  }
  getInVenusYears() {
    return this.getInYears() * .62;
  }
  getInMarsYears() {
    return this.getInYears() * 1.88;
  }
  getInJupiterYears() {
    return this.getInYears() * 11.86;
  }
}
