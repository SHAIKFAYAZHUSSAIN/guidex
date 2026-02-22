import { AlertTriangle, Clock, Frown } from "lucide-react";

export default function Problem() {
    const problems = [
        {
            icon: <Clock className="w-12 h-12 stroke-[3px]" />,
            title: "Endless Planning",
            desc: "Hours wasted skimming multiple tabs, reviews, and outdated blogs just to find one good lunch spot.",
            color: "bg-[#FFD93D]",
            rotation: "rotate-2",
        },
        {
            icon: <AlertTriangle className="w-12 h-12 stroke-[3px] text-white" />,
            title: "Information Overload",
            desc: "Too many generic recommendations leading to decision paralysis.",
            color: "bg-[#FF6B6B]",
            textColor: "text-white",
            rotation: "-rotate-2",
        },
        {
            icon: <Frown className="w-12 h-12 stroke-[3px]" />,
            title: "Vague Budgets",
            desc: "Not knowing if a trip will bankrupt you until you are already checking out.",
            color: "bg-[#C4B5FD]",
            rotation: "rotate-1",
        }
    ];

    return (
        <section id="problem" className="py-24 md:py-32 bg-black text-white border-b-8 border-black polka-dot-bg">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="font-black text-5xl md:text-7xl uppercase tracking-tighter mb-16 text-center">
                    The <span className="text-stroke-white bg-blue-600 px-4 rotate-3 inline-block border-4 border-white shadow-[8px_8px_0px_0px_#FFD93D] text-white">Problem</span> is obvious.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                    {problems.map((prob, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 border-4 border-white ${prob.color} ${prob.textColor || 'text-black'} ${prob.rotation} hover:-translate-y-4 hover:shadow-[16px_16px_0px_0px_#FFF] transition-all duration-200 shadow-[8px_8px_0px_0px_#FFF]`}
                        >
                            <div className="absolute -top-8 -left-8 bg-white text-black font-black text-4xl w-16 h-16 flex items-center justify-center border-4 border-black rounded-full shadow-[4px_4px_0px_0px_#000]">
                                {idx + 1}
                            </div>
                            <div className="mb-6 bg-white/20 p-4 border-4 border-current inline-block">
                                {prob.icon}
                            </div>
                            <h3 className="font-black text-3xl uppercase mb-4 leading-none">{prob.title}</h3>
                            <p className="font-bold text-lg leading-snug">{prob.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .polka-dot-bg {
          background-image: radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2.5px);
          background-size: 30px 30px;
        }
      `}} />
        </section>
    );
}
