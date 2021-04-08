context("Google", () => {
    describe("Login to Webmail", () => {
      beforeEach(() => {
        cy.visit("https://mail.yandex.com/"); //go to website
        cy.viewport(1440, 960); //screen orientation
      });
  
      it("Should sign in successfully to mail", () => {
        cy.wait(5000);
        cy.contains("Log in").click();
        cy.get("input.Textinput-Control").type("timothy.olukotun");
        cy.get('button.Button2').click();
;        cy.get("input[name='passwd']").last().type("Roseline@0072{Enter}");
        cy.wait(3000);
        
        cy.contains("Inbox").click();
        //cy.get('span[class="subject"]').first().click(); //click on the first element
        cy.wait(2000);
      });
    });
  });