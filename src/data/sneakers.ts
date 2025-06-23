export interface Sneaker {
    id: string;
    brand: string;
    imageSrc: string;
    bgColor: string;
    textColor: string;
    // The initial rotation for the neutral/inactive state.
    initialRotation: number;
}

export const sneakers: Sneaker[] = [
    {
        id: 'air-jordan',
        brand: 'AIR JORDAN',
        imageSrc: '/images/product-3.png',
        bgColor: 'bg-radial-blue-neutral',
        textColor: 'text-white',
        initialRotation: -15, // Angled slightly counter-clockwise
    },
    {
        id: 'yeezy',
        brand: 'YEEZY',
        imageSrc: '/images/product-2.png',
        bgColor: 'bg-radial-lime-neutral',
        textColor: 'text-white',
        initialRotation: 0, // Starts straight
    },
    {
        id: 'bape',
        brand: 'BAPE',
        imageSrc: '/images/product-1.png',
        bgColor: 'bg-[#F3DFC5]',
        textColor: 'text-white',
        initialRotation: 15, // Angled slightly clockwise
    },
];