export class Age {
  constructor(fromDate, toDate) {
    this.originDate = fromDate;
    this.endDate = toDate || "now";
  }
  getInSeconds() {
    let fromTime = (this.originDate === "now") ? new Date().getTime() : this.originDate.getTime();
    let toTime = (this.endDate === "now") ? new Date().getTime() : this.endDate.getTime();
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
