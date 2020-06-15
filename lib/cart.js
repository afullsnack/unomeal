export default function Cart(oldCart) {


	this.items = oldCart.items || {};

	this.totalQty = oldCart.totalQty || 0;

	this.totalPrice = oldCart.totalPrice || 0;

	this.options = oldCart.options || {};



	// add item to cart function.

	this.add = (item, id, qty, price, options) => {

		var storedItem = this.items[id];

		if(!storedItem) {

			storedItem = this.items[id] = { item, options, qty, price };
			this.totalQty += qty;

			this.totalPrice += Number(price);
			return;

		}

		// storedItem.qty++;
		this.items[id].qty++;

		// storedItem.price = price;

		// get the store the item is bought from and add to item array.

		this.totalQty += qty;

		this.totalPrice += Number(price);

	};


	this.removeItem = (id) => {

		this.totalQty -= this.items[id].qty;

		this.totalPrice -= this.items[id].price;

		delete this.items[id];

		if(this.totalQty === 0){

			this.totalPrice = 0;

		}

	};


	this.generateArray = () => {

		var arr = [];

		for (var id in this.items) {

			arr.push(this.items[id]);

		}

		return arr;

	}


};
 