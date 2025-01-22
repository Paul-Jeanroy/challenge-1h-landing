import Image from "next/image";

const testimonialImages = [
    { src: "/testi-1.jpg", alt: "témoignage portait client" },
    { src: "/testi-2.jpg", alt: "témoignage portait client" },
    { src: "/testi-3.jpg", alt: "témoignage portait client" },
    { src: "/testi-4.jpg", alt: "témoignage portait client" },
    { src: "/testi-2.jpg", alt: "témoignage portait client" },
];

export default function HeroTestimonials() {
    return (
        <div className="flex mt-[100px] h-full w-full justify-center gap-5">
            <div className="flex items-center">
                {testimonialImages.map((image, index) => (
                    <div
                        key={index}
                        className={`rounded-full w-10 h-10 bg-gray-500 border-white border relative ${
                            index > 0 ? "-ml-3" : ""
                        }`}
                    >
                        <Image src={image.src} fill className="object-cover rounded-full" alt={image.alt} />
                    </div>
                ))}
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="orange"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="orange"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 17.27l5.18 3.73-1.64-6.81L21 9.24l-6.91-.61L12 2.5 9.91 8.63 3 9.24l4.46 4.95-1.64 6.81L12 17.27z"
                            />
                        </svg>
                    ))}
                </div>
                <span className="text-white">50+ Sites réalisés avec succès</span>
            </div>
        </div>
    );
}
