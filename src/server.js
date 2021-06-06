import express from 'express'
import { UserRepository } from './repositories/UserRepository'

const app = express()
const userRepository = new UserRepository()

app.get('/', (req, res) => {
  const users = userRepository.get()

  return res.json({ users })
})

app.listen(3333)
