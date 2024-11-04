import type { Metadata } from 'next'
import Link from 'next/link'
import IconArrowLeft from "@/assets/icon-arrow-left.svg"
import Image from 'next/image'


export const metadata: Metadata = {
    title: 'Truco Rules',
    description: 'Reglas del Truco',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative flex flex-col max-w-sm mx-auto w-full h-full justify-start">
            <h1 className="text-orange-600 text-3xl font-bold my-8 w-full text-center"><Link href="/rules">Reglas</Link></h1>
            <Link href="/" className="text-gray-400 font-bold absolute top-2 left-2 flex gap-2"><Image src={IconArrowLeft} alt="arrow" height={20} width={20} /> Puntaje</Link>
            {children}
        </div>
    )
}
