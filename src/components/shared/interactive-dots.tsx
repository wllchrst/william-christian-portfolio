"use client"

import { useEffect, useRef, useState } from "react"

interface Dot {
    x: number
    y: number
    baseX: number
    baseY: number
    size: number
}

export default function InteractiveDots() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [dots, setDots] = useState<Dot[]>([])
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Create grid of dots
        const spacing = 60
        const dotsArray: Dot[] = []

        for (let x = spacing; x < window.innerWidth; x += spacing) {
            for (let y = spacing; y < window.innerHeight; y += spacing) {
                dotsArray.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: 4,
                })
            }
        }

        setDots(dotsArray)

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        // Animate dots based on mouse position
        setDots((prevDots) =>
            prevDots.map((dot) => {
                const distance = Math.sqrt(Math.pow(mousePos.x - dot.baseX, 2) + Math.pow(mousePos.y - dot.baseY, 2))

                const maxDistance = 200
                const influence = Math.max(0, 1 - distance / maxDistance)

                const offsetX = (mousePos.x - dot.baseX) * influence * 0.15
                const offsetY = (mousePos.y - dot.baseY) * influence * 0.15

                return {
                    ...dot,
                    x: dot.baseX + offsetX,
                    y: dot.baseY + offsetY,
                    size: 4 + influence * 6,
                }
            }),
        )
    }, [mousePos])

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 bg-white overflow-hidden">
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="absolute rounded-full bg-black/40 transition-all duration-100 ease-out shadow-sm"
                    style={{
                        left: `${dot.x}px`,
                        top: `${dot.y}px`,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </div>
    )
}
