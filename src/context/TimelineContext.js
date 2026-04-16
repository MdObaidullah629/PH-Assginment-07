// "use client";
// import { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";

// const TimelineContext = createContext();

// export const TimelineProvider = ({ children }) => {
//   const [interactions, setInteractions] = useState([]);

//   // ব্রাউজার রিফ্রেশ দিলেও যেন ডাটা না হারায় (LocalStorage)
//   useEffect(() => {
//     const savedData = localStorage.getItem("keeper_interactions");
//     if (savedData) {
//       setInteractions(JSON.parse(savedData));
//     }
//   }, []);

//   const addInteraction = (type, friendName) => {
//     const newEntry = {
//       id: Date.now(),
//       type,
//       title: `${type} with ${friendName}`,
//       date: new Date().toLocaleString(),
//     };

//     const updatedInteractions = [newEntry, ...interactions];
//     setInteractions(updatedInteractions);
//     localStorage.setItem("keeper_interactions", JSON.stringify(updatedInteractions));
    
//     // Toast Notification দেখানো
//     toast.success(`Logged: ${type} with ${friendName}`);
//   };

//   return (
//     <TimelineContext.Provider value={{ interactions, addInteraction }}>
//       {children}
//     </TimelineContext.Provider>
//   );
// };

// export const useTimeline = () => useContext(TimelineContext);