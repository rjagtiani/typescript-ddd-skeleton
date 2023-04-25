import { AfterAll, BeforeAll, Given, Then } from 'cucumber'
import request from 'supertest'

import { App } from '../../../src/app/App'

let _request: request.Test
let application: App

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route)
})

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status)
})

BeforeAll(() => {
  application = new App()
  void application.start()
})

AfterAll(() => {
  void application.stop()
})
