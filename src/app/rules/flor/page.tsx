import Card from '@/components/card'
import React from 'react'

const CARD_SIZE = 0.3

const Envido = () => {
    return (
        <div>

            <div className="m-6 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">FLOR:</h3>
                <h4 className="mt-2 text-2xl text-orange-300 font-bold">♦ Cuando tengo Flor? ♦</h4>

                <ul className="flex flex-col gap-4">
                    <li>• 3 cartas del mismo palo</li>
                    <li>• 1 Pieza + 2 del mismo palo</li>
                    <li>• 2 Piezas</li>
                    <li>• 3 Piezas.</li>
                </ul>
                <hr />

                <h4 className="mt-2 text-2xl text-orange-300 font-bold">♦ Puntos ♦</h4>
                <h4 className="mt-2 text-xl text-orange-500 font-bold">Puntajes especiales:</h4>

                <div className="font-bold">Piezas:</div>
                <p className="text-gray-400 text-sm mb-2">Suponemos Oro como muestra:</p>

                <div className="grid  grid-cols-5 gap-y-0 place-items-center">
                    <Card row={1} col={2} scale={CARD_SIZE} />
                    <Card row={1} col={4} scale={CARD_SIZE} />
                    <Card row={1} col={5} scale={CARD_SIZE} />
                    <Card row={1} col={11} scale={CARD_SIZE} />
                    <Card row={1} col={10} scale={CARD_SIZE} />
                    <div className="m-auto my-2">30</div>
                    <div className="m-auto my-2">29</div>
                    <div className="m-auto my-2">28</div>
                    <div className="m-auto my-2">27</div>
                    <div className="m-auto my-2">27</div>
                </div>

                <div className="font-bold">Negras:</div>
                <p className="text-gray-400 text-sm mb-2">Todos los reyes, caballos y sotas que no sean piezas, valen 0:</p>

                <div className="grid grid-cols-3 place-items-center">
                    <Card row={2} col={12} scale={CARD_SIZE} />
                    <Card row={3} col={11} scale={CARD_SIZE} />
                    <Card row={4} col={10} scale={CARD_SIZE} />
                    <div className="m-auto my-2">0</div>
                    <div className="m-auto my-2">0</div>
                    <div className="m-auto my-2">0</div>
                </div>

                <h4 className="mt-2 text-xl text-orange-500 font-bold">Como contar:</h4>

                <div className="font-bold">SIN PIEZAS:</div>

                <ul className="flex flex-col gap-4">
                    <li>• <span className="text-orange-500">Todas las cartas del mismo palo:</span> <br />Se suman los puntajes + 20</li>
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm mb-2">Ejemplo:</p>
                        <div className="flex">
                            <Card row={2} col={2} scale={CARD_SIZE} />
                            <Card row={2} col={10} scale={CARD_SIZE} className="-mx-5" />
                            <Card row={2} col={7} scale={CARD_SIZE} />
                        </div>
                        <div className="text-gray-400 text-sm mt-2">2 + 0 + 7 ( +20),  29 puntos</div>
                    </div>
                </ul>


                <hr className="border-gray-400 mb-8" />
                <div className="font-bold">CON PIEZAS:</div>
                <ul className="flex flex-col gap-4">
                    <li>• <span className="text-orange-500">Una pieza:</span> <br />Pieza + Suma de los demas puntajes</li>
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm mb-2">Ejemplo:</p>
                        <div className="flex">
                            <Card row={1} col={5} scale={CARD_SIZE} />
                            <Card row={3} col={4} scale={CARD_SIZE} className="-mx-5" />
                            <Card row={3} col={2} scale={CARD_SIZE} />
                        </div>
                        <div className="text-gray-400 text-sm mt-2">28 (pieza) + 4 + 2 = 34 puntos</div>
                    </div>
                    <li>• <span className="text-orange-500">Dos piezas:</span> <br />Pieza + (Pieza sin 20) + Suma de la carta restante</li>
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm mb-2">Ejemplo:</p>
                        <div className="flex">
                            <Card row={1} col={4} scale={CARD_SIZE} />
                            <Card row={1} col={5} scale={CARD_SIZE} className="-mx-5" />
                            <Card row={3} col={2} scale={CARD_SIZE} />
                        </div>
                        <div className="text-gray-400 text-sm mt-2">29 (Pieza) + 8 (Pieza) + 2 = 39 puntos</div>
                        <div className="text-gray-400 text-sm mt-2">Cuando se tiene mas de una pieza, solo una se cuenta con el 20, las demas se cuentan con el resto (puntos-20)</div>
                        <div className="text-gray-400 text-sm mt-2">En este caso el 4 se conto como 29, entonces el 5 valdria 28 pero se cuenta como 8</div>
                    </div>
                    <li>• <span className="text-orange-500">Tres piezas:</span> <br />Pieza + (Pieza sin 20) + (Pieza sin 20)</li>
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm mb-2">Ejemplo:</p>
                        <div className="flex">
                            <Card row={1} col={2} scale={CARD_SIZE} />
                            <Card row={1} col={4} scale={CARD_SIZE} className="-mx-5" />
                            <Card row={1} col={5} scale={CARD_SIZE} />
                        </div>
                        <div className="text-gray-400 text-sm mt-2">30 (Pieza) + 9 (Pieza) + 8 (Pieza) = 47 puntos</div>
                        <div className="text-gray-400 text-sm mt-2">Al igual que en el caso de dos piezas, solo la primer pieza cuenta con 20, el resto con el valor restante</div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Envido