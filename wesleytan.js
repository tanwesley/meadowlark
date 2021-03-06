const express = require('express')
const expressHandlebars = require ('express-handlebars')

const app = express()
const port = process.env.PORT || 3000

//configure Handlebars view engine
app.engine('handlebars', expressHandlebars ({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home.handlebars'))



app.use(express.static(__dirname + '/public'))

// syllabus
app.get('/syllabus', (req, res) => {
    res.render('syllabus.handlebars')
})

// diceroll
app.get('/diceroll', (req, res) => {
    res.render('diceroll.handlebars')
})

// meadowlark
app.get('/meadowlark', (req, res) => {
    res.render('meadowlark.handlebars')
})

//lovelace's
app.get('/lovelaces', (req, res) => {
    res.render('lovelaces.handlebars', {layout: 'lovelacesLayout.handlebars'})
})


// online order
app.get('/lovelaces/order', (req, res) => {
    res.render('order.handlebars', {layout: 'lovelacesLayout.handlebars'})
}) 

// receipt 
app.get('/lovelaces/order/receipt', (req, res) => {
    res.render('receipt.handlebars', {layout: 'lovelacesLayout.handlebars'})
})

// custom 404 page
app.use((req,res) => {
    res.status(404)
    res.render('404.handlebars')
})

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500.handlebars')
})

app.listen(port, () => console.log(
    'Express started on http://localhost:${port};' +
    'press Ctrl-C to terminate.'))