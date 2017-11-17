export class Age {
  constructor(birthday) {
    this.origin = birthday;
  }
  getInSeconds() {
    return Math.floor((new Date().getTime() - this.origin.getTime()) / 1000);
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
