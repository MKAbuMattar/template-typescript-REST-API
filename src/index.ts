import 'dotenv/config'
import 'module-alias/register'
import envValidate from '@/utils/env.validate'
import App from './app'
import PostController from '@/controllers/post.controller'
import UserController from '@/controllers/user.controller'

envValidate()

const app = new App([new PostController(), new UserController()], Number(process.env.PORT))

app.listen()
