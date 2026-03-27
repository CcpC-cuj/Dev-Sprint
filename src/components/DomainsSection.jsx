import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Landmark,
  GraduationCap,
  Leaf,
  Sparkles,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

const domains = [
  {
    icon: Heart,
    title: "Healthcare",
    desc: "Online appointment systems, telemedicine platforms, health record management.",
    problems: [
      {
        title: "Smart Doctor Appointment & Queue Management",
        problem:
          "Patients often wait long hours at hospitals due to inefficient appointment systems.",
        challenge:
          "Build a web-based appointment and queue management platform where patients can book time slots and track waiting status in real time.",
        hints: [
          "Doctor search and availability",
          "Appointment booking",
          "Live queue tracker",
          "Patient dashboard",
          "Admin panel for doctors"
        ]
      },
      {
        title: "Mental Health Support Web Platform",
        problem:
          "Many students hesitate to seek mental health support due to lack of accessible resources.",
        challenge:
          "Develop a web platform that provides mental health resources, self-assessment tools, and access to support communities.",
        hints: [
          "Anonymous support forum",
          "Mood tracking",
          "Mental health resource library",
          "Appointment booking with counselors"
        ]
      }
    ],
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Budget trackers, financial dashboards, expense management tools.",
    problems: [
      {
        title: "Smart Budget & Expense Tracker",
        problem:
          "Students and young professionals often struggle to track spending.",
        challenge:
          "Develop a web application that helps users track expenses and manage monthly budgets.",
        hints: [
          "Expense logging",
          "Category-based spending",
          "Budget goals",
          "Visual spending charts"
        ]
      },
      {
        title: "Financial Literacy Learning Platform",
        problem:
          "Many students lack basic financial knowledge like savings, investment, and budgeting.",
        challenge:
          "Create an interactive web platform that teaches financial literacy through simple modules and quizzes.",
        hints: [
          "Learning modules",
          "Financial calculators",
          "Progress tracking",
          "Quiz-based learning"
        ]
      }
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "E-learning platforms, collaborative study tools, student progress systems.",
    problems: [
      {
        title: "Collaborative Study Platform",
        problem:
          "Students often study alone without access to peer collaboration.",
        challenge:
          "Build a web platform where students can create study groups, share resources, and collaborate on learning tasks.",
        hints: [
          "Group creation",
          "Shared notes",
          "Study discussion boards",
          "Collaborative task lists"
        ]
      },
      {
        title: "Skill Exchange Platform",
        problem:
          "Students possess different skills but lack platforms to share and learn from each other.",
        challenge:
          "Create a web platform where students can teach and learn skills from peers.",
        hints: [
          "Skill listing",
          "Peer-to-peer teaching",
          "Session scheduling",
          "Skill rating system"
        ]
      }
    ],
  },
  {
    icon: Leaf,
    title: "Agriculture",
    desc: "Crop advisory tools, farmer marketplace portals, weather-based farming systems.",
    problems: [
      {
        title: "Farmer Market Connect",
        problem:
          "Farmers often struggle to sell products directly to consumers.",
        challenge:
          "Build a web marketplace that connects farmers directly with buyers.",
        hints: [
          "Product listings",
          "Direct buyer-farmer contact",
          "Price comparison",
          "Order management"
        ]
      },
      {
        title: "Agricultural Resource Sharing Platform",
        problem:
          "Small farmers often cannot afford expensive farming equipment.",
        challenge:
          "Create a web platform where farmers can rent or share farming equipment locally.",
        hints: [
          "Equipment listings",
          "Rental booking",
          "Location-based search",
          "User ratings"
        ]
      }
    ]
  },
  {
    icon: Sparkles,
    title: "Open Innovation",
    desc: "Any innovative web-based solution solving unique problems.",
    problems: [
      {
        title: "Civic Issue Reporting & Escalation Platform",
        problem:
          "Citizens often struggle to report civic issues such as potholes, garbage accumulation, broken streetlights, or water supply problems. Even when issues are reported, they may not reach the appropriate authorities or receive timely attention.",
        challenge:
          "Build a location-based civic issue reporting platform where citizens can post verified reports of local problems. Other users can view and upvote issues to highlight their importance. When an issue reaches a certain threshold of upvotes, the system should automatically notify the relevant government authorities.",
        hints: [
          "User authentication to ensure authentic reports",
          "Post issues with description, photos, and location",
          "Community upvoting system to prioritize issues",
          "Dashboard to track issue status and progress"
        ]
      },
      {
        title: "Public Transport Information Dashboard",
        problem:
          "Many cities lack reliable and accessible information about public bus services. Passengers often face difficulty in knowing bus routes, schedules, delays, and nearby stops.",
        challenge:
          "Build a web or mobile platform that provides real-time information about public transportation including routes, stops, schedules, and estimated arrival times. Include route planning and delay notifications.",
        hints: [
          "Bus route and stop information",
          "Real-time or estimated bus arrival times",
          "Route planning between two locations",
          "Notifications for delays or schedule changes",
        ]
      }
    ],
  },
];

const SpotlightCard = ({ children, onClick }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="card-surface feature-card relative overflow-hidden w-full max-w-[300px] cursor-pointer"
    >
      {hovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, hsla(255,100%,62%,0.08), transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

const DomainsSection = () => {
  const [activeDomain, setActiveDomain] = useState(null);

  return (
    <section id="domains" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="section-label">Target Sectors</p>
          <h2 className="section-title">Application Domains</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <SpotlightCard onClick={() => setActiveDomain(d)}>
                <div className="feature-icon">
                  <d.icon size={26} />
                </div>
                <h3 className="feature-title">{d.title}</h3>
                <p className="feature-desc">{d.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
          <AnimatePresence>
            {activeDomain && (
              <motion.div
                className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={() => setActiveDomain(null)}
                />

                {/* Modal */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="
                    card-surface
                    relative
                    p-6 sm:p-8
                    max-w-5xl
                    w-full
                    max-h-[90vh]
                    overflow-y-auto
                    custom-scroll
                    rounded-2xl
                    "
                >
                  {/* Close */}
                  <button
                    onClick={() => setActiveDomain(null)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-accent"
                  >
                    <X size={20} />
                  </button>

                  {/* Title */}
                  <h3 className="feature-title mb-4">
                    {activeDomain.title}
                  </h3>

                  {/* Problem Statements */}
                  <div className="space-y-6">

                    {activeDomain.problems.map((p, idx) => (
                      <div key={idx} className="bg-slate-800/50 p-4 rounded-lg">

                        {/* Title */}
                        <h4 className="font-semibold text-[hsl(185,100%,50%)] mb-2">
                          {idx + 1}. {p.title}
                        </h4>

                        {/* Problem */}
                        <p className="text-sm text-slate-300 mb-2">
                          <span className="font-semibold text-white">Problem: </span>
                          {p.problem}
                        </p>

                        {/* Challenge */}
                        <p className="text-sm text-slate-300 mb-3">
                          <span className="font-semibold text-white">Challenge: </span>
                          {p.challenge}
                        </p>

                        {/* Hints */}
                        <div>
                          <p className="font-semibold text-white mb-1">Hint:</p>
                          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                            {p.hints.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    ))}

                  </div>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

      </div>
    </section>
  );
};

export default DomainsSection;