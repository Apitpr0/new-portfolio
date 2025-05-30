export const About = () => {
  const OSProficiency = ["Windows", "Linux", "Android"];
  const ProgrammingLanguages = [
    "Python",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Tailwind CSS",
    "MySQL",
    "PowerShell",
    "Bash",
  ];
  const SecurityTools = ["Burp Suite", "Metasploit", "CyberChef", "Kali Linux"];
  const MonitoringTools = ["Nmap", "Nessus", "Wireshark"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full px-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-foreground mb-10 leading-relaxed text-justify">
          IT security enthusiast with skills in Python, C++, and Java. Familiar with networking, operating systems, and security tools like Burp Suite and Metasploit. Currently learning and aiming to grow as a future security engineer.
        </p>

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-10 mb-10">
          {/* OS Proficiency */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">Operating Systems</h3>
            <div className="flex flex-wrap gap-2">
              {OSProficiency.map((os) => (
                <span
                  key={os}
                  className="bg-blue-500/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {os}
                </span>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {ProgrammingLanguages.map((lang) => (
                <span
                  key={lang}
                  className="bg-green-500/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Security Tools */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">Security Tools</h3>
            <div className="flex flex-wrap gap-2">
              {SecurityTools.map((tool) => (
                <span
                  key={tool}
                  className="bg-purple-500/20 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Monitoring Tools */}
          <div className="rounded-xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-foreground">Monitoring Tools</h3>
            <div className="flex flex-wrap gap-2">
              {MonitoringTools.map((tool) => (
                <span
                  key={tool}
                  className="bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Diploma Card */}
          <div className="bg-background rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="bg-white p-2 rounded-lg mb-4">
              <img
                src="https://i.imgur.com/8DlhGEG.jpeg"
                alt="Diploma"
                className="w-full h-35 object-contain rounded-lg"
              />
            </div>
            <h3 className="flex items-start gap-2 text-xl font-bold mb-4 text-foreground">
              <span>🎓</span>
              <span>Diploma in Information Technology (Digital Technology) in Cybersecurity</span>
            </h3>
            <ul className="list-disc list-outside pl-6 text-foreground space-y-2 mb-4 leading-relaxed">
              <li>Tasek Gelugor Metro Polytechnic (Jan 2021 - Jan 2024)</li>
              <li>This program focuses on Computing with an emphasis on Information Technology...</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                "Ethical Hacking",
                "Web Security",
                "Security Audit",
                "Security Operation Center",
                "Python",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-blue-500/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Degree Card */}
          <div className="bg-background rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="bg-white p-2 rounded-lg mb-4">
              <img
                src="https://i.imgur.com/qgP4BHh.png"
                alt="Degree"
                className="w-full h-35 object-contain rounded-lg"
              />
            </div>
            <h3 className="flex items-start gap-2 text-xl font-bold mb-4 text-foreground">
              <span>🎓</span>
              <span>Bachelor's Degree in Computer Science (Computer Security) with Honours</span>
            </h3>
            <ul className="list-disc list-outside pl-6 text-foreground space-y-2 mb-4">
              <li>Technical University of Malacca (Oct 2024 - Oct 2027)</li>
              <li>This course is aimed to produce highly knowledgeable and skillful graduates...</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                "Physical Security",
                "Networking",
                "Computer Network",
                "Malware Analysis",
                "Cloud Computing",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-green-500/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 mt-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 mt-10">
          <h3 className="text-xl font-bold mb-4 text-foreground">🎖️ Certificates</h3>
          <ul className="list-disc list-outside pl-6 text-foreground space-y-2">
            <li>
              <strong>Certified Penetration Tester</strong> - Cyber Security Malaysia
            </li>
            <li>
              <strong>Participant</strong> - ASEAN Student Contest in Information Security (ASCIS 2022)
            </li>
            <li>
              <strong>Participant</strong> - PMTG InnoMetro 2023 – 2nd Place Best Project for IT, SKLY-CMS
            </li>
            <li>
              <strong>Participant</strong> - PMTG Innotech – Amalan Baik Pendigitalan Pendidikan
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
