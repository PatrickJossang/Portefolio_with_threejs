import Image from "next/image";
import Portfolio from "/public/images/Portfolio.png"
import Link from "next/link";

function TwoD() {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-6 py-12 mx-auto lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center justify-center w-full text-center lg:max-w-md lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Ac mattis
              <span className="dark:text-violet-400">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                Suspendisse
              </a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">
                Malesuada
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image src={Portfolio} alt="Portfolio" className="object-contain max-w-sm" width={500} height={500} />
          </div>
        </div>
      </section>
      <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container mx-auto flex flex-col p-6">
		<h2 className="py-4 text-3xl font-bold text-center">Temporibus elit</h2>
		<div className="divide-y divide-gray-700">
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
						<path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
						<path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
						<path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
					</svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:dark:text-violet-400">Design - 2D</span>
					<span className="text-xl font-bold md:text-2xl">Adobe</span>
					<span className="mt-4 dark:dark:text-gray-300"> jeg har brukt adobe pakken for å lære om releklame, logo design og hva prensipper man bør bruke når man holder på å lage plakater og etc. Jeg har brukt Photoshop, Ilurtrator, Premier Pro, Indesign og XD.
          Jeg har holdt på me videoer og appdesign i tillegg men det holder dem samme prinsipene </span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
						<path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
						<path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
					</svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:dark:text-violet-400">Design - 3D</span>
					<span className="text-xl font-bold md:text-2xl">Blender / Unreal engin 5</span>
					<span className="mt-4 dark:dark:text-gray-300">Jeg har laget ulike modeler og scener i blender og har også brukt modelene i threeJS sammen med NEXTjs. jeg har laget et par spill i Unreal engin 5 hvor at jeg har jobbet med node og design jeg har ikke noen producksjonsklare spill men har lært veldig mye i prosessen. </span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
						<path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
						<path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
					</svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:dark:text-violet-400">Kunsig intligens - KI</span>
					<span className="text-xl font-bold md:text-2xl">Python / google</span>
					<span className="mt-4 dark:dark:bg-gray-800 dark:dark:text-gray-300">Har holdt på me torch og microsoft in KI løysning. Jeg har laget en Chatbot med en lett frontend. jeg har også brukt google sin theaheble mahine hvor jeg har brukt det for å lage en keras fil som jeg har brukt openCV for å lage bilde gjentjenelse </span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
						<polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
						<polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
						<polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
					</svg>
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:dark:text-violet-400">Koding - FullStack</span>
					<span className="text-xl font-bold md:text-2xl">React</span>
					<span className="mt-4 dark:dark:text-gray-300">Jeg har lært meg mest React utover året men er også veldig godt kjent med TSQL, visual basic, C#, python og tailwind. kan også litt av typescript, html, css, bootstrap og scss</span>
				</div>
        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracking-wider uppercase dark:dark:text-violet-400">Hacking - Web/Device</span>
					<span className="text-xl font-bold md:text-2xl"> / google</span>
					<span className="mt-4 dark:dark:bg-gray-800 dark:dark:text-gray-300">Har holdt på me torch og microsoft in KI løysning. Jeg har laget en Chatbot med en lett frontend. jeg har også brukt google sin theaheble mahine hvor jeg har brukt det for å lage en keras fil som jeg har brukt openCV for å lage bilde gjentjenelse </span>
				</div>
			</div>
		</div>
	</div>
</section>
    </>
  );
}

export default TwoD;
