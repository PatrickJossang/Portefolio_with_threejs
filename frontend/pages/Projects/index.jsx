import React from 'react'
import Link from 'next/link'
function Projects() {
  return (
    <div>
<section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col mx-auto lg:flex-row">
		<div className="w-full lg:w-1/3 bg-center bg-cover"><img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 bg-gray-500 aspect-video" /></div>
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-violet-400">
				<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
			</svg>
			<h2 className="text-3xl font-semibold leading-none">Prosjekter </h2>
			<p className="mt-4 mb-8 text-sm">Mine prosjekter stekket ut over 2 år av skolegang og det jeg har gjort på fritiden</p>
			<button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900">Get started</button>
		</div>
	</div>
</section>
<section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Game design</span>
				<h3 className="text-3xl font-bold">Eventyr spill</h3>
				<p className="my-6 text-gray-400">Spillet er basert på fantesy og midelalderen. Har laget det i Unreal engin 5. Jeg brukte hovedsakeligt kun blueprints men har skreve litt C++</p>
				<button type="button" className="self-start">Se nærmere</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Frontend</span>
				<h3 className="text-3xl font-bold">Crypto demonstrasjon</h3>
				<p className="my-6 text-gray-400">Jeg har laget et prosjekt som skal fremstille hvordan Crypto fungerer. Jeg fikk go hjelp av sajvee fra yt for å forstå det selv og hvordan en sånn nettside ser ut</p>
				<button className="self-start ">Se nærmere</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Video</span>
				<h3 className="text-3xl font-bold">Premier pro</h3>
				<p className="my-6 text-gray-400"> Jeg har laget et vignett som skal representere krigen i Ukrina som en serie.</p>
				<button type="button" className="self-start">Se nærmere</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Visual basic</span>
				<h3 className="text-3xl font-bold">Passord beskytet bondesjakk</h3>
				<p className="my-6 text-gray-400">Jeg gjore dette prosjektet skolebasert. Jeg har blitt veldi komfertabel å jobbe i visual basic etter vi laget litt ulike ting inforbi det</p>
				<button type="button" className="self-start">Se nærmere</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Noe her</span>
				<h3 className="text-3xl font-bold">Hva det er</h3>
				<p className="my-6 text-gray-400">en kort beskrivelse rund prosjektert der jeg viser verdiene med det.</p>
				<button type="button" className="self-start">Se nærmere</button>
			</div>
		</div>
	</div>
</section>
  </div>
  )
}

export default Projects