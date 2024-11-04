import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

const CARD_SIZE = 0.3

const Rules = () => {
    return (
        <div className="flex text-white gap-8 flex-col relative max-w-sm h-full p-4">
            {/* <Link href="/rules/general" className="">• General</Link> */}
            {/* <Link href="/rules/truco" className="">• Truco, Re-truco, Vale 4</Link> */}
            <Link href="/rules/order" className="" >• Orden de las cartas</Link>
            <Link href="/rules/envido" className="">• Envido</Link>
            <Link href="/rules/flor" className="">• Flor</Link>
        </div>
    )
}

export default Rules