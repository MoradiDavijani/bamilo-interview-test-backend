let mongoose      = require('mongoose'),
    generalController = require('../general/general.controller'),
    Attribute     = mongoose.model('Attribute')

Object.assign(exports, generalController(Attribute))
