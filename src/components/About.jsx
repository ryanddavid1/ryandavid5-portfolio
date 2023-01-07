import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        In Kali Linux or RedHat Linux able to write scripts in bash and python to automate tasks, or to write scripts to scan a webserver to check for vulnerability's. Able to conduct penetration testing using Burp suite, metasploit, Hydra and immunity debugger. Able to scan the network using Nmap, Nessus, Nikto. In Python able to automate common system administration tasks, troubleshoot and debug complex problems, and apply automation at scale by using configuration management and the Cloud. 
        </p>

        <br />

        <p className="text-xl">
        Bringing an in-depth understanding of how to configure devices, networks and operating systems. History of maintaining equipment, updating software and handling network security with an organized and systematic focus. Strong multitasker with excellent communication and planning abilities. Adaptable and driven with strong work ethic and ability to thrive in team-based. Multilingual and fluent in Spanish and English, offering solid comprehension of cultural diversity.
        </p>
      </div>
    </div>
  );
};

export default About;
