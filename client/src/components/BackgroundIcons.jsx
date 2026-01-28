import React from 'react'
import '../style.css'

const icons = [
    { icon: '🚀', delay: '0s', duration: '15s', left: '10%', top: '20%' },
    { icon: '⚛️', delay: '2s', duration: '18s', left: '85%', top: '15%' },
    { icon: '🐘', delay: '5s', duration: '20s', left: '70%', top: '60%' },
    { icon: '🐧', delay: '1s', duration: '22s', left: '20%', top: '75%' },
    { icon: '🌐', delay: '7s', duration: '25s', left: '50%', top: '40%' },
    { icon: '💾', delay: '3s', duration: '17s', left: '5%', top: '50%' },
    { icon: '⚡', delay: '6s', duration: '19s', left: '90%', top: '80%' },
    { icon: '☁️', delay: '4s', duration: '21s', left: '30%', top: '10%' },
    { icon: '🐍', delay: '8s', duration: '23s', left: '60%', top: '25%' },
    { icon: '☕', delay: '9s', duration: '24s', left: '80%', top: '50%' }
]

const BackgroundIcons = () => {
    return (
        <div className="background-icons">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className="floating-icon"
                    style={{
                        left: item.left,
                        top: item.top,
                        animationDelay: item.delay,
                        animationDuration: item.duration
                    }}
                >
                    {item.icon}
                </div>
            ))}
        </div>
    )
}

export default BackgroundIcons
