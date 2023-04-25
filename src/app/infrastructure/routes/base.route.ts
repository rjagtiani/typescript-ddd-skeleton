import type { Request, Response, Router } from 'express'

import type { HealthCheckController } from '../controllers/HealthCheckController'
import container from '../dependency-injection'

export const register = (router: Router): void => {
  const healthCheckController = container.get<HealthCheckController>(
    'App.controller.HealthCheckController'
  )
  router.get('/', (req: Request, res: Response) => { healthCheckController.run(req, res) })
}
