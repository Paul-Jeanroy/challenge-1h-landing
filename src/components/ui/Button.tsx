interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function Button({ children, onClick, className = "" }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`font-semibold bg-white text-black hover:text-white hover:bg-black hover:border-white border duration-500 border-black px-4 py-3 rounded-full cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
}