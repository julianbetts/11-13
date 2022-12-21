const express = require('express');
const apiRouter = express.Router()
const feedbackRouter = require('./feedbackRouter')

apiRouter.use('/feedback', feedbackRouter)