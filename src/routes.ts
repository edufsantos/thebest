import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/signup', new UserController().create)
routes.post('/signin', new UserController().login)

routes.use(authMiddleware)

routes.get('/register', new UserController().getProfile)

export default routes
