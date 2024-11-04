import Card from '@/components/card'
import React from 'react'

const CARD_SIZE = 0.3

const Envido = () => {
    return (
        <div>

            <div className="m-6 flex flex-col gap-4">
                <h3 className="text-2xl font-bold">ENVIDO:</h3>
                <h4 className="mt-2 text-2xl text-orange-300 font-bold">♦ General ♦</h4>

                <ul className="flex flex-col gap-4">
                    <li>• El envido se juega en la primer mano</li>
                    <li>• Si ya se jugó una carta, ese jugador no puede decir envido, pero si npm run dev<em>Querer</em></li>
                    <li>• Si dos jugadores empatan, gana el <em>mano</em></li>
                    <li>• Si un jugador pierde y no dijo sus puntos, no es necesario decirlo, puede simplemente decir: <em>Son buenas</em>.</li>
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

                <div className="font-bold">SIN PIEZA:</div>

                <ul className="flex flex-col gap-4">
                    <li>• <span className="text-orange-500">Todas las cartas de diferente palo:</span> <br />cuenta solo la mas alta</li>
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm mb-2">Ejemplo:</p>
                        <div className="flex">
                            <Card row={2} col={2} scale={CARD_SIZE} />
                            <Card row={3} col={6} scale={CARD_SIZE} className="-mx-5" />
                            <Card row={4} col={1} scale={CARD_SIZE} />
                        </div>
                        <div className="text-gray-400 text-sm mt-2">6 puntos</div>
                    </div>
                    <hr className="border-gray-600" />

                    <li>• <span className="text-orange-500">2 cartas del mismo palo:</span> <br />20 + la suma de sus puntos</li>
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm mb-2">Ejemplo:</p>
                        <div className="flex">
                            <Card row={2} col={2} scale={CARD_SIZE} />
                            <Card row={2} col={6} scale={CARD_SIZE} className="-mx-5" />
                            <Card row={4} col={1} scale={CARD_SIZE} />
                        </div>
                        <div className="text-gray-400 text-sm mt-2">2 + 6 + 20 = 28 puntos</div>
                    </div>
                    <hr className="border-gray-600" />
                    <li>• <span className="text-orange-500">3 cartas del mismo palo:</span> <br />Se debe decir <em>Flor</em>, ya que el envido no es aplicable</li>
                </ul>


                <hr className="border-gray-400 mb-8" />
                <div className="font-bold">CON PIEZA:</div>
                <ul className="flex flex-col gap-4">
                    <li>• <span className="text-orange-500">Una pieza:</span> <br />Pieza + carta con puntaje mas alto</li>
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-sm mb-2">Ejemplo:</p>
                        <div className="flex">
                            <Card row={1} col={4} scale={CARD_SIZE} />
                            <Card row={3} col={6} scale={CARD_SIZE} className="-mx-5" />
                            <Card row={4} col={1} scale={CARD_SIZE} />
                        </div>
                        <div className="text-gray-400 text-sm mt-2">el 4 es pieza, el 6 es mayor al 1 en puntaje <br />
                            29 (Pieza) + 6 = 35 puntos</div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Envido