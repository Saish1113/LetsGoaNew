const express = require('express') 
const bodyparser = require('body-parser') 
const path = require('path') 
const app = express() 

var Publishable_Key = "pk_test_51L7MNkSE9Z5QqJ32JvsvT9IkJutVrkOzzVd7J4kBLqS89x128r5fLXdYiGmXt6UmQErW48o8Pg8XDVdTGPdRNwSI00j2HD5yGK"
var Secret_Key = "sk_test_51L7MNkSE9Z5QqJ32IYVutHB6qbbclhNgIGH0k5g20p33iQFdq7DLcVl6S5hcSbtLcchDBDkDVsWKA6b5tr6U9chW006wk1h6br"

const stripe = require('stripe')(Secret_Key) 

const port = process.env.PORT || 3000 

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

// View Engine Setup 
app.set('views', path.join(__dirname, 'src')) 
app.set('view engine', 'ejs') 

app.get('/', function(req, res){ 
	res.render('Home', { 
	key: Publishable_Key 
	}) 
}) 

app.post('/payment', function(req, res){ 

	// Moreover you can take more details from user 
	// like Address, Name, etc from form 
	stripe.customers.create({ 
		email: req.body.stripeEmail, 
		source: req.body.stripeToken, 
		name: 'Renisha', 
		address: { 
			line1: 'TC 9/4 Old MES colony', 
			postal_code: '110092', 
			city: 'New Delhi', 
			state: 'Delhi', 
			country: 'India', 
		} 
	}) 
	.then((customer) => { 

		return stripe.charges.create({ 
			amount: 7000,	 // Charing Rs 25 
			description: 'Travel and Tousrism', 
			currency: 'USD', 
			customer: customer.id 
		}); 
	}) 
	.then((charge) => { 
		res.send("Success") // If no error occurs 
	}) 
	.catch((err) => { 
		res.send(err)	 // If some error occurs 
	}); 
}) 

app.listen(port, function(error){ 
	if(error) throw error 
	console.log("Server created Successfully") 
})