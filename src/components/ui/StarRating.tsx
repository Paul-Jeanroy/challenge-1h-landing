import React from "react";

export const StarRating = ({ count = 5, color = "orange" }: { count?: number; color?: string }) => {
    return (
        <div className="flex">
            {[...Array(count)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={color}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={color}
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27l5.18 3.73-1.64-6.81L21 9.24l-6.91-.61L12 2.5 9.91 8.63 3 9.24l4.46 4.95-1.64 6.81L12 17.27z"
                    />
                </svg>
            ))}
        </div>
    );
};
