import { HumanSubject } from "./../js/HumanSubject.js"

describe("HumanSubject constructor", function() {
  it("should describe a new human with an id, localized name, origin date, and health factors" , function() {
    let id = "0x15AC2A84E";
    let localizedName = "Rane";
    let originDateTime = new Date(1991, 5, 3, 20, 34, 32);
    let healthFactors = {
      hereditaryHealthRating: 3,
      adequateExerciseRating: 2,
      adequateHealthcareRating: 3,
      isSmoker: false,
      alcoholDependencyFactor: .13,
      radiationExposureFactor: 0,
      immuneSystemCyberneticsInstalled: false, // Unfortunately
      uploadedToUniversalCollectiveConsciousness: false,
      missingSemicolonStressFactor: .74,
      exposureToKarmaUnitTestingTool: true,
    };
    let subject = new HumanSubject(id, localizedName, originDateTime, healthFactors);
    expect(subject.id).toEqual(id);
    expect(subject.localizedName).toEqual(localizedName);
    expect(subject.originDateTime).toEqual(originDateTime);
    expect(subject.healthFactors).toEqual(healthFactors);
  });

  it("should use default health factors if none specified" , function() {
    let id = "0x15AC2A84E";
    let localizedName = "Rane";
    let originDateTime = new Date(1991, 5, 3, 20, 34, 32);
    let subject = new HumanSubject(id, localizedName, originDateTime);

    expect(subject.healthFactors.hereditaryHealthRating).toEqual(3);
    expect(subject.healthFactors.adequateExerciseRating).toEqual(3);
    expect(subject.healthFactors.adequateHealthcareRating).toEqual(3);
    expect(subject.healthFactors.isSmoker).toEqual(false);
    expect(subject.healthFactors.alcoholDependencyFactor).toEqual(0);
    expect(subject.healthFactors.radiationExposureFactor).toEqual(0);
    expect(subject.healthFactors.immuneSystemCyberneticsInstalled).toEqual(false);
    expect(subject.healthFactors.uploadedToUniversalCollectiveConsciousness).toEqual(false);
    expect(subject.healthFactors.missingSemicolonStressFactor).toEqual(0);
    expect(subject.healthFactors.exposureToKarmaUnitTestingTool).toEqual(false);
  });
});
