"use client";
import { useParams } from "next/navigation";
import friendsData from "@/data/friends.json";
import InfoCard from "@/components/Details/InfoCard";
import CheckIn from "@/components/Details/CheckIn";
import { Clock, Target, Calendar, Edit2 } from "lucide-react";

// StatsCards Component
const StatsCards = ({ friend }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
      <div className="p-3 bg-gray-50 rounded-xl"><Clock className="text-orange-500" size={20} /></div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Last Contact</p>
        <p className="font-bold text-gray-800">{friend.days_since_contact} days ago</p>
      </div>
    </div>
    <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
      <div className="p-3 bg-gray-50 rounded-xl"><Target className="text-blue-500" size={20} /></div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Goal</p>
        <p className="font-bold text-gray-800">{friend.goal} days</p>
      </div>
    </div>
    <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
      <div className="p-3 bg-gray-50 rounded-xl"><Calendar className="text-green-500" size={20} /></div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Next Due</p>
        <p className="font-bold text-gray-800">{friend.next_due_date}</p>
      </div>
    </div>
  </div>
);

// RelationshipGoal Component
const RelationshipGoal = ({ goal }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500 font-medium">Relationship Goal</p>
      <h4 className="text-xl font-bold text-gray-800">Contact every {goal} days</h4>
    </div>
    <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition text-gray-600">
      <Edit2 size={18} />
    </button>
  </div>
);

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friendsData.find(f => f.id === parseInt(id));

  if (!friend) return <div className="h-screen flex items-center justify-center font-bold">Friend not found!</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <InfoCard friend={friend} />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <StatsCards friend={friend} />
          <RelationshipGoal goal={friend.goal} />
          <CheckIn friendName={friend.name} />
        </div>
      </div>
    </div>
  );
}