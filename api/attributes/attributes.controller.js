let mongoose          = require('mongoose'),
    generalController = require('../general/general.controller'),
    Attributes        = mongoose.model('Attributes')

Object.assign(exports, generalController(Attributes))
