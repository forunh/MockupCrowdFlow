"use strict";
import express from 'express'
import * as TwitterService from '../service/TwitterService'

let twitterRouter = express.Router()

twitterRouter.route('/current/density').get((req, res) => {
  TwitterService.getCurrentDensity(req.location).then(output => {
    res.send(output)
  })
})

export default twitterRouter
