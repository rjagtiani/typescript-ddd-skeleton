import { Server } from './server'

export class App {
  server?: Server

  async start (): Promise<void> {
    let port = process.env.PORT ?? '3000'

    if(process.env.NODE_ENV === 'test'){
      port = '3001'
    }

    this.server = new Server(port)

    await this.server.listen()
  }

  get httpServer (): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer()
  }

  async stop (): Promise<void> {
    return await this.server?.stop()
  }
}
