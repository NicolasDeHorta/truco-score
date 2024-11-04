import Card from '@/components/card'
import React from 'react'

const CARD_SIZE = 0.3

const Order = () => {
    return (
        <div className="w-full">
            <div className="m-6 flex flex-col gap-4">
                <div>
                    <h3 className="text-2xl font-bold">ORDEN DE LAS CARTAS:</h3>
                    <h4 className="mt-2 text-xl text-orange-400 font-bold">Piezas</h4>
                    <div className="flex flex-col">
                        <div className="italic text-gray-400 mt-2">El palo de las cartas debe ser igual al palo de la muestra <br/>(Se usará Oro para ejemplificar)</div>
                        <div className="flex flex-row gap-">
                            <Card row={1} col={2} scale={CARD_SIZE} />
                            <Card row={1} col={4} scale={CARD_SIZE} />
                            <Card row={1} col={5} scale={CARD_SIZE} />
                            <Card row={1} col={11} scale={CARD_SIZE} />
                            <Card row={1} col={10} scale={CARD_SIZE} />
                        </div>

                        <li className="italic text-gray-400 mt-2">Si una de estas cartas es la muestra, el 12 del mismo palo vale por esta carta</li>
                    </div>
                </div>
                <div>
                <h4 className="mt-2 text-xl text-orange-400 font-bold">Matas</h4>
                    <div className="flex gap-2">
                        <Card row={3} col={1} scale={CARD_SIZE} />
                        <Card row={4} col={1} scale={CARD_SIZE} />
                        <Card row={3} col={7} scale={CARD_SIZE} />
                        <Card row={1} col={7} scale={CARD_SIZE} />
                    </div>
                    <div className="italic mt-2 text-gray-400">Nota: Las piezas y las matas tienen orden, no pueden empatar </div>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <h4 className=" text-xl text-orange-400 font-bold">Comúnes</h4>
                    <div className="italic text-gray-400">Nota:  De aqui en mas, las cartas empatan o <em>empardan</em> si son del mismo numero </div>
                    <div className="flex">
                        <Card row={1} col={3} scale={CARD_SIZE} />
                        <Card row={2} col={3} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={3} col={3} scale={CARD_SIZE} className="relative left-[-60px]" />
                        <Card row={4} col={3} scale={CARD_SIZE} className="relative left-[-90px]" />
                    </div>
                    <div className="flex">
                        <Card row={2} col={2} scale={CARD_SIZE} />
                        <Card row={3} col={2} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={4} col={2} scale={CARD_SIZE} className="relative left-[-60px]" />
                    </div>
                    <div className="italic text-gray-400 -mt-4">Se excluye el 2 de la muestra</div>
                    <div className="flex mt-2">
                        <Card row={1} col={1} scale={CARD_SIZE} />
                        <Card row={2} col={1} scale={CARD_SIZE} className="relative left-[-30px]" />
                    </div>
                    <div className="italic text-gray-400 -mt-4">Se excluyen las 2 matas</div>
                    <h4 className="mt-2 text-xl text-orange-400 font-bold">Negras</h4>
                    <div className="flex"> 
                        <Card row={1} col={12} scale={CARD_SIZE} />
                        <Card row={2} col={12} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={3} col={12} scale={CARD_SIZE} className="relative left-[-60px]" />
                        <Card row={4} col={12} scale={CARD_SIZE} className="relative left-[-90px]" />
                    </div>
                    <div className="flex">
                        <Card row={2} col={11} scale={CARD_SIZE} />
                        <Card row={3} col={11} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={4} col={11} scale={CARD_SIZE} className="relative left-[-60px]" />
                    </div>
                    <div className="italic text-gray-400 -mt-4">Se excluye el 11 de la muestra</div>
                    <div className="flex">
                        <Card row={2} col={10} scale={CARD_SIZE} />
                        <Card row={3} col={10} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={4} col={10} scale={CARD_SIZE} className="relative left-[-60px]" />
                    </div>
                    <div className="italic text-gray-400 -mt-4">Se excluye el 10 de la muestra</div>
                    <h4 className="mt-2 text-xl text-orange-400 font-bold">Comúnes</h4>

                    <div className="flex">
                        <Card row={2} col={7} scale={CARD_SIZE} />
                        <Card row={4} col={7} scale={CARD_SIZE} className="relative left-[-30px]" />
                    </div> 
                    <div className="italic text-gray-400 -mt-4">Se excluyen las 2 matas</div>

                    <div className="flex">
                        <Card row={1} col={6} scale={CARD_SIZE} />
                        <Card row={2} col={6} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={3} col={6} scale={CARD_SIZE} className="relative left-[-60px]" />
                        <Card row={4} col={6} scale={CARD_SIZE} className="relative left-[-90px]" />
                    </div>
                    <div className="flex">
                        <Card row={2} col={5} scale={CARD_SIZE} />
                        <Card row={3} col={5} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={4} col={5} scale={CARD_SIZE} className="relative left-[-60px]" />
                    </div>
                    <div className="italic text-gray-400 -mt-4">Se excluye el 5 de la muestra</div>

                    <div className="flex">
                        <Card row={2} col={4} scale={CARD_SIZE} />
                        <Card row={3} col={4} scale={CARD_SIZE} className="relative left-[-30px]" />
                        <Card row={4} col={4} scale={CARD_SIZE} className="relative left-[-60px]" />
                    </div>
                    <div className="italic text-gray-400 -mt-4">Se excluye el 4 de la muestra</div>

                </div>
            </div>
        </div>
    )
}

export default Order