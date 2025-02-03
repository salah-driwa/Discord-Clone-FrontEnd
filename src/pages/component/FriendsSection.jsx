import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const users = [
  { id: 1, name: "Richard Wilson", img: "https://i.pravatar.cc/150?u=1", isOnline: true },
  { id: 2, name: "Jack Johnson", img: "https://i.pravatar.cc/150?u=2", isOnline: false },
  { id: 3, name: "Emily Davis", img: "https://i.pravatar.cc/150?u=3", isOnline: true },
  { id: 4, name: "Sophia Taylor", img: "https://i.pravatar.cc/150?u=4", isOnline: false },
  { id: 5, name: "Mason Brown", img: "https://i.pravatar.cc/150?u=5", isOnline: true },
  { id: 6, name: "Ava Martinez", img: "https://i.pravatar.cc/150?u=6", isOnline: true },
  { id: 7, name: "Liam Thompson", img: "https://i.pravatar.cc/150?u=7", isOnline: false },
  { id: 8, name: "Olivia Anderson", img: "https://i.pravatar.cc/150?u=8", isOnline: true },
  { id: 9, name: "Noah Harris", img: "https://i.pravatar.cc/150?u=9", isOnline: false },
  { id: 10, name: "Isabella Clark", img: "https://i.pravatar.cc/150?u=10", isOnline: true },
  { id: 11, name: "Elijah Lewis", img: "https://i.pravatar.cc/150?u=11", isOnline: true },
  { id: 12, name: "Amelia Robinson", img: "https://i.pravatar.cc/150?u=12", isOnline: false },
  { id: 13, name: "Lucas Young", img: "https://i.pravatar.cc/150?u=13", isOnline: true },
  { id: 14, name: "Mia King", img: "https://i.pravatar.cc/150?u=14", isOnline: true },
  { id: 15, name: "Benjamin Wright", img: "https://i.pravatar.cc/150?u=15", isOnline: false },
  { id: 16, name: "Charlotte Hall", img: "https://i.pravatar.cc/150?u=16", isOnline: true },
  { id: 17, name: "James Allen", img: "https://i.pravatar.cc/150?u=17", isOnline: false },
  { id: 18, name: "Harper Scott", img: "https://i.pravatar.cc/150?u=18", isOnline: true },
  { id: 19, name: "Alexander Adams", img: "https://i.pravatar.cc/150?u=19", isOnline: true },
  { id: 20, name: "Ella Perez", img: "https://i.pravatar.cc/150?u=20", isOnline: false },
];

const FriendSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // State to simulate loading

  // Filter users based on the search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Simulate fetching with a 1-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1 second
    }, 1000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="w-80 overflow-y-auto text-white bg-DsecondaryStuff rounded-t-xl flex flex-col h-screen">
      <div className="p-4 bg-DsecondaryStuff sticky top-0 z-[200]">
        <div className="flex bg-white w-52 bg-opacity-10 items-center py-2 gap-3 rounded-xl">
          <CiSearch className="ml-3" size={25} />
          <input
            className="bg-transparent text-white text-sm focus:outline-none placeholder-gray-400 w-8/12 h-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query on input change
          />
        </div>
      </div>

      <div className="bg-DsecondaryStuff flex flex-col justify-between">
        <div className="space-y-2">
          <div className="px-2 flex flex-col gap-1 pb-5">
            {loading ? (
              // Skeleton loader
              <div className="space-y-2">
                {[...Array(20)].map((_, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-center p-2 rounded-md bg-gray-700 animate-pulse"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                    <div className="w-1/2 h-4 bg-gray-500"></div>
                  </div>
                ))}
              </div>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <motion.div
                  key={user.id}
                  className="relative hover:bg-gray-400/30 cursor-pointer p-2 rounded-md flex gap-4 items-center space-y-2"
                  initial={{ opacity: 0, y: 0 }} // Initial position and opacity
                  animate={{ opacity: 1, y: 0 }}  // Final position and opacity
                  transition={{ duration: 0.3 }}   // Duration of the animation
                  whileHover={{ scale: 1.05 }} // Scale on hover
                >
                  <img
                    src={user.img}
                    alt={user.name}
                    className="size-10 rounded-full"
                  />
                  {/* Online/Offline Dot */}
                  <span
                    className={`size-3 absolute top-7 left-10 z-50 rounded-full border border-gray-900 ${user.isOnline ? 'bg-green-600' : 'bg-gray-400'}`}
                  ></span>
                  <p className="text-white">{user.name}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400">No users found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendSection;
