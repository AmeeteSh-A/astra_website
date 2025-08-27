import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Stargazing Night",
      date: "2024-01-15",
      time: "8:00 PM - 11:00 PM",
      location: "University Observatory",
      attendees: 45,
      description: "Join us for an evening of celestial observation with our professional telescopes."
    },
    {
      title: "Physics Lab Workshop", 
      date: "2024-01-22",
      time: "2:00 PM - 5:00 PM",
      location: "Physics Building Lab 201",
      attendees: 25,
      description: "Hands-on experiments with quantum mechanics and particle physics equipment."
    },
    {
      title: "Guest Lecture: Black Holes",
      date: "2024-01-28",
      time: "7:00 PM - 8:30 PM", 
      location: "Auditorium A",
      attendees: 120,
      description: "Dr. Sarah Chen presents her latest research on black hole event horizons."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="text-cosmic-gradient">Upcoming</span>
            <br />
            <span className="text-cosmic-cyan">Events</span>
          </h1>
          <p className="text-xl text-cosmic-light max-w-3xl mx-auto">
            Join us for exciting workshops, lectures, and stargazing sessions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              className="card-cosmic p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl text-cosmic-cyan mb-3">
                    {event.title}
                  </h3>
                  <p className="text-cosmic-light mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-cosmic-light">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-cosmic-teal" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-cosmic-teal" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-cosmic-teal" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-cosmic-teal" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>
                <button className="btn-cosmic self-start lg:self-center">
                  Register
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;