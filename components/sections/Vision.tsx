import { ROADMAP } from "@/lib/mockData";

export default function Vision() {
    return (
        <section id="vision" className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b-8 border-black">
            <div className="bg-[#C4B5FD] p-12 md:p-24 flex flex-col justify-center border-b-8 lg:border-b-0 lg:border-r-8 border-black polka-dot-vision">
                <h2 className="font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-4">
                    The <br /> Future
                </h2>
                <p className="font-bold text-2xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000] rotate-2 max-w-sm mt-8">
                    Where we are headed and what we seek to conquer.
                </p>
            </div>

            <div className="bg-[#FFFDF5] flex flex-col justify-center p-8 md:p-16">
                <div className="flex flex-col gap-12">
                    {ROADMAP.map((item, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -left-12 md:-left-16 top-0 text-7xl font-black text-transparent opacity-30 select-none pointer-events-none" style={{ WebkitTextStroke: "2px black" }}>
                                0{idx + 1}
                            </div>
                            <div className="bg-white border-4 border-black p-6 pl-8 relative shadow-[6px_6px_0px_0px_#000] group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_#000] transition-all duration-200">
                                <span className={`absolute top-0 right-4 -translate-y-1/2 px-4 py-1 font-black text-sm uppercase tracking-widest border-4 border-black inline-block z-10 shadow-[4px_4px_0px_0px_#000] ${item.status === 'Completed' ? 'bg-[#FFD93D]' :
                                        item.status === 'In Progress' ? 'bg-[#FF6B6B] text-white' :
                                            'bg-white'
                                    }`}>
                                    {item.status}
                                </span>

                                <h3 className="font-black text-2xl md:text-3xl uppercase tracking-wide mb-2 mt-2">{item.phase}</h3>
                                <p className="font-bold text-xl">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .polka-dot-vision {
          background-image: radial-gradient(circle, rgba(0,0,0,0.2) 2px, transparent 2.5px);
          background-size: 20px 20px;
        }
      `}} />
        </section>
    );
}
