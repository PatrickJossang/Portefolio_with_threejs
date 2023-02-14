import Link from 'next/link';
import React from 'react';

function LandingPage() {
  return (
    <section className="bg-violet-800 text-gray-100 py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-10 md:px-32 lg:px-32 xl:max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Hei, jeg heter <span className="text-violet-400">Patrick</span>
          </h1>
          <span className="mt-4 text-4xl sm:text-5xl">
            Jeg er en frontend utvikler som elsker å utforske.
          </span>
          <p className="px-8 mt-8 mb-12 text-lg">
            Jeg har prøvd å lage en portefolio i 2d og 3d, uheldigvis er 3d kun optimalisert for <span className="underline underline-offset-1 decoration-violet-400">PC</span> uten <span className="underline underline-offset-1 decoration-violet-400">ultrawide</span>!
          </p>
          <div className="flex justify-center">
            <Link href="/3D" passHref>
              <a className="px-8 py-3 m-2 text-lg font-semibold rounded text-white bg-violet-400 hover:bg-transparent hover:shadow-inner hover:text-violet-800 hover:subpixel-antialiased hover:shadow-violet-400 hover:border border border-violet-400">
                3D
              </a>
            </Link>
            <Link href="/2D" passHref>
              <a className="px-8 py-3 m-2 text-lg font-semibold rounded text-white bg-violet-400 hover:bg-transparent hover:shadow-inner hover:text-violet-800 hover:subpixel-antialiased hover:shadow-violet-400 hover:border border border-violet-400">
                2D
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage;
