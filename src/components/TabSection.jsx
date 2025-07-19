// TabSection.jsx
import { motion, AnimatePresence } from 'framer-motion';

const TabSection = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'skills', label: 'Technical Skills' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'interest', label: 'Interest' },
  ];

  const skills = ["Flutter", "React Native", "React", "HTML & CSS", "JavaScript", "Python", "SQL", "Java"];
  const softSkills = ["Problem-Solving", "Management Skills", "Good listener", "Leadership", "Communication", "Critical Thinking"];
  const interests = ["Web Design", "Video Games", "Travel", "Photography"];

  return (
    <div className="mb-8">
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium ${activeTab === tab.id ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-400 hover:text-gray-300'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeTab === 'skills' && (
            <motion.ul
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, i) => (
                <li key={i} className="flex items-center"><span className="text-pink-500 mr-2">•</span>{skill}</li>
              ))}
            </motion.ul>
          )}
          {activeTab === 'soft' && (
            <motion.ul
              key="soft"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {softSkills.map((skill, i) => (
                <li key={i} className="flex items-center"><span className="text-pink-500 mr-2">•</span>{skill}</li>
              ))}
            </motion.ul>
          )}
          {activeTab === 'interest' && (
            <motion.ul
              key="interest"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {interests.map((interest, i) => (
                <li key={i} className="flex items-center"><span className="text-pink-500 mr-2">•</span>{interest}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabSection;
