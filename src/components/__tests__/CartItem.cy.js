import CartItem from "../CartItem.vue";
import "../../assets/scss/cart.scss";

describe("CartItem", () => {
  it("playground", () => {
    cy.mount(CartItem, { props: { msg: "Hello Cypress" } });
  });

  it("renders properly", () => {
    cy.mount(CartItem, {
      props: {
        id: 1,
        name: "Creme",
        price: 12.99,
        amount: 60,
        img: "/img/exfoliator.jpg",
    }});
    cy.get("h1").should("contain", "Creme");
    cy.get("p").should("contain", "12.99");
  });
});
