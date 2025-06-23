import Link from 'next/link';
import { XIcon } from '@/components/icons'; // 1. Import the XIcon

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const handleLinkClick = () => {
        onClose();
    };

    return (
        <div
            className={`
                fixed inset-0 z-40 bg-white
                transform transition-transform duration-300 ease-in-out
                 ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
        >
            <div className="absolute top-6 right-4">
                <button onClick={onClose} aria-label="Close menu">
                    <XIcon className="h-8 w-8 text-gray-800" />
                </button>
            </div>

            <nav className="flex flex-col items-center justify-center h-full space-y-8">
                <Link href="/" onClick={handleLinkClick} className="text-2xl font-bold text-gray-800">
                    HOME
                </Link>
                <Link href="/women" onClick={handleLinkClick} className="text-2xl font-bold text-gray-800">
                    WOMEN
                </Link>
                <Link href="/men" onClick={handleLinkClick} className="text-2xl font-bold text-gray-800">
                    MEN
                </Link>
                <Link href="/kids" onClick={handleLinkClick} className="text-2xl font-bold text-gray-800">
                    KIDS
                </Link>
            </nav>
        </div>
    );
};

export default MobileMenu;