import React from "react";
import Cards from "./Cards"

export default function Skills() {
    return (
        <section className="relative py-24 bg-[#161616] text-white">

            {/* Header */}
            <div className="text-center mb-16 px-5 sm:px-14">
                <span className="px-4 py-1 text-xs uppercase tracking-wider border border-gray-600 rounded-full">
                    My Expertise
                </span>
                <h2 className="text-3xl font-bold mt-6">Skills & Technologies</h2>
                <p className="text-gray-400 mt-3">
                    A comprehensive overview of the technologies and tools I use to bring ideas to life
                </p>
            </div>

            <Cards />

            <div className="text-center mt-16 text-gray-500 text-sm">
                — Always learning, always growing —
            </div>
        </section>
    );
}
