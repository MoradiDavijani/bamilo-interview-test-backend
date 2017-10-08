let mongoose      = require('mongoose'),
    generalController = require('../general/general.controller'),
    Category      = mongoose.model('Category')

Object.assign(exports, generalController(Category))
