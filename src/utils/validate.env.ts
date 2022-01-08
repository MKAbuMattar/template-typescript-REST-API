import { cleanEnv, str, port } from 'envalid'

function validateEnv(): void {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    MONGO_URL: str(),
    PORT: port({ default: 3030 }),
  })
}

export default validateEnv