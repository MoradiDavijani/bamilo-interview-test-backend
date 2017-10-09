let mongoose          = require('mongoose'),
    generalController = require('../general/general.controller'),
    Products          = mongoose.model('Products')

Object.assign(exports, generalController(Products))
