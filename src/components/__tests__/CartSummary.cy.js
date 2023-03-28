import CartSummary from "../CartSummary.vue";
require('cypress');

describe("CartSummary", () => {
  it("renders properly", () => {
    cy.mount(CartSummary, {
      props: {
        price: 9.99,
        total: 10.99,
    }});
    cy.get("p").should("contain", "9.99");
    cy.get("p").should("contain", "10.99");
  });
});
