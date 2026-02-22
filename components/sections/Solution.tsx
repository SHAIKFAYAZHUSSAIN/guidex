import { Check, Zap, Map } from "lucide-react";

export default function Solution() {
    const features = [
        {
            title: "One-Click Magic.",
            desc: "Stop agonizing over multiple tabs. Get a full itinerary mapped out instantly.",
            icon: <Zap className="w-8 h-8 stroke-[4px]" />,
        },
        {
            title: "Budget-Aware.",
            desc: "We consider your wallet. From ramen to truffles, we scale it correctly.",
            icon: <Check className="w-8 h-8 stroke-[4px]" />,
        },
        {
            title: "Hyper Local.",
            desc: "Live like you live there. Avoid the generic tourist traps (unless requested).",
            icon: <Map className="w-8 h-8 stroke-[4px]" />,
        }
    ];

    return (
        <section id="solution" className="py-24 md:py-32 bg-[#FFD93D] border-b-8 border-black">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">

                <div className="lg:col-span-5 flex flex-col justify-center">
                    <h2 className="font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
                        The <br />
                        <span className="bg-white px-2 border-4 border-black text-[#FF6B6B] shadow-[8px_8px_0px_0px_#000] inline-block -rotate-1 mt-4">Cure</span>
                    </h2>
                    <p className="font-bold text-2xl leading-snug border-l-8 border-black pl-6 bg-[#FFFDF5] p-6 shadow-[8px_8px_0px_0px_#000] rotate-1">
                        GuideX replaces chaos with clarity. Our AI conceptual system drops you straight into the fun part of travel: the actual traveling.
                    </p>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-8">
                    {features.map((feat, idx) => (
                        <div
                            key={idx}
                            className="bg-white border-4 border-black p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200"
                        >
                            <div className="bg-[#C4B5FD] p-4 border-4 border-black shrink-0">
                                {feat.icon}
                            </div>
                            <div>
                                <h3 className="font-black text-3xl uppercase tracking-tight mb-2">{feat.title}</h3>
                                <p className="font-bold text-xl">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
