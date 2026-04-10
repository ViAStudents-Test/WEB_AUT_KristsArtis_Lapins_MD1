import { SelectablePage } from "../pageObjects/selectTablePage";

describe("HomeWork 1 Specs", () => {
  it("MD1", () => {
    SelectablePage.visit();

    SelectablePage.clickGrid.click();

    SelectablePage.clickTwo.click();

    SelectablePage.clickFour.click();

    SelectablePage.clickSix.click();

    SelectablePage.clickEight.click();

    // Validate selected
    SelectablePage.validateSelected(["Two", "Four", "Six", "Eight"]);

    //Validate not selected
    SelectablePage.validateNotSelected([
      "One",
      "Three",
      "Five",
      "Seven",
      "Nine",
    ]);
  });
});
