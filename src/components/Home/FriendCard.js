// "use client";
// import React from 'react';
// import Link from 'next/link'; // ১. লিংক ইম্পোর্ট করতে হবে

// const FriendCard = ({ friend }) => {
//   if (!friend) return null;

//   const getStatusBgColor = (status) => {
//     const s = status?.toLowerCase();
//     if (s === 'overdue') return 'bg-[#F43F5E]';
//     if (s === 'almost due') return 'bg-[#FB923C]';
//     if (s === 'on-track') return 'bg-[#10B981]';
//     return 'bg-gray-400';
//   };

//   return (
//     // ২. পুরো কার্ডকে Link দিয়ে র‍্যাপ (wrap) করতে হবে
//     <Link href={`/friend/${friend.id}`} className="block h-full">
//       <div className="bg-white border border-gray-100 p-8 rounded-[40px] shadow-sm flex flex-col items-center text-center h-full transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer">
        
//         {/* প্রোফাইল ছবি */}
//         <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-gray-50 flex-shrink-0">
//           <img 
//             src={friend.picture} 
//             alt={friend.name} 
//             className="w-full h-full object-cover"
//             onError={(e) => { 
//               e.target.src = `https://ui-avatars.com/api/?name=${friend.name}&background=10B981&color=fff`; 
//             }}
//           />
//         </div>

//         {/* নাম এবং সময় */}
//         <div className="mb-6">
//           <h3 className="text-2xl font-extrabold text-[#1E3A2F] mb-1 font-inter tracking-tight">
//             {friend.name}
//           </h3>
//           <p className="text-sm text-gray-400 font-medium">
//             {friend.days_since_contact}d ago
//           </p>
//         </div>

//         {/* ট্যাগ এবং স্ট্যাটাস */}
//         <div className="flex flex-col items-center gap-2 mt-auto w-full">
//           {friend.tags && friend.tags[0] && (
//             <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-5 py-2 rounded-full w-full max-w-[120px]">
//               {friend.tags[0]}
//             </span>
//           )}
//           <span className={`text-[10px] font-bold uppercase tracking-widest text-white px-5 py-2 rounded-full w-full max-w-[140px] shadow-sm ${getStatusBgColor(friend.status)}`}>
//             {friend.status}
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default FriendCard;