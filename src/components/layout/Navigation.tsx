const navItems = [
    { label: "Accueil", href: "#" },
    { label: "Mes services", href: "#services" },
    { label: "Processus", href: "#processus" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export default function Navigation() {
    return (
        <nav className="flex flex-1 ml-auto gap-10 justify-center">
            <div className="border border-gray-100/10 gap-10 px-10 py-4 rounded-full flex">
                {navItems.map((item) => (
                    <a key={item.label} href={item.href} className="cursor-pointer hover:text-gray-400 duration-200">
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
