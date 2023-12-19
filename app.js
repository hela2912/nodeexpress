const express = require('express')
const app = express()
const products = require('./data.js')
const products_routes = require('./routes/products.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/products', products_routes)

/*app.use(express.json()) // parse json body content

app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})

app.use(express.json()) 

app.put('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }
    products[index] = updatedProduct
    res.status(200).json('Product updated')
})

app.use(express.json()) // parse json body content

app.delete('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
        if (index === -1) {
        return res.status(404).send('Product not found')
    }
    products.splice(index,1)
    res.status(200).json('Product deleted')
})
//app.get('/api/query', (req, res) => {
  //  const name = req.query.name.toLowerCase()
   // const products_result = products.filter(product => product.name.toLowerCase().includes(name))

   // if (products_result.length < 1) {
   //     return res.status(200).send('No products matched your search')
   // }
   // res.json(products_result)
//})

/*const logger  = (req, res, next) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    next()
}

app.get('/about', logger, (req, res) => {
    return res.send('About Page')
})

const auth  = (req, res, next) => {
    const user = req.query.user
    if (user === 'admin') {
        req.user = { name: 'admin', id: 1 }
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}
app.use(auth)

app.get('/about', (req, res) => {
    console.log(req.user)
    return res.send('About Page')
})
app.use('/api', logger)
app.use([logger, auth])
app.use(express.json()) // parse json body content

*/

