"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateMockItinerary } from "@/lib/mockData";
import { Loader2 } from "lucide-react";

export default function Demo() {
    const [country, setCountry] = useState("");
    const [budget, setBudget] = useState("budget");
    const [duration, setDuration] = useState(3);

    interface ItineraryDay {
        day: number;
        title: string;
        activities: string[];
    }

    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ItineraryDay[] | null>(null);

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!country) return;

        setIsLoading(true);
        setResult(null);

        // Simulate API delay
        setTimeout(() => {
            setResult(generateMockItinerary(country, duration));
            setIsLoading(false);
        }, 1500);
    };

    return (
        <section id="demo" className="py-24 md:py-32 bg-[#FFFDF5] border-b-8 border-black polka-demo-bg">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block bg-black text-white font-black uppercase px-6 py-2 tracking-widest text-lg mb-6 border-4 border-white shadow-[6px_6px_0px_0px_#C4B5FD] rotate-2">
                        Interactive Area
                    </span>
                    <h2 className="font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
                        Test the System
                    </h2>
                </div>

                <div className="bg-white border-8 border-black border-dashed p-8 md:p-12 shadow-[16px_16px_0px_0px_#000]">
                    <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-12">

                        <div className="md:col-span-4 flex flex-col gap-2">
                            <label className="font-black text-xl uppercase tracking-widest">Destination</label>
                            <input
                                type="text"
                                placeholder="e.g. Japan"
                                required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full h-16 border-4 border-black px-4 font-bold text-xl uppercase focus-visible:bg-[#FFD93D] focus-visible:shadow-[6px_6px_0px_0px_#000] focus-visible:outline-none transition-all duration-100 placeholder:text-black/40"
                            />
                        </div>

                        <div className="md:col-span-3 flex flex-col gap-2">
                            <label className="font-black text-xl uppercase tracking-widest">Vibe / Budget</label>
                            <select
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="w-full h-16 border-4 border-black px-4 font-bold text-xl uppercase focus-visible:bg-[#FFD93D] focus-visible:shadow-[6px_6px_0px_0px_#000] focus-visible:outline-none transition-all duration-100 bg-white cursor-pointer appearance-none"
                            >
                                <option value="budget">Backpacker</option>
                                <option value="standard">Standard</option>
                                <option value="luxury">Luxury</option>
                            </select>
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-2">
                            <label className="font-black text-xl uppercase tracking-widest">Days</label>
                            <input
                                type="number"
                                min="1"
                                max="14"
                                value={duration}
                                onChange={(e) => setDuration(parseInt(e.target.value))}
                                className="w-full h-16 border-4 border-black px-4 font-bold text-xl uppercase focus-visible:bg-[#FFD93D] focus-visible:shadow-[6px_6px_0px_0px_#000] focus-visible:outline-none transition-all duration-100"
                            />
                        </div>

                        <div className="md:col-span-3">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-16 bg-[#FF6B6B] border-4 border-black font-black text-2xl uppercase shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 disabled:opacity-50 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] disabled:hover:translate-y-0 disabled:active:translate-y-0 disabled:hover:shadow-[6px_6px_0px_0px_#000] cursor-pointer disabled:cursor-not-allowed"
                            >
                                {isLoading ? <Loader2 className="animate-spin w-8 h-8 stroke-[4px]" /> : "BUILD IT"}
                            </button>
                        </div>
                    </form>

                    {/* Results Area with Framer Motion */}
                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="border-t-8 border-black pt-12"
                            >
                                <h3 className="font-black text-4xl uppercase mb-8 pb-4 border-b-4 border-black border-dashed inline-block">
                                    Your <span className="text-[#FF6B6B]"> {budget} </span> Trip to {country}
                                </h3>

                                <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-black">
                                    {result.map((day: ItineraryDay, i: number) => (
                                        <motion.div
                                            key={day.day}
                                            initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                                            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                                        >
                                            <div className="absolute left-8 md:left-1/2 -ml-3 flex items-center justify-center w-8 h-8 rounded-full border-4 border-black bg-[#FFD93D] shadow-[2px_2px_0px_0px_#000] z-10 font-bold text-sm">
                                                {day.day}
                                            </div>

                                            <div className="ml-20 md:ml-0 md:w-5/12 bg-[#FFFDF5] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-200">
                                                <h4 className="font-black text-2xl uppercase mb-3 text-stroke text-white">{day.title}</h4>
                                                <ul className="flex flex-col gap-2">
                                                    {day.activities.map((act: string, k: number) => (
                                                        <li key={k} className="font-bold text-lg border-b-2 border-black/10 pb-2 last:border-0 last:pb-0">{act}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        .polka-demo-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }
      `}} />
        </section>
    );
}
