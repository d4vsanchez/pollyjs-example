import path from 'path'
import fetch, { Request, Response } from 'node-fetch'
import { Polly } from '@pollyjs/core'
import NodeHttpAdapter from '@pollyjs/adapter-node-http'
import FSPersister from '@pollyjs/persister-fs'

import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

global.fetch = fetch;
global.Request = Request;
global.Response = Response;

Polly.register(NodeHttpAdapter)
Polly.register(FSPersister)

describe('Home', () => {
  const polly = new Polly('Home', {
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, './__recordings__')
      }
    }
  })

  it('renders a heading', async () => {
    render(<Home />)

    const asdf = await screen.findByRole('img');
    expect(asdf).toBeInTheDocument();

    await polly.stop();
  })
})
