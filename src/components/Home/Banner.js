const Banner = () => {
  return (
    <div className="text-center py-16 bg-[#F8FAF9] rounded-[40px] border border-dashed border-gray-200 mb-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A2F] mb-4 tracking-tight">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto font-medium">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      
      {/* বাটন যেখানে ইমেজের বদলে সরাসরি + সাইন ব্যবহার করা হয়েছে */}
      <button className="bg-[#1E3A2F] text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-opacity-90 transition-all active:scale-95 shadow-md">
        {/* টেক্সট হিসেবে প্লাস সাইন */}
        <span className="text-xl font-bold leading-none mb-0.5">
          +
        </span>
        <span className="font-bold text-sm tracking-wider">
          Add a Friend
        </span>
      </button>
    </div>
  );
};

export default Banner;