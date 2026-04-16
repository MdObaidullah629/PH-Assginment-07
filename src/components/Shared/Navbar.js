// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Home, Clock, BarChart2 } from "lucide-react";

// const Navbar = () => {
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", path: "/", icon: <Home size={18} /> },
//     { name: "Timeline", path: "/timeline", icon: <Clock size={18} /> },
//     { name: "Stats", path: "/stats", icon: <BarChart2 size={18} /> },
//   ];

//   return (
//     <nav className="flex items-center justify-between px-10 py-4 bg-white border-b sticky top-0 z-50">
//       <div className="flex items-center gap-2">
//         <img src="/assets/logo.png" alt="KeenKeeper" className="h-8 w-auto" />
//       </div>
      
//       <div className="flex gap-6">
//         {navLinks.map((link) => (
//           <Link
//             key={link.path}
//             href={link.path}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//               pathname === link.path 
//               ? "bg-[#1E3A2F] text-white shadow-md" 
//               : "text-gray-600 hover:bg-gray-100"
//             }`}
//           >
//             {link.icon}
//             <span className="font-medium">{link.name}</span>
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;