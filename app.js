var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Product = require('./models/product'),
	seedDB = require('./seed');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/shoppingproducts', { useNewUrlParser: true, useUnifiedTopology: true });
seedDB();
//console.log(products);
app.get('/', function(req, res) {
	res.render('home');
});

app.get('/products/:id', function(req, res) {
	// console.log(req.params);
	Product.find({ category: req.params.id }, function(err, foundProd) {
		console.log(foundProd);
		res.render('index.ejs', { prods: foundProd });
	});
});

app.get('/products/:prodtypeid/:prod_id', function(req, res) {
	Product.findById(req.params.prod_id, function(err, foundProd) {
		if (err) {
			//req.flash('error', 'Some error happened.Please try again later.');
			console.log(err);
		} else {
			console.log(foundProd);
			res.render('show.ejs', { prod: foundProd });
		}
	});
});

app.listen('3000', function() {
	console.log('live at 3000');
});
