var express = require('express');
var exphbs  = require('express-handlebars');
require('dotenv/config');
var mercadopago = require('mercadopago')
var port = process.env.PORT || 3000

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN,
    integrator_id: process.env.MP_INTEGRATOR_ID,
  });

var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
app.use(express.urlencoded());
app.use(express.json({ extended: true }));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.render('home');
});

app.post('/create-preference', function (req, res) {
    let payer = {
        name: "Lalo",
        surname: "Landa",
        email: "test_user_92801501@testuser.com",
        phone: {
            area_code: "55",
            number: 985298743
        },
        address: {
            street_name: "false",
            street_number: 123,
            zip_code: "78134-190"
        }
    }

    let items = [{
        id: 1234,
        title: req.body.title,
        description: "Celular de Tienda e-commerce",
        picture_url: req.body.picture_url,
        unit_price: Number(req.body.price),
        quantity: parseInt(req.body.unit, 10),
    }]

    let preference = {
        items,
        payer,
        external_reference: "iamantoniomoraes@gmail.com",
        back_urls: {
            success: "https://monkfish-app-t5kdq.ondigitalocean.app/success",
            failure: "https://monkfish-app-t5kdq.ondigitalocean.app/failure",
            pending: "https://monkfish-app-t5kdq.ondigitalocean.app/pending"
        },
        auto_return: "approved",
        payment_methods: {
            excluded_payment_methods: [
                {
                    id: "visa"
                }
            ],
            installments: 6
        },
        notification_url: "https://monkfish-app-t5kdq.ondigitalocean.app/notifications",
        };

    console.log(preference);

    mercadopago.preferences.create(preference)
    .then(function(response){
    // Este valor substituirá a string "<%= global.id %>" no seu HTML
        global.init_point = response.body.init_point;
        res.redirect(response.body.init_point);
    }).catch(function(error){
        console.log(error);
    });
});

app.post('/notifications', function (req, res) {
    console.log('Webhook was called');
    console.log(req.body);
    res.sendStatus(201);
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

app.get('/success', function (req, res) {
    res.render('success', req.query);
});

app.get('/pending', function (req, res) {
    res.render('pending', req.query);
});

app.get('/error', function (req, res) {
    res.render('error', req.query);
});

app.listen(port);