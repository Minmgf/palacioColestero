import React from 'react'
import Food from '../../../public/food.png'
import Image from 'next/image'
import SectionHeaders from './SectionHeaders'

const AboutUs = () => {
    return (
        <div id='info' className='max-w-6xl mx-auto text-white font-lilitaOne '>
            <div className="[grid-area:info] flex flex-col items-end">

                <h1 className='pt-24 text-3xl text-right'>Quienes Somos!</h1>

                <p className='w-9/12 pt-12 pr-12 text-2xl text-center'>
                    Nuestra historia es tan única como nuestros sabores. Fundada por un chef irreverente y un amante del humor absurdo, nuestra tienda es el resultado de un experimento culinario que salió completamente de control. Imagina a un chef lanzando papas fritas por los aires y riendo histéricamente mientras monta una hamburguesa gigante en el centro de la cocina. Esa es más o menos la escena que dio origen a "El Palacio del Colesterol".
                </p>

            </div>
            <div className="[grid-area:imgInfo]">

                <Image src={Food} alt="alt" className='px-24 py-24'/>


            </div>
        </div>
    )
}

export default AboutUs
