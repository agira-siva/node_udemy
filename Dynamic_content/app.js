const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('views', path.join(__dirname , "views"));
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "404 error", pageContent: "resources not found"});
});

app.listen(8000);
