
import loginPage from "../support/pages/LoginPage";

const LoginPage = new loginPage();

describe("Testing Login Functionalty ", () => {

  
  it("Verify on entering valid Email and password, the customer can login", () => {

    
    cy.url().should("include", "/login");

    LoginPage.getLogo().should("be.visible")
    LoginPage.getNavBar().should("be.visible")
    LoginPage.enterEmail(Cypress.env("usernaem"))
    LoginPage.enterPassword(Cypress.env("password"))
    LoginPage.getLoginButton().should("be.visible").click()
    LoginPage.getUserNameFromHomePage()


  });


  it("Verify on entering Invalid Email and password, the customer can't login", () => {

    
    cy.url().should("include", "/login");
    LoginPage.getLogo().should("be.visible")
    LoginPage.getNavBar().should("be.visible")
    LoginPage.enterEmail("email@mail.com")
    LoginPage.enterPassword("pass")
    LoginPage.getLoginButton().should("be.visible").click()
    LoginPage.validateErrorMessage("E-Mail-Adresse und/oder Passwort sind falsch. Bitte überprüfen Sie Ihre Eingaben.")


  });



  it("Verify without entering Email and password, the customer can't login", () => {

    
    cy.url().should("include", "/login");
    LoginPage.getLogo().should("be.visible")
    LoginPage.getNavBar().should("be.visible")
    LoginPage.getLoginButton().should("be.visible").click()
    LoginPage.validateErrorForMandatoryFields(2, "Please fill out this field.")
    LoginPage.validateErrorForMandatoryFields(3, "Please fill out this field.")


  });



});
