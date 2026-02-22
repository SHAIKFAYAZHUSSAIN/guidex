import { TEAM_MEMBERS } from "@/lib/mockData";
import { ArrowRight } from "lucide-react";

export default function Team() {
    return (
        <section id="team" className="py-24 md:py-32 bg-[#FF6B6B] border-b-8 border-black overflow-hidden relative">
            <div className="absolute top-10 left-10 text-9xl font-black opacity-10 pointer-events-none text-stroke text-white select-none rotate-6">
                SQUAD
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <h2 className="font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-16 text-center text-white">
                    The <span className="bg-black text-[#FFD93D] px-2 shadow-[8px_8px_0px_0px_#FFF] inline-block -rotate-2">Team</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-16 mt-20">
                    {TEAM_MEMBERS.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-[#FFFDF5] border-4 border-black p-8 relative shadow-[12px_12px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-200"
                        >
                            {/* Avatar Placeholder */}
                            <div className="w-24 h-24 rounded-full border-4 border-black bg-[#C4B5FD] absolute -top-12 left-8 flex justify-center items-center shadow-[4px_4px_0px_0px_#000]">
                                <span className="font-black text-3xl">{member.name.charAt(0)}</span>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-black text-3xl uppercase leading-none mb-1">{member.name}</h3>
                                <p className="font-bold text-[#FF6B6B] uppercase tracking-widest text-sm mb-6 pb-4 border-b-4 border-black/10 inline-block px-1 bg-black/5">
                                    {member.role}
                                </p>

                                <p className="font-bold text-lg leading-snug mb-8 bg-white border-2 border-dashed border-black p-4">
                                    {member.contribution}
                                </p>

                                <a
                                    href={member.social}
                                    className="inline-flex w-full justify-center items-center bg-[#FFD93D] border-4 border-black font-black uppercase py-3 shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-100 group"
                                >
                                    Connect
                                    <ArrowRight className="w-5 h-5 ml-2 stroke-[3px] group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
