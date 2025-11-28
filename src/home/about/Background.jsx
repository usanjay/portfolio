
import React from "react";

function Background({ className = "" }) {
    return (
        <div className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
            {/* Blob 1 */}
            <div className="blob1 absolute w-[600px] h-[600px] bg-gray-700/20 rounded-full blur-[150px]"></div>

            {/* Blob 2 */}
            <div className="blob2 absolute w-[700px] h-[700px] bg-gray-700/20 rounded-full blur-[160px]"></div>
        </div>
    );
}

export default Background;
