"use strict";
import express from 'express'
import * as TwitterService from '../service/TwitterService'

let twitterRouter = express.Router()

twitterRouter.route('/current/density').get((req, res) => {
  TwitterService.getCurrentDensity(req.location).then(output => {
    res.send(output)
  })
})

twitterRouter.route('/predict/nextTime').get((req, res) => {
    res.send("under construction")
  
})

twitterRouter.route('/predict/nextPlace').get((req, res) => {
    res.send("under construction")

})

export default twitterRouter
