import { BasePage } from "./basePage";
export class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get clickGrid() {
    return cy.get("#demo-tab-grid");
  }
  static get clickTwo() {
    return cy.contains(
      '[class="list-group-item list-group-item-action"]',
      /^Two/,
    );
  }
  static get clickFour() {
    return cy.contains(
      '[class="list-group-item list-group-item-action"]',
      /^Four/,
    );
  }
  static get clickSix() {
    return cy.contains(
      '[class="list-group-item list-group-item-action"]',
      /^Six/,
    );
  }
  static get clickEight() {
    return cy.contains(
      '[class="list-group-item list-group-item-action"]',
      /^Eight/,
    );
  }

  static validateSelected(items) {
    items.forEach((item) => {
      this.getItem(item).should("have.class", "active");
    });
  }

  static validateNotSelected(items) {
    items.forEach((item) => {
      this.getItem(item).should("not.have.class", "active");
    });
  }
  static getItem(itemName) {
    return cy.contains(".list-group-item", new RegExp(`^${itemName}`));
  }
}
