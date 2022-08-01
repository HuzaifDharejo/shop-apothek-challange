class loginPage {
  enterEmail(email) {
    cy.get('[data-qa-id="login-form-username"]')
      .clear()
      .type(email)
      .should("have.value",email)
    return this;
  }

  enterPassword(pwd) {
    cy.get('[data-qa-id="login-form-password"]')
      .should("be.visible")
      .clear()
      .type(pwd, { log: false })
      .should("have.value",pwd)
    return this;
  }


  getLoginButton() {
    return cy.get('#login-submit-btn');
  }

  getUserNameFromHomePage(){
    return cy.contains("Hallo, Kay Valentine")
  }



  validateErrorForMandatoryFields(errorIndex, expectedText) {
    cy.get('[class="a-ErrorMessage"]')
      .eq(errorIndex)
      .should("have.text", expectedText)
      .and("be.visible");
  }

  validateErrorMessage(expectedText) {
    cy.get('.m-Notification')
      .should("include.text", expectedText)
      .and("be.visible");
  }

  ValidateLoginFormTitle(expectedText) {
    cy.get('[data-qa-id="login-login"]')
      .find(".lead")
      .should("have.text", expectedText)
      .and("be.visible");
  }

  getForgotPasswordLink() {
    cy.get('[data-qa-id="login-registration-password-reveal"]');
  }

  getsubmitRegistration() {
    cy.get('[data-qa-id="login-registration-submit-button"]');
  }
getLogo(){
  return cy.get('.a-fullwidth-image')
}
getNavBar(){
  return cy.get('.o-Menubar')
}
  
}
export default loginPage;
