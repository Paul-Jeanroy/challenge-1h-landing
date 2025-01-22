import Button from "../ui/Button";
import Image from "next/image";

export default function HeroCTA() {
    return (
        <>
            <div className="max-w-4xl mx-auto mt-[50px]">
                <h1 className="text-6xl font-semibold line text-center tracking-tighter leading-[60px] bg-gradient-to-t from-[#9E9E9E] to-[#F9F9F9] bg-clip-text text-transparent">
                    Un site internet n&apos;est pas juste une vitrine, c&apos;est le moteur de votre réussite en ligne
                </h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm text-center mt-4 text-[#B6B6B6]">
                        Je créé des sites modernes, performants et optimisés pour propulser votre activité en ligne.
                        Faites une première impression inoubliable. Que vous soyez entrepreneur, coach, ou dirigeant
                        d&apos;entreprise, je conçois des sites sur-mesure qui reflètent votre vision et attirent vos
                        clients idéaux.
                    </p>
                </div>
                <div className="w-full mt-[50px] flex justify-center">
                    <Button>Lancez votre projet aujourd&apos;hui</Button>
                </div>
            </div>

            <div className="w-full mt-[50px] items-center flex justify-center">
                <Image
                    src={"/img_fond.jpg"}
                    width={1000}
                    height={500}
                    className="rounded-[50px]"
                    alt="Un site internet n'est pas juste une vitrine, c'est le moteur de votre réussite en ligne"
                />
            </div>
        </>
    );
}
