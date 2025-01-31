import React from 'react';

function ImageMask({ imageSrc }) {
    return (
        <section className="gap-2 rounded-2xl p-5">
            <figure className="relative">
                <img
                    src={imageSrc}
                    alt="Masked"
                    className="w-full h-full object-contain lg:object-cover aspect-square"
                    style={{
                        WebkitMaskImage: "url('/Asset/splash-center.svg')",
                        maskImage: "url('/Asset/splash-center.svg')",
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                    }}
                />
            </figure>
        </section>
    );
}

export default ImageMask;