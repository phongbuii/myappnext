'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function DynamicImage() {
    const [size, setSize] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setSize(20) // or whatever calculation you need
        setIsLoaded(true)
    }, [])

    if (!isLoaded) {
        return null // or a loading placeholder
    }

    return (
        <Image
            src="/images/aa.jpeg"
            alt="falling"
            width={size}
            height={size}
        />
    )
}