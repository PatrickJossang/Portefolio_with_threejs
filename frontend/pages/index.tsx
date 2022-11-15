import React from 'react'

function dir() {
  return (
    <div>
      <div className="bg-gray-900 text-white w-full ">
        <div
          className=" w-full container py-32 lg:flex lg:h-screen lg:items-center "
        >
          <div className=" text-center container ">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent container w-full sm:text-5xl"
            >
              Portifolio who extends expectations to 3D and 2D.

              <span className="sm:block container w-full "> Only optimized for PC. </span>
            </h1>

            <p className=" mt-8 container w-full sm:text-xl sm:leading-relaxed ">
              hello my name is Patrick i made this website. fair warning there are still bugs but should work for normal activety.
            </p>

            <div className="mt-8 flex container justify-center gap-4 ">
              <a
                className="block container w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/2D"
              >
                2D
              </a>

              <a
                className="block container w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/3D"
              >
                3D
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default dir