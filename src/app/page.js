// "use client"; // এটি অবশ্যই একদম উপরে থাকতে হবে

// import { useState, useEffect } from "react";
// import friendsData from "@/data/friends.json";
// import Banner from "@/components/Home/Banner";
// import FriendCard from "@/components/Home/FriendCard";

// export default function HomePage() {
//   const [loading, setLoading] = useState(true);

//   // রিকোয়ারমেন্ট ১০.২: ডাটা ফেচিংয়ের কৃত্রিম লোডিং স্টেট
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // ২ সেকেন্ড লোডিং দেখাবে
//     return () => clearTimeout(timer);
//   }, []);

//   // স্ট্যাটাস লজিক
//   const stats = [
//     { label: "Total Friends", value: friendsData.length },
//     { label: "On Track", value: friendsData.filter(f => f.status === "on-track").length },
//     { label: "Need Attention", value: friendsData.filter(f => f.status === "overdue").length },
//     { label: "Interactions This Month", value: 12 },
//   ];

//   // যদি লোডিং ট্রু হয়, তবে স্পিনার দেখাবে
//   if (loading) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1E3A2F] mb-4"></div>
//         <p className="text-[#1E3A2F] font-medium animate-pulse">Loading KeenKeeper...</p>
//       </div>
//     );
//   }

//   // লোডিং শেষ হলে মূল কন্টেন্ট দেখাবে
//   return (
//     <div className="max-w-7xl mx-auto px-10 py-10 animate-in fade-in duration-700">
//       <Banner />
      
//       {/* Stats Summary Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-16">
//         {stats.map((stat, idx) => (
//           <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
//             <h3 className="text-4xl font-bold text-[#1E3A2F] mb-2">{stat.value}</h3>
//             <p className="text-gray-500 font-medium">{stat.label}</p>
//           </div>
//         ))}
//       </div>

//       {/* Friend List Grid */}
//       <div className="mt-20">
//         <h2 className="text-3xl font-bold text-gray-800 mb-10">Your Friends</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {friendsData.map((friend) => (
//             <FriendCard key={friend.id} friend={friend} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }