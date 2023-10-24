import express from 'express'
import * as db from './db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const wombles = await db.getWombles()
  res.render('home', { wombles })
})

export default router

router.get('/:womblesId/view', async (req, res) => {
  const womblesId = req.params.womblesId
  const womble = await db.getWomblesById(womblesId)
  console.log(womble)
  res.render('womble', { womble })
})

router.get('/assignment', async (req, res) => {
  const assignments = await db.listOfAssigments()
  console.log(assignments)
  res.render('assignments', { assignments })
})
