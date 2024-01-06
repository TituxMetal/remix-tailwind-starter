import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction, type MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwindStylesheetLink from '~/styles/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStylesheetLink },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
]

export const meta: MetaFunction = () => {
  return [
    { name: 'charset', content: 'utf-8' },
    { title: 'New Remix App' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' }
  ]
}

function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default App
