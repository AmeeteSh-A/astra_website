import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Members = () => {
  const facultyMembers = [
    { name: "Dr. Jyotsana Sharma", role: "Faculty Patron", initials: "JS" },
    { name: "Dr. Ankita Gaur", role: "Learning & Research Lead", initials: "AG" },
    { name: "Dr. Preeti Bhandari", role: "Operations & Outreach Lead", initials: "PB" },
  ];

  const leadership = [
    { name: "Amritha S. Nair", role: "Convener", initials: "AN" },
    { name: "Arnav Srivastava", role: "Co-Convener", initials: "AS" },
  ];

  const coreTeam = [
    { name: "Kishlay", role: "Treasurer", initials: "K" },
    { name: "Harkeerat", role: "Technical Head", initials: "H" },
    { name: "Ansh", role: "Research Coordinator", initials: "A" },
    { name: "Anushka", role: "Event Head", initials: "An" },
    { name: "Ameetesh", role: "Design & Media Lead", initials: "Am" },
    { name: "Nikhil", role: "Content Editor", initials: "N" },
  ];

  const teamMembers = [
    "Swarnojjwal Guha", "Kumar Vaibhav", "Sakshi", "Shubham Sharma",
    "Tanishq Dua", "Ashmeet Singh", "Jatin Vohra", "Misbah Ul Islam",
    "Aditya Kumar", "Shubham Singh Panwar", "Anushy", "Anoushka Basu",
    "Arnav Sood", "Nayana M S", "Pakhi Das", "Lavanya Sharma",
    "Ansh VJK", "Keshav Bansal", "Bhavika Pande", "Dibyajyoti Debata",
    "Tarun Das", "Srija Das", "Tanmay Madan", "Mukund Devang",
    "Aditya Adhikari", "Laqshya Chawan", "Intekhab Akhtar", "Devika Nair",
    "Rushil Sharma", "Saveer Singh Sheokand", "Asavari Nautiyal", "Lakshya Anand",
    "Prakhar Parashar", "Madhav Dhakal", "Shaurya Singh", "Madan Mohan Pushkar",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-20 px-4"> {/* <-- THIS LINE IS CHANGED */}
      <div className="container mx-auto py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-cosmic-cyan mb-4 font-orbitron">
            ASTRA
          </h1>
          <p className="text-xl md:text-2xl text-cosmic-silver mb-2 font-orbitron tracking-wider">
            ADVANCING SCIENCE, TECHNOLOGY, AND RESEARCH IN ACADEMIA
          </p>
          <p className="text-lg md:text-xl text-cosmic-cyan font-orbitron">
            THE PHYSICS AND TECHNOLOGY CLUB
          </p>
        </motion.div>

        {/* Faculty Section */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-cosmic-cyan mb-8 text-center font-orbitron">
            Faculty Members
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {facultyMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-dark-secondary/80 border-cosmic-cyan/30 hover:border-cosmic-cyan transition-colors">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-cosmic-cyan">
                      <AvatarFallback className="bg-cosmic-cyan text-dark-primary font-bold text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-cosmic-silver mb-2">
                      {member.name}
                    </h3>
                    <p className="text-cosmic-cyan font-orbitron">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Leadership Section */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-cosmic-cyan mb-8 text-center font-orbitron">
            Student Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {leadership.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-dark-secondary/80 border-cosmic-cyan/30 hover:border-cosmic-cyan transition-colors">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-cosmic-cyan">
                      <AvatarFallback className="bg-cosmic-cyan text-dark-primary font-bold text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-semibold text-cosmic-silver mb-2">
                      {member.name}
                    </h3>
                    <p className="text-cosmic-cyan font-orbitron text-lg">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Core Team Section */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-cosmic-cyan mb-8 text-center font-orbitron">
            Core Team
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-dark-secondary/80 border-cosmic-cyan/30 hover:border-cosmic-cyan transition-colors">
                  <CardContent className="p-4 text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-3 border-2 border-cosmic-cyan">
                      <AvatarFallback className="bg-cosmic-cyan text-dark-primary font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-cosmic-silver mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cosmic-cyan font-orbitron">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Members Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-cosmic-cyan mb-8 text-center font-orbitron">
            Team Members
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-dark-secondary/60 border-cosmic-cyan/20 hover:border-cosmic-cyan/50 transition-colors">
                  <CardContent className="p-3 text-center">
                    <Avatar className="w-12 h-12 mx-auto mb-2 border border-cosmic-cyan/50">
                      <AvatarFallback className="bg-cosmic-cyan/20 text-cosmic-cyan text-sm">
                        {member.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-cosmic-silver font-medium">
                      {member}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Members;