"use client";
import { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import { Phone, MessageSquare, Video, Filter } from "lucide-react";

const TimelinePage = () => {
  const { interactions } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredData = filter === "All" 
    ? interactions 
    : interactions.filter(item => item.type === filter);

  const getIcon = (type) => {
    if (type === "Call") return <Phone size={18} className="text-blue-500" />;
    if (type === "Text") return <MessageSquare size={18} className="text-green-500" />;
    return <Video size={18} className="text-purple-500" />;
  };

  return (
    <div className="max-w-3xl mx-auto px-10 py-16">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Timeline</h1>
        
        {/* Filter Buttons */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          {["All", "Call", "Text", "Video"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === btn ? "bg-white shadow-sm text-[#1E3A2F]" : "text-gray-500"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <Filter className="mx-auto mb-4 text-gray-300" size={48} />
          <p className="text-gray-500">No {filter === "All" ? "" : filter} interactions found.</p>
        </div>
      ) : (
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-z-10 before:h-full before:w-0.5 before:bg-gray-100">
          {filteredData.map((item) => (
            <div key={item.id} className="relative flex items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="h-10 w-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm z-10">
                {getIcon(item.type)}
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
                <p className="text-xs text-gray-400 mb-1 font-semibold">{item.date}</p>
                <h4 className="font-bold text-gray-800">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;