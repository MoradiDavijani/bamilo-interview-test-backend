let mongoose          = require('mongoose'),
    generalController = require('../general/general.controller'),
    Users             = mongoose.model('Users')

Object.assign(exports, generalController(Users))
