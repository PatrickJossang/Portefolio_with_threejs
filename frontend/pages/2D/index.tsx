import React from 'react'

function twoD() {
  return (
   <>
   <section>
	<div className="dark:dark:bg-violet-400">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:dark:text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:dark:text-gray-900">Patrick Jøssang</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:dark:text-gray-900">Hei, Jeg er Patrick Jøssang jeg liker å lære meg nye ting og utforske hva som er muligt </p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:dark:bg-gray-800 dark:dark:text-gray-50">Kontakt meg</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:dark:border-gray-700 dark:dark:text-gray-900">Se mer om meg</button>
			</div>
		</div>
	</div>
	<img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:dark:bg-gray-500" />
</section>
   </>

  )
}

export default twoD