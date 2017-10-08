let mongoose      = require('mongoose'),
    generalController = require('../general/general.controller'),
    User          = mongoose.model('User')

Object.assign(exports, generalController(User))
