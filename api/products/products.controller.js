let mongoose      = require('mongoose'),
    generalController = require('../general/general.controller'),
    Product       = mongoose.model('Product')

Object.assign(exports, generalController(Product))
