'use client';
import React, { useRef } from 'react';
import { AnimatedBeam, Circle } from './AnimatedBeam';
import { FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { SiExpress, SiMongodb } from 'react-icons/si';

export default function Index() {
    const containerRef = useRef(null);
    const divMongoRef = useRef(null);
    const divExpressRef = useRef(null);
    const divNodeRef = useRef(null);
    const divReactRef = useRef(null);
    const divJsRef = useRef(null);
    const divGitRef = useRef(null);
    const divExpertiseRef = useRef(null); // Central Expertise Node
    const divBootstrapRef = useRef(null);
    const divTailwindRef = useRef(null);
    const divNpmRef = useRef(null);
    const divFirebaseRef = useRef(null);

    return (
        <div
            className="relative flex w-full max-w-6xl lg:h-[500px] mx-auto items-center justify-center 
            overflow-hidden rounded-lg bg-background p-10 "
            ref={containerRef}
        >
            {/* Icon Grid */}
            <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
                {/* Top Row */}
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={divMongoRef} className="text-green-600 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <SiMongodb />
                    </Circle>
                    <Circle ref={divExpressRef} className="text-gray-600 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <SiExpress />
                    </Circle>
                    <Circle ref={divNodeRef} className="text-green-500 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <FaNodeJs />
                    </Circle>
                    <Circle ref={divReactRef} className="text-cyan-400 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <FaReact />
                    </Circle>
                </div>

                {/* Middle Row (Main Expertise) */}
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={divJsRef} className="text-yellow-500 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <IoLogoJavascript />
                    </Circle>
                    <Circle ref={divExpertiseRef} className="text-gray-800 text-xl lg:text-3xl lg:w-32 lg:h-32 w-24 h-24 font-bold bg-white shadow-md">
                        Expertise
                    </Circle>
                    <Circle ref={divGitRef} className="text-orange-500 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <FaGitAlt />
                    </Circle>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={divBootstrapRef} className="text-purple-500 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <FaBootstrap />
                    </Circle>
                    <Circle ref={divTailwindRef} className="text-teal-400 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <RiTailwindCssFill />
                    </Circle>
                    <Circle ref={divNpmRef} className="text-red-500 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <FaNpm />
                    </Circle>
                    <Circle ref={divFirebaseRef} className="text-yellow-400 text-3xl lg:w-24 lg:h-24 lg:text-5xl">
                        <IoLogoFirebase />
                    </Circle>
                </div>
            </div>

            {/* Animated Beams - Connecting Icons to the Central Expertise */}
            <AnimatedBeam containerRef={containerRef} fromRef={divMongoRef} toRef={divExpertiseRef} curvature={-75} endYOffset={-10} dotted gradientStartColor="#4DB33D" gradientStopColor="#67AEFF" />
            <AnimatedBeam containerRef={containerRef} fromRef={divExpressRef} toRef={divExpertiseRef} curvature={-20} dotted gradientStartColor="#888888" gradientStopColor="#444444" />
            <AnimatedBeam containerRef={containerRef} fromRef={divNodeRef} toRef={divExpertiseRef} curvature={-75} dotted gradientStartColor="#339933" gradientStopColor="#00AC47" />
            <AnimatedBeam containerRef={containerRef} fromRef={divReactRef} toRef={divExpertiseRef} curvature={-30} dotted gradientStartColor="#61DAFB" gradientStopColor="#5B60FF" />
            <AnimatedBeam containerRef={containerRef} fromRef={divJsRef} toRef={divExpertiseRef} curvature={-20} dotted gradientStartColor="#F7DF1E" gradientStopColor="#FFBA00" />
            <AnimatedBeam containerRef={containerRef} fromRef={divGitRef} toRef={divExpertiseRef} curvature={50} dotted gradientStartColor="#F05032" gradientStopColor="#FF7043" />
            <AnimatedBeam containerRef={containerRef} fromRef={divBootstrapRef} toRef={divExpertiseRef} curvature={80} dotted gradientStartColor="#563D7C" gradientStopColor="#9C27B0" />
            <AnimatedBeam containerRef={containerRef} fromRef={divTailwindRef} toRef={divExpertiseRef} curvature={50} dotted gradientStartColor="#06B6D4" gradientStopColor="#22D3EE" />
            <AnimatedBeam containerRef={containerRef} fromRef={divNpmRef} toRef={divExpertiseRef} curvature={40} dotted gradientStartColor="#CB3837" gradientStopColor="#FF5722" />
            <AnimatedBeam containerRef={containerRef} fromRef={divFirebaseRef} toRef={divExpertiseRef} curvature={50} dotted gradientStartColor="#FFCA28" gradientStopColor="#FFECB3" />
        </div>
    );
}
