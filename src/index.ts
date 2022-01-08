import 'dotenv/config'
import 'module-alias/register'
import validateEnv from '@/utils/validate.env'
import App from './app'

validateEnv()

const app = new App([], Number(process.env.PORT))

app.listen()
