import { expect } from "@jest/globals";
import { checkName } from "./checkName.js";

test("name validation function works", function () {
	expect(checkName("a")).toBe(false);
});
