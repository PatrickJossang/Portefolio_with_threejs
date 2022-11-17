import React from 'react';
import Image from 'next/image';

import bilde from '../../public/images/bilde.png'

function about() {
    return (
            <section className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
                <div className="container">
                    <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="items-center justify-between overflow-hidden border lg:flex">
                                    <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                                        <span className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-black">
                                            Om meg
                                        </span>
                                        <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                                            Patrick Jøssang
                                        </h2>
                                        <p className="mb-9 text-base leading-relaxed text-body-color">
                                            Jeg sikter for en god og effektiv løsning for deg og din bedrift.
                                            Jeg har erfaring med ulike bransjer,
                                            det inkluderer
                                            <span className="text-white">-</span>
                                            <span  className="underline decoration-violet-800 underline-offset-1 ">camping,</span>
                                            <span className="text-white">-</span>
                                            <span className="underline decoration-violet-800 underline-offset-1">buttik,</span>
                                            <span className="text-white">-</span>
                                            <span  className="underline decoration-violet-800 underline-offset-1">gård</span>
                                            <span className="text-white">-</span>
                                            og
                                            <span className="text-white">-</span>
                                            <span className="underline decoration-violet-800 underline-offset-1"> IT-firma,</span>
                                            .
                                        </p>
                                        <p className="mb-9 text-base leading-relaxed text-body-color">
                                            Mitt fokus nå er å komme mer i dybden på webutvikling og SQL database.
                                            Jeg har fått god hjelp av Omega 365 som har gitt meg en god start på SQL.
                                            Hjertet har alltid vært i webutvikling, og jeg har alltid hatt en stor interesse for å lære mer om dette.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="relative z-10 inline-block">
                                            <Image
                                                src={bilde}
                                                alt="Picture of me"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default about