import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b-8 border-black pt-16 md:pt-24 pb-32">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-10 md:right-32 animate-spin-slow opacity-50 pointer-events-none">
                <Star className="w-32 h-32 stroke-[2px] stroke-black fill-[#FFD93D]" />
            </div>
            <div className="absolute bottom-20 left-10 w-48 h-48 border-4 border-black bg-[#C4B5FD] rotate-12 shadow-[12px_12px_0px_0px_#000] -z-10" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
                <div className="max-w-4xl pt-8">
                    <div className="inline-block bg-[#FF6B6B] border-4 border-black text-white px-4 py-2 font-black uppercase tracking-widest text-sm mb-6 rotate-3 shadow-[4px_4px_0px_0px_#000]">
                        The Anti-Corporate Planner
                    </div>

                    <h1 className="font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.85] mb-8 relative">
                        Travel <br />
                        <span className="text-stroke relative inline-block -rotate-2 bg-[#FFD93D] px-2 border-4 border-black shadow-[8px_8px_0px_0px_#000] text-black w-max">Different</span> <br />
                        Not Harder.
                    </h1>

                    <p className="font-bold text-xl md:text-3xl max-w-2xl mb-12 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] leading-tight">
                        A concept demonstration app for intelligent, automated itinerary generation without the boring corporate fluff.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                            href="#demo"
                            className="group relative inline-flex items-center justify-center bg-[#FF6B6B] text-black font-black uppercase text-xl px-8 py-5 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 w-full sm:w-auto text-center"
                        >
                            Generate Trip
                            <ArrowRight className="ml-3 w-8 h-8 stroke-[4px] group-hover:translate-x-2 transition-transform" />
                        </Link>

                        <Link
                            href="#solution"
                            className="inline-flex items-center justify-center bg-transparent border-4 border-black font-black uppercase text-xl px-8 py-5 hover:bg-black hover:text-white transition-colors duration-100 w-full sm:w-auto text-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
