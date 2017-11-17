import { Age } from "./../js/Age.js"

export class HumanSubject {
  constructor(id, localizedName, originDateTime, healthFactors) {
    this.id = id;
    this.localizedName = localizedName;
    this.originDateTime = originDateTime;
    healthFactors = healthFactors || {};
    this.healthFactors = {
      hereditaryHealthRating: healthFactors.hereditaryHealthRating || 3,
      adequateExerciseRating: healthFactors.adequateExerciseRating || 3,
      adequateHealthcareRating: healthFactors.adequateHealthcareRating || 3,
      isSmoker: healthFactors.isSmoker || false,
      alcoholDependencyFactor: healthFactors.alcoholDependencyFactor || 0.0,
      radiationExposureFactor: healthFactors.radiationExposureFactor || 0.0,
      immuneSystemCyberneticsInstalled: healthFactors.immuneSystemCyberneticsInstalled || false,
      uploadedToUniversalCollectiveConsciousness: healthFactors.uploadedToUniversalCollectiveConsciousness || false,
      missingSemicolonStressFactor: healthFactors.missingSemicolonStressFactor || 0.0,
      exposureToKarmaUnitTestingTool: healthFactors.exposureToKarmaUnitTestingTool || false,
    };
  }
  getExpectedExpirationAge() {
    const baselineLifespan = 75;

    let lifespan = baselineLifespan +
      10 * (this.healthFactors.hereditaryHealthRating - 3) / 2 +
      10 * (this.healthFactors.adequateExerciseRating - 3) / 2 +
      15 * (this.healthFactors.adequateHealthcareRating - 3) / 2 +
      (this.healthFactors.isSmoker ? -5 : 0) +
      -15 * this.healthFactors.alcoholDependencyFactor +
      -40 * this.healthFactors.radiationExposureFactor +
      (this.healthFactors.immuneSystemCyberneticsInstalled ? 75 : 0) +
      (this.healthFactors.uploadedToUniversalCollectiveConsciousness ? 0xFFFF : 0) +
      -5 * this.healthFactors.missingSemicolonStressFactor +
      (this.healthFactors.exposureToKarmaUnitTestingTool ? -7 : 0);

    let expirationDate = new Date(this.originDateTime.getTime() + lifespan * 365 * 24 * 60 * 60 * 1000);
    return new Age(this.originDateTime, expirationDate);
  }
}
