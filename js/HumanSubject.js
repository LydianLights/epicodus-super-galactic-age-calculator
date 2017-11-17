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
}
