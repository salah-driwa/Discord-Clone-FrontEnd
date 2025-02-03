import { AiOutlineFile } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const users = [
  { id: 1, name: "Richard Wilson", img: "https://i.pravatar.cc/150?u=1", status: "playing NFS Heat", role: "Admin" },
  { id: 2, name: "Jenna Ortiz", img: "https://i.pravatar.cc/150?u=2", status: "", role: "" },
  { id: 3, name: "Alice Smith", img: "https://i.pravatar.cc/150?u=3", status: "", role: "" },
  { id: 4, name: "Joseph Padilla", img: "https://i.pravatar.cc/150?u=4", status: "", role: "" },
  { id: 5, name: "Jack Johnson", img: "https://i.pravatar.cc/150?u=5", status: "", role: "" },
  { id: 6, name: "Julia Williams", img: "https://i.pravatar.cc/150?u=6", status: "", role: "" },
  { id: 7, name: "Matt Campos", img: "https://i.pravatar.cc/150?u=7", status: "", role: "" },
  { id: 8, name: "Sarah Britt", img: "https://i.pravatar.cc/150?u=8", status: "", role: "" },
];

const UserSection = () => {
  const [loading, setLoading] = useState(true);

  // Simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-64 bg-[#313447] p-4 text-white overflow-y-auto h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Members</h2>
        <p className="text-sm text-gray-400 cursor-pointer">Add new</p>
      </div>

      <div className="mt-4">
        {loading ? (
          // Skeleton Loading for Users
          <div className="space-y-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex p-3 justify-between items-center animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <div className="flex flex-col">
                    <div className="w-32 h-4 bg-gray-400 rounded"></div>
                    <div className="w-24 h-3 bg-gray-400 rounded mt-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Users Data
          users.map(user => (
            <motion.div
              key={user.id}
              className="flex hover:bg-gray-400/40 rounded-lg cursor-pointer p-3 justify-between items-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="size-3 absolute top-8 left-7 bg-green-600 rounded-full border border-gray-900"></span>
                <div className="flex flex-col">
                  <p className="font-medium">{user.name}</p>
                  {user.status && <p className="text-xs text-gray-400">{user.status}</p>}
                </div>
              </div>
              {user.role && <p className="text-xs text-gray-400">{user.role}</p>}
            </motion.div>
          ))
        )}
      </div>

      {/* Files Section */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Files</h2>
          <p className="text-sm text-gray-400 cursor-pointer">View all</p>
        </div>

        <div className="mt-4 space-y-2">
          {loading ? (
            // Skeleton Loading for Files
            <div className="animate-pulse space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  <div className="w-32 h-4 bg-gray-400 rounded"></div>
                </div>
                <div className="w-8 h-4 bg-gray-400 rounded"></div>
              </div>
              <div className="w-full h-32 bg-gray-400 rounded"></div>
            </div>
          ) : (
            <>
              {/* Photos Section */}
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-between w-full space-x-2 pr-5 mb-3 overflow-clip">
                    <div className="flex gap-3">
                      <BsImage className="text-gray-400" size={20} />
                      <p className="text-sm">265 photos</p>
                    </div>
                    <p className="text-sm text-gray-400 rotate-180">
                      <IoIosArrowDown />
                    </p>
                  </div>

                  {/* Container with scroll overflow */}
                  <div className="flex gap-6 overflow-x-scroll overflow-y-clip w-60 h-32 overflow-hidden">
                    {["https://picsum.photos/600/300", "https://picsum.photos/800/300", "https://picsum.photos/500/300"].map((src, index) => (
                      <motion.img
                        key={index}
                        src={src}
                        alt="Free unsplash image"
                        className="object-cover rounded-2xl h-28 min-w-32 transition-transform duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Files Section */}
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2">
                  <AiOutlineFile className="text-gray-400" size={20} />
                  <p className="text-sm">378 files</p>
                </div>
                <p className="text-sm text-gray-400">
                  <IoIosArrowDown />
                </p>
              </motion.div>

              {/* Shared Links */}
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-2">
                  <FiLink2 className="text-gray-400" size={20} />
                  <p className="text-sm">45 shared links</p>
                </div>
                <p className="text-sm text-gray-400">
                  <IoIosArrowDown />
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSection;
