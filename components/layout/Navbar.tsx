import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#FFFDF5] border-b-4 border-black px-4 py-3 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none transition-all duration-100 flex items-center justify-center p-1 px-4 h-14">
                        <img src="/logo.png" alt="GuideX Logo" className="h-full object-contain" />
                    </div>
                </Link>
                <div className="hidden md:flex gap-6 items-center">
                    {["Problem", "Solution", "Demo", "Vision", "Team"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-bold uppercase tracking-wider hover:bg-[#FFD93D] hover:border-black border-4 border-transparent px-2 py-1 transition-all duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#demo"
                        className="ml-4 bg-[#FFD93D] border-4 border-black font-bold uppercase px-6 py-2 shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
                    >
                        Try Demo
                    </Link>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu trigger could go here */}
                    <Link
                        href="#demo"
                        className="bg-[#FFD93D] border-4 border-black font-bold uppercase px-4 py-2 text-sm shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
                    >
                        Demo
                    </Link>
                </div>
            </div>
        </nav>
    );
}
