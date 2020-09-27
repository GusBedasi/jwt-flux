import { Router } from 'express'

import storeUser from './controllers/UserController/store'
import storeSession from './controllers/SessionController/storeSession'
import authMiddleware from './middlewares/auth'
import identify from './controllers/IdentityController/identify'

const routes = Router()

routes.post('/create', storeUser)
routes.post('/login', storeSession)

routes.use(authMiddleware)

routes.get('/authenticated', identify)

export { routes }