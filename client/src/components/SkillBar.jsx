import React, { useState, useEffect, useRef } from 'react'

const SkillBar = ({ skill, level, category }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [animatedLevel, setAnimatedLevel] = useState(0)
    const barRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (barRef.current) {
            observer.observe(barRef.current)
        }

        return () => {
            if (barRef.current) {
                observer.unobserve(barRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (isVisible) {
            let start = 0
            const increment = level / 50
            const timer = setInterval(() => {
                start += increment
                if (start >= level) {
                    setAnimatedLevel(level)
                    clearInterval(timer)
                } else {
                    setAnimatedLevel(Math.floor(start))
                }
            }, 20)

            return () => clearInterval(timer)
        }
    }, [isVisible, level])

    return (
        <div ref={barRef} className="skill-bar-container">
            <div className="skill-bar-header">
                <span className="skill-name">{skill}</span>
                <span className="skill-percentage">{animatedLevel}%</span>
            </div>
            <div className="skill-bar-track">
                <div
                    className={`skill-bar-fill skill-bar-fill--${category}`}
                    style={{ width: `${animatedLevel}%` }}
                >
                    <div className="skill-bar-glow"></div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar
