class UserInfoForm {
  constructor() {
    this.lastPage = 5;
    this.currentPage = 1;
  }
  goToPage(page) {
    const animationSpeed = 200;
    if (page >= 1 && page <= this.lastPage) {
      this.currentPage = page;
      for (let i = 1; i <= this.lastPage; i++) {
        $("#user-info-page-" + i).slideUp(animationSpeed);
      }
      $("#user-info-page-" + this.currentPage).slideDown(animationSpeed);
      if (this.currentPage === 1) {
        $("#user-info-form button[name=previous-button]").hide();
      }
      else {
        $("#user-info-form button[name=previous-button]").show();
      }
      if (this.currentPage === this.lastPage) {
        $("#user-info-form button[name=next-button]").hide();
        $("#user-info-form button[name=submit-button]").show();
      }
      else {
        $("#user-info-form button[name=next-button]").show();
        $("#user-info-form button[name=submit-button]").hide();
      }
    }
  }
  goToNextPage() {
    if (this.currentPage < this.lastPage) {
      this.goToPage(this.currentPage + 1);
    }
  }
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }
}

$(document).ready(function() {
  let userInfoForm = new UserInfoForm();
  $("#user-info-form form").submit(function() {
    event.preventDefault();
    userInfoForm.goToNextPage();
  });
  $("#user-info-form button[name=previous-button]").click(function() {
    userInfoForm.goToPreviousPage();
  });
});
