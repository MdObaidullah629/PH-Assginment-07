// // src/components/Details/CheckIn.js
// "use client";
// import { useTimeline } from "@/context/TimelineContext";

// const CheckIn = ({ friendName }) => {
//   const { addInteraction } = useTimeline();

//   const actions = [
//     { type: "Call", icon: "/assets/call.png" },
//     { type: "Text", icon: "/assets/text.png" },
//     { type: "Video", icon: "/assets/video.png" }
//   ];

//   return (
//     <div className="card-style p-8">
//       <h3 className="text-lg font-bold mb-6 text-gray-800">Quick Check-in</h3>
//       <div className="grid grid-cols-3 gap-4">
//         {actions.map((action) => (
//           <button 
//             key={action.type}
//             onClick={() => addInteraction(action.type, friendName)}
//             className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-gray-50 transition"
//           >
//             <img src={action.icon} alt={action.type} className="w-10 h-10" />
//             <span className="text-xs font-bold uppercase">{action.type}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CheckIn;