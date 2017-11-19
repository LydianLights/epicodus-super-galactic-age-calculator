import { HumanSubject } from "./../js/HumanSubject.js"
import { Age } from "./../js/Age.js"

class Page {
  constructor() {
    this.id = "6FE9BA";
    this.userInfoForm = new UserInfoForm();
    this.results = null;
    this.initialize();
  }
  initialize() {
    $("#user-info-form form").submit(function() {
      event.preventDefault();
      this.userInfoForm.goToNextPage();
      if (this.userInfoForm.isSubmitted) {
        this.getResultsFromForm();
        this.showResults();
      }
    }.bind(this));
    $("#user-info-form button[name=previous-button]").click(function() {
      this.userInfoForm.goToPreviousPage();
    }.bind(this));
  }
  getResultsFromForm() {
    let id = this.id;
    let localizedName = $("#user-info-first-name").val() + " " + $("#user-info-last-name").val();
    let birthdateArray = $("#user-info-birthdate").val().split("-");
    let birthdate = new Date(birthdateArray[0], birthdateArray[1], birthdateArray[2]);
    let healthFactors = {
      hereditaryHealthRating: parseFloat($("input:radio[name=user-info-hereditary-health]:checked").val()),
      adequateExerciseRating: parseFloat($("input:radio[name=user-info-exercise]:checked").val()),
      adequateHealthcareRating: parseFloat($("input:radio[name=user-info-healthcare]:checked").val()),
      isSmoker: ($("#user-info-smoker").val() === "true"),
      alcoholDependencyFactor: parseFloat($("#user-info-alcohol-dependency").val()),
      radiationExposureFactor: parseFloat($("#user-info-radiation-exposure").val()),
      immuneSystemCyberneticsInstalled: ($("#user-info-immune-system-cybernetics").val() === "true"),
      uploadedToUniversalCollectiveConsciousness: ($("#user-info-universal-collective").val() === "true"),
      missingSemicolonStressFactor: parseFloat($("#user-info-semicolon-stress").val()),
      exposureToKarmaUnitTestingTool: ($("#user-info-karma").val() === "true")
    };
    let subject = new HumanSubject(id, localizedName, birthdate, healthFactors);
    this.results = new Results(subject);
  }
  showResults() {
    console.log(this.results);
    $("#user-info-form").slideUp();
    $("#results").slideDown();
  }
}

class UserInfoForm {
  constructor() {
    this.lastPage = 5;
    this.currentPage = 1;
    this.isSubmitted = false;
  }
  goToPage(page) {
    const animationSpeed = 200;
    if (page >= 1 && page <= this.lastPage) {
      this.currentPage = page;
      for (let i = 1; i <= this.lastPage; i++) {
        $("#user-info-page-" + i).slideUp(animationSpeed);
      }
      $("#user-info-page-" + this.currentPage).slideDown(animationSpeed);
    }
  }
  goToNextPage() {
    if (this.currentPage < this.lastPage) {
      this.goToPage(this.currentPage + 1);
    }
    else if (this.currentPage === this.lastPage) {
      this.submitForm();
    }
  }
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }
  submitForm() {
    this.isSubmitted = true;
  }
}

class Results {
  constructor(humanSubject) {
    this.humanSubject = humanSubject;
  }
}

$(document).ready(function() {
  let page = new Page();
});
