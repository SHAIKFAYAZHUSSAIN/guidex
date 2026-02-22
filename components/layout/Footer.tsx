import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t-8 border-black">
            <div className="border-b-4 border-white bg-[#FF6B6B] text-black py-3 overflow-hidden">
                <Marquee speed={50} gradient={false} className="font-black text-xl md:text-2xl uppercase tracking-widest">
                    {Array(10).fill("GUIDEX CONCEPT DEMO // ").map((text, i) => (
                        <span key={i} className="mx-4">{text}</span>
                    ))}
                </Marquee>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="inline-block bg-[#FFFDF5] text-black border-4 border-white p-4 mb-6 shadow-[8px_8px_0px_0px_#FFD93D] -rotate-2">
                        <span className="font-black text-4xl uppercase tracking-tighter">GuideX</span>
                    </div>
                    <p className="font-bold text-lg md:text-xl max-w-md">
                        The rebellious travel planner for the modern explorer. College-level showcase project. NOT a real SaaS.
                    </p>
                </div>
                <div className="flex flex-col md:items-end justify-center">
                    <Link
                        href="#hero"
                        className="bg-white text-black border-4 border-white font-black uppercase px-8 py-4 shadow-[8px_8px_0px_0px_#FF6B6B] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#FF6B6B] transition-all duration-100 text-center w-full md:w-auto"
                    >
                        Back to Top
                    </Link>
                </div>
            </div>
            <div className="border-t-4 border-white p-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="font-bold uppercase tracking-wider text-sm">&copy; {new Date().getFullYear()} GuideX Project</p>
                <p className="font-bold uppercase tracking-wider text-sm mt-4 md:mt-0">Built for Showcase</p>
            </div>
        </footer>
    );
}
