import { checkName } from "./functions/checkName.js";

const firstName = document.querySelector("input[name='firstName']");
const lastName = document.querySelector("input[name='lastName']");

firstName.onkeyup = function () {
	if (checkName(this.value)) {
		this.nextElementSibling.innerHTML = "";
	} else {
		this.nextElementSibling.innerHTML = "Invalid name";
	}
};

lastName.onkeyup = function () {
	if (checkName(this.value)) {
		this.nextElementSibling.innerHTML = "";
	} else {
		this.nextElementSibling.innerHTML = "Invalid name";
	}
};
