const dropDownQuery = '.drop-down';
 
const getAll = (query) => Array.from(document.querySelectorAll(query));
const get = (query) => document.querySelector(query);

const getNavAfter = (query) => get(`${query} + nav`);
const getNavsAfter = () => getAll(`${dropDownQuery} + nav`);

const getDropDown = (query) => get(query);
const getDropDowns = () => getAll(dropDownQuery);

const changeVisibility = function changeVisibilityOfHTMLElement(element, value) {
    const validValues = ["hidden", "visible", "collapse"];
    if (!validValues.includes(value)) {
        return;
    }
    element.style.visibility = value;
}

const hide = (element) => changeVisibility(element, "hidden");

const show = (element) => changeVisibility(element, "visible");

const handleHover = function OnHoverOfDropDownButton(button, navAfter) {
    const container = navAfter.parentNode;
    button.addEventListener("hover", () => {
        show(navAfter);
    });
    container.addEventListener("mouseout", () => {
        hide(navAfter);
    });
}

const getProperty = (element, property) => getComputedStyle(element).getPropertyValue(property);

const getVisibility = (element) => getProperty(element, "visibility");

const toggleVisibility = function (element) {
    if (getVisibility(element) === "visible") {
        hide(element);
        return;
    }
    show(element);
}

const handleClick = function OnClickOfDropDownButton(button, navAfter) {
    button.addEventListener("click", () => {
        toggleVisibility(navAfter);
    });
}

const assignEvent = function (button, navAfter, mode) {
    const validModes = ["click", "hover"];
    if (!validModes.includes(mode)) {
        return;
    }
    hide(navAfter);
    if (mode === "hover") {
        handleHover(button, navAfter);
        return;
    }
    handleClick(button, navAfter);
}

function loadAllDropDowns(mode) {
    const dropDowns = getDropDowns();
    const navs = getNavsAfter();
    dropDowns.forEach((button, index) => {
        const navAfter = navs[index];
        assignEvent(button, navAfter, mode);
    });
}

function loadDropDown(buttonQuery, mode) {
    const button = getDropDown(buttonQuery);
    const navAfter = getNavAfter(buttonQuery);
    assignEvent(button, navAfter, mode);
}

module.exports = { loadAllDropDowns, loadDropDown };