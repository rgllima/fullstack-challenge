import environment from "./config/environment";
import app from "./app"

app.listen(environment.appPort)
console.log(`[SERVER] Started ${environment.nodeEnv} in port ${environment.appPort}`)
