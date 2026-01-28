import React, { useState, useEffect } from 'react'

const TypingText = ({
    text,
    speed = 100,
    delay = 0,
    className = '',
    onComplete = () => { }
}) => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, currentIndex === 0 ? delay : speed)

            return () => clearTimeout(timeout)
        } else if (!isComplete) {
            setIsComplete(true)
            onComplete()
        }
    }, [currentIndex, text, speed, delay, isComplete, onComplete])

    return (
        <span className={className}>
            {displayedText}
            <span className="typing-cursor">{!isComplete ? '|' : ''}</span>
        </span>
    )
}

export default TypingText
