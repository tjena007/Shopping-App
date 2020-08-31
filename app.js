var express = require("express"),
    app = express(),
    webpack = require("webpack");

app.use(express.static(__dirname + '/public'));

var products = [
    {
        name: "hm",
        price: 100,
        category: "kurtas",
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11407264/2020/8/3/81bbac59-623c-43dd-8096-85bfb8fd32af1596437024926-Taavi-Men-Black--Beige-Striped-Straight-Kurta-with-Thread-Wo-1.jpg"
    },
    {
        name: "h123m",
        price: 10320,
        category: "suits",
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11407264/2020/8/3/81bbac59-623c-43dd-8096-85bfb8fd32af1596437024926-Taavi-Men-Black--Beige-Striped-Straight-Kurta-with-Thread-Wo-1.jpg"
    },
    {
        name: "ffhm",
        price: 3,
        category: "jeans",
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11407264/2020/8/3/81bbac59-623c-43dd-8096-85bfb8fd32af1596437024926-Taavi-Men-Black--Beige-Striped-Straight-Kurta-with-Thread-Wo-1.jpg"
    },
    {
        name: "h1m",
        price: 8650,
        category: "kurtas",
        image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/3/18/8370b107-af0c-494b-b12d-b4334fd0a4261584487293676-1.jpg"
    }
]
console.log(products);
app.get("/", function (req, res) {
    res.render("home");
})

app.get("/products/:id", function (req, res) {
    // console.log(req.params);
    var foundProd = [];
    products.forEach(function (prod, index) {
        // console.log(prod, index);
        if (prod.category === req.params.id) {

            console.log("match!" + index)
            foundProd.push(prod)
        }
    })
    console.log(foundProd)
    res.render("index.ejs", { prods: foundProd })
})

app.set("view engine", "ejs");

app.listen("3000", function () {
    console.log("live at 3000");
})