import { cleanEnv, str, port } from 'envalid'

const validate = (): void => {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    MONGO_URL: str(),
    PORT: port({ default: 3030 }),
    JWT_SECRET: str(),
  })
}

export default validate
