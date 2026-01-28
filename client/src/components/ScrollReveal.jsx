import React, { useState, useEffect, useRef } from 'react'

const ScrollReveal = ({
    children,
    animation = 'fade-up',
    delay = 0,
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                }
            },
            { threshold }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [delay, threshold])

    return (
        <div
            ref={elementRef}
            className={`scroll-reveal scroll-reveal--${animation} ${isVisible ? 'scroll-reveal--visible' : ''}`}
        >
            {children}
        </div>
    )
}

export default ScrollReveal
