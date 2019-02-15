import { AppiumDriver, createDriver, UIElement } from "nativescript-dev-appium";
import * as expect from "expect";

describe("sample scenario", () => {
  const defaultWaitTime = 5000;
  let driver: AppiumDriver;
  let navbar: UIElement;

  before(async () => {
    driver = await createDriver();
  });

  after(async () => {
    await driver.quit();
  });

  afterEach(async function () {
    if (this.currentTest.state === "failed") {
      await driver.logTestArtifacts(this.currentTest.title);
    }
  });

  it("has a navigation bar", async () => {
    navbar = await driver.findElementByAutomationText("navigation");
    expect(await navbar.exists()).toBe(true);
  })
});
