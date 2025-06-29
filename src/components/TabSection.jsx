// components/TabSection.js
const TabSection = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'skills', label: 'Technical Skills' },
    { id: 'soft', label: 'Soft Skills' },
    { id: 'interest', label: 'Interest' },
  ];

  const skills = [
    "Flutter", "React Native", "React", "HTML & CSS", 
    "JavaScript", "Python", "SQL", "Java"
  ];

  const softSkills = [
    "Problem-Solving", "Management Skills", "Good listener", 
    "Leadership", "Communication", "Critical Thinking"
  ];

  const interests = [
    "Web Design", "Video Games", "Travel", "Photography"
  ];

  return (
    <div className="mb-8">
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button 
            key={tab.id}
            className={`py-2 px-4 font-medium ${
              activeTab === tab.id 
                ? 'text-pink-500 border-b-2 border-pink-500' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="mt-6 min-h-[200px]">
        {activeTab === 'skills' && (
          <ul className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="text-pink-500 mr-2">•</span> {skill}
              </li>
            ))}
          </ul>
        )}
        
        {activeTab === 'soft' && (
          <ul className="grid grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="text-pink-500 mr-2">•</span> {skill}
              </li>
            ))}
          </ul>
        )}
        
        {activeTab === 'interest' && (
          <ul className="grid grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <li key={index} className="flex items-center">
                <span className="text-pink-500 mr-2">•</span> {interest}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TabSection;