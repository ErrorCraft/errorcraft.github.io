window.onload = function() {
	let navbarContainer = document.getElementsByClassName("navbar-nav")[0];
	Object.keys(units).forEach(function(key) {
		navbarContainer.appendChild(generateItem(key));
	});
}

/// name : String
function generateItem(name) {
	let navItem = document.createElement("li");
	navItem.classList.add("nav-item");
	
	navItem.appendChild(generateItemCheckbox());
	navItem.appendChild(generateItemLabel(name));
	navItem.appendChild(generateDropdown(name));
	
	return navItem;
}

function generateItemCheckbox() {
	let navCheck = document.createElement("input");
	navCheck.type = "checkbox";
	navCheck.classList.add("nav-check");
	return navCheck;
}

/// name : String
function generateItemLabel(name) {
	let navCheckLabel = document.createElement("label");
	navCheckLabel.classList.add("nav-check-label");
	
	// Append
	navCheckLabel.appendChild(generateItemLabelImage(name));
	navCheckLabel.appendChild(generateItemLabelText(name));
	return navCheckLabel;
}

function generateItemLabelImage(name) {
	let navItemLabelImageContainer = document.createElement("div");
	navItemLabelImageContainer.classList.add("nav-check-image-container");
	
	let navItemLabelImageContainerImage = document.createElement("img");
	navItemLabelImageContainerImage.src = units[name].image;
	
	navItemLabelImageContainer.appendChild(navItemLabelImageContainerImage);
	
	return navItemLabelImageContainer;
}

/// name : String
function generateItemLabelText(name) {
	let navItemLabelText = document.createElement("span");
	navItemLabelText.classList.add("nav-check-text");
	navItemLabelText.innerHTML = name;
	
	return navItemLabelText;
}

/// name : String
function generateDropdown(name) {
	let navDropdown = document.createElement("span");
	navDropdown.classList.add("nav-dropdown");
	
	let contents = units[name].contents;
	Object.keys(contents).forEach(function(key) {
		navDropdown.appendChild(generateDropdownItem(contents, key));
	});
	
	return navDropdown;
}

/// contents : Object
/// name : String
function generateDropdownItem(contents, name) {
	
	let navDropdownItem = document.createElement("a");
	navDropdownItem.classList.add("nav-dropdown-item");
	navDropdownItem.href = contents[name].url;
	
	let navDropdownItemText = document.createElement("span");
	navDropdownItem.classList.add("unit-dropdown-text");
	navDropdownItemText.innerHTML = name;
	
	navDropdownItem.appendChild(navDropdownItemText);
	
	return navDropdownItem;
}