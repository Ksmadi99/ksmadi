import { useState } from "react"; 
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const cardData = [
  {
    id: "tools",
    title: "🛠️ Tools",
    content: ["HQRM", "WMS", "POS"],
  },
  {
    id: "skills",
    title: "📚 Skills",
    content: ["MySQL"],
  },
  {
    id: "projects",
    title: "📁 Projects",
    content: ["No projects listed yet."],
  },
];

export default function App() {
  const [openCard, setOpenCard] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex flex-col transition-colors duration-300 relative`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-[tomato] text-white font-semibold">
        <div className="text-xl">KASMADIANA</div>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#freelancer" className="hover:underline">Freelancer</a>
          <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-1 rounded-full bg-white text-[tomato] font-semibold hover:bg-gray-100">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="bg-[tomato] text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-2">KASMADIANA</h1>
        <p className="text-xl mb-6">IT SUPPORT EXECUTIVE</p>
        <a href="/resume.pdf" download className="px-6 py-2 rounded-full bg-white text-[tomato] font-semibold shadow hover:bg-gray-100">
          📄 Download Resume
        </a>
      </section>

      {/* Speciality */}
      <section className="flex-grow py-16 px-6 flex justify-center">
        <div className="w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Speciality</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cardData.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenCard(card.id)}
                className="cursor-pointer"
              >
                <Card className={`rounded-2xl shadow-xl ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                  <CardContent className="p-6 text-center text-2xl font-semibold">
                    {card.title}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {openCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} rounded-2xl shadow-xl p-6 max-w-md w-full`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {cardData.find((c) => c.id === openCard)?.title}
                </h2>
                <button
                  onClick={() => setOpenCard(null)}
                  className="text-xl font-bold hover:text-[tomato]"
                >
                  ✕
                </button>
              </div>
              <ul className="list-disc ml-6 space-y-1">
                {cardData.find((c) => c.id === openCard)?.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`text-center py-6 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        <p>📧 kasmadiana@gmail.com</p>
        <p>
          🔗 <a href="#" className="text-blue-500 hover:underline">LinkedIn</a> | <a href="#" className="text-blue-500 hover:underline">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

