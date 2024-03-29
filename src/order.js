function Order() {
	this.currentOrder = {};
	this.menu = new Menu();
	this.orderTotal = 0;
};

Order.prototype.showMenu = function(menu) {
	return this.menu.items;
};

Order.prototype.addItemsToOrder = function(item, quantity) {
	for (var key in this.menu.items) {
  	if (this.menu.items.hasOwnProperty(item) === true) {
			return this.currentOrder[item] = quantity;
		}
		else {
			throw new Error("That dish is not on the menu."); 
		}
	}
};

Order.prototype.sumOrder = function() {
	console.log(this.currentOrder);
	for (var key in this.currentOrder) {
			this.orderTotal += (this.menu.items[key] * this.currentOrder[key]);
	};
};


Order.prototype.checkout = function(payment) {
	if (payment === this.orderTotal) {
		return "Bill paid";
	}
	else {
		return "Please pay correct amount";
	};
};
