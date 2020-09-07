var mongoose = require('mongoose');

let Product = require('./models/product');

var products = [
	{
		name: 'hm',
		price: 100,
		category: 'kurtas',
		image:
			'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11407264/2020/8/3/81bbac59-623c-43dd-8096-85bfb8fd32af1596437024926-Taavi-Men-Black--Beige-Striped-Straight-Kurta-with-Thread-Wo-1.jpg'
	},
	{
		name: 'h123m',
		price: 10320,
		category: 'suits',
		image:
			'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11407264/2020/8/3/81bbac59-623c-43dd-8096-85bfb8fd32af1596437024926-Taavi-Men-Black--Beige-Striped-Straight-Kurta-with-Thread-Wo-1.jpg'
	},
	{
		name: 'ffhm',
		price: 3,
		category: 'jeans',
		image:
			'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11407264/2020/8/3/81bbac59-623c-43dd-8096-85bfb8fd32af1596437024926-Taavi-Men-Black--Beige-Striped-Straight-Kurta-with-Thread-Wo-1.jpg'
	},
	{
		name: 'h1m',
		price: 8650,
		category: 'kurtas',
		image:
			'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/18/8370b107-af0c-494b-b12d-b4334fd0a4261584487293676-1.jpg'
	}
];

function seedDB() {
	Product.remove({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log('removed prducs');
		//add a few campgrounds
		products.forEach(function(seed) {
			Product.create(seed, function(err, product) {
				if (err) {
					console.log(err);
				} else {
					console.log('added to DB');
				}
			});
		});
	});
}

module.exports = seedDB;
