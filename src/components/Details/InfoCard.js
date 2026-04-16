import React from 'react';

const InfoCard = ({ friend }) => {
  // স্ট্যাটাস অনুযায়ী ডাইনামিক কালার সেট করা
  const statusStyles = {
    "on-track": "bg-green-100 text-green-700 border-green-200",
    "almost due": "bg-orange-100 text-orange-700 border-orange-200",
    "overdue": "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center h-full">
      {/* প্রোফাইল ইমেজ */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-full h-full rounded-full object-cover border-4 border-[#1E3A2F]" 
        />
      </div>

      {/* নাম ও ইমেইল */}
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{friend.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{friend.email}</p>

      {/* স্ট্যাটাস ব্যাজ */}
      <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${statusStyles[friend.status] || "bg-gray-100 text-gray-600"}`}>
        {friend.status}
      </div>

      {/* ট্যাগসমূহ */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
        {friend.tags.map((tag) => (
          <span 
            key={tag} 
            className="bg-gray-50 text-gray-500 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight border border-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* বায়ো বা ডেসক্রিপশন */}
      <div className="border-t border-gray-50 pt-6 mb-8">
        <p className="text-gray-600 text-sm italic leading-relaxed">
          "{friend.bio}"
        </p>
      </div>

      {/* অ্যাকশন বাটনসমূহ */}
      <div className="space-y-3">
        <button className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all active:scale-95">
          ⏰ Snooze 2 Weeks
        </button>
        <button className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all active:scale-95">
          📦 Archive Connection
        </button>
        <button className="w-full py-3 bg-red-50 border border-red-100 text-red-500 rounded-xl font-semibold text-sm hover:bg-red-100 transition-all active:scale-95">
          🗑️ Delete Friend
        </button>
      </div>
    </div>
  );
};

export default InfoCard;