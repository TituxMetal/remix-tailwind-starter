import { Link } from '@remix-run/react'

function Index() {
  const linkClass = 'transition-all duration-300 opacity-75 hover:opacity-100 hover:text-blue-400'
  return (
    <main className='m-auto h-screen w-full max-w-screen-md bg-zinc-800 py-16 px-4'>
      <h1 className='mb-6 text-center text-4xl font-light'>Welcome to Remix + Tailwindcss</h1>
      <p>
        <Link to='/anything' className={linkClass}>
          Some other route
        </Link>
      </p>
    </main>
  )
}

export default Index
