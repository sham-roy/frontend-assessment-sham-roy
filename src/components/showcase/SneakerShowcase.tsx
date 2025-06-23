"use client";

import { useState } from 'react';
import { sneakers } from '@/data/sneakers';
import ProductSlice from './ProductSlice';

const SneakerShowcase = () => {

    const [activeId, setActiveId] = useState<string | null>(null);

    const handleMouseLeave = () => {
        setActiveId(null);
    };

    return (
        <main
            className="flex flex-col md:flex-row h-screen w-full items-stretch overflow-hidden"
            onMouseLeave={handleMouseLeave}
        >
            {sneakers.map((sneaker) => (
                <ProductSlice
                    key={sneaker.id}
                    sneaker={sneaker}
                    state={
                        activeId === null ? 'neutral' :
                            activeId === sneaker.id ? 'active' : 'inactive'
                    }
                    onHover={() => setActiveId(sneaker.id)}
                />
            ))}
        </main>
    );
};

export default SneakerShowcase;