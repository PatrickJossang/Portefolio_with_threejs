import React from "react";
import Image from "next/image";
import Link from "next/link";

function twoD() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-indigo-600 text-white py-10">
        <h1 className="text-6xl font-bold">Patrick Jøssang</h1>
        <p className="mt-6 mb-8 text-lg">Hei, Jeg er Patrick Jøssang jeg liker å lære meg nye ting og utforske hva som er muligt</p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold bg-white hover:bg-gray-300 text-indigo-600 hover:text-indigo-900 rounded-lg shadow-lg">
            Kontakt meg
          </button>
          <button className="px-8 py-3 m-2 text-lg font-semibold bg-indigo-600 hover:bg-indigo-800 text-white hover:text-white rounded-lg shadow-lg">
            Se mer om meg
          </button>
        </div>
      </div>
      <div className="my-10 w-5/6 mx-auto">
      </div>
      <div className="flex flex-col items-center py-10">
        <div className="text-indigo-600 font-bold text-4xl">
          ASCII ART
        </div>
        <pre className="my-10 bg-indigo-200 p-10 rounded-lg">
          {`
      /\\ 
     ( o.o )
      > ^ < 
          `}
        </pre>
      </div>
    </div>
  )
}

export default twoD;
