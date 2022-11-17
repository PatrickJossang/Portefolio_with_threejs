import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Modal from "../components/Modal";

function about() {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    return (
        <Fragment>
            <section
                id="about"
                className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
            >
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
                                            <span onClick={() => setShowModal(true)} className="underline decoration-violet-800 underline-offset-1">camping,</span>
                                            <span onClick={() => setShowModal2(true)} className="underline decoration-violet-800 underline-offset-1">buttikk,</span>
                                            <span onClick={() => setShowModal3(true)} className="underline decoration-violet-800 underline-offset-1">gård</span>
                                            og
                                            <span className="underline decoration-violet-800 underline-offset-1">IT-firma,</span>
                                            .
                                        </p>
                                        <p className="mb-9 text-base leading-relaxed text-body-color">
                                            Mitt fokus nå er å komme mer i dybden på webutvikling og SQL database.
                                            Jeg har fått god hjelp av Omega 365 som har gitt meg en god start på SQL.
                                            Hjertet har alltid vært i webutvikling, og jeg har alltid hatt en stor interesse for å lære mer om dette.
                                        </p>
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <div className="relative z-10 inline-block">
                                            <Image
                                                src="/../public/img/PI.PNG"
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
            <Modal isViseble={showModal} onClose={() => setShowModal(false)}>
                <h3 className="text-center text-3xl">hello world</h3>
                <p>In pretium malesuada maximus. Lorem ipsum do lor sit amet,
                    consectetur adipiscing elit. Ut sed odio id felis posuere
                    volutpat.
                    Integer scelerisque tincidunt mi, vel aliquam nisl pretium
                    vitae. In
                    efficitur et libero eu dapibus. Maecenas eu aliquam purus.
                    Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur
                    ridiculus mus. Integer rutrum augue sit amet neque
                    pellentesque
                    pharetra. Phasellus mollis nibh nec mi ultrices dignissim.
                    Sed
                    luctus sed nulla ac maximus. Vestibulum egestas dolor
                    tellus, non
                    molestie liqula iaculis ac.
                </p>
            </Modal>
            <Modal isViseble={showModal2} onClose={() => setShowModa2l(false)}>

            </Modal>
            <Modal isViseble={showModal3} onClose={() => setShowModal3(false)}>

            </Modal>
        </Fragment>
    )
}

export default about