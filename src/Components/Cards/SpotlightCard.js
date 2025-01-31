import { cn } from '../../Utils/utils';
import React, { useRef, useState } from 'react';

export default function SpotlightCard({ achievement }) {
    const boxWrapper = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = React.useState({ x: null, y: null });

    React.useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        let { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        setOverlayColor({ x, y });
    };

    return (
        <div className="relative bg-gradient-to-r from-blue-950 to-custom-radial p-4 rounded-md">
            <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={boxWrapper}
                className={cn(
                    'group relative rounded-lg p-[2px] bg-[#eeeeee15] overflow-hidden w-fit mx-auto'
                )}
            >
                {isHovered && (
                    <div
                        className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100 transition duration-300"
                        style={{
                            background: `
                                radial-gradient(
                                    250px circle at ${overlayColor.x}px ${overlayColor.y}px,
                                    rgba(255, 255, 255, 0.137),
                                    transparent 80%
                                )
                            `,
                        }}
                    />
                )}

                <div
                    className="absolute inset-0 z-0 bg-fixed rounded-lg"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff6e 0%,transparent 20%,transparent) fixed`,
                    }}
                ></div>

                <div className="relative text-center z-10 p-4 rounded-lg w-full bg-black h-full mx-auto">
                    <img
                        src={achievement.image}
                        alt="Achievement"
                        className="w-full object-fit rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
