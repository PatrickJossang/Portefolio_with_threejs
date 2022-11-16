import Link from 'next/link'
import React from 'react'

function dir() {
  return (
    <section className="bg-violet-300 text-gray-100">
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
      <h1 className="text-4xl font-bold leading-none sm:text-5xl">Hei, jeg heter <span className="text-violet-700">Patrick </span>
      <span className="mt-4 text-4xl sm:text-5">Jeg er en frontend utvikler som elsker å utforske.</span></h1>
      <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
      <div className="flex flex-wrap justify-center">
        <Link href="/3D">
        <button className="px-8 py-3 m-2 text-lg font-semibold rounded text-white bg-violet-800 hover:bg-transparent hover:border border-white"> 3D </button>
        </Link>
        <Link href="/2D">
        <button className="px-8 py-3 m-2 text-lg font-semibold rounded text-white bg-violet-800 hover:bg-transparent hover:border border-white"> 2D </button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default dir