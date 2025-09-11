import { useState } from "react";
import { Card } from './components/ui/Card';
import { CardContent } from './components/ui/CardContent';
import { Button } from './components/ui/Button';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import resumeFile from './assets/DirghaK_resume.pdf';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Portfolio() {

  const skills = [
    'Kotlin', 'Java', 'Android SDK', 'Jetpack', 'Firebase',
    'REST API Integration', 'MVVM & MVP', 'Google Maps API',
    'Unit Testing', 'Retrofit', 'JSON/XML Parsing', 'CI/CD',
    'Git & SVN', 'Material Design Guidelines', 'Animations'
  ];
  const contacts = [
    {
      icon: <FaEnvelope size={24} />,
      link: 'mailto:dirghakathiriya@example.com',
      title: 'Email'
    },
    {
      icon: <FaLinkedin size={24} />,
      link: 'https://www.linkedin.com/in/dirghak/',
      title: 'LinkedIn'
    },
    {
      icon: <FaGithub size={24} />,
      link: 'https://github.com/dirghak',
      title: 'GitHub'
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      link: '#', // No link needed for location
      title: 'Location'
    }
  ];
  const projects = [
    {
      category: 'Animal Husbandry Apps',
      items: [
        {
          name: 'Farm365',
          description: "Farmers can record animals, milk data, and book vet appointments.",
          tech: ['Android Studio', 'Jetpack', 'Room', 'Retrofit', 'Push Notification'],
          link: 'https://play.google.com/store/apps/details?id=com.ps.farm365'
        },
        {
          name: 'Farm365 Partner',
          description: "Track lactation cycles and breeding events like insemination, pregnancy diagnosis, calving.",
          tech: ['Android Studio', 'Jetpack', 'Room', 'Retrofit', 'Push Notification'],
          link: 'https://play.google.com/store/apps/details?id=com.prompt.promptai'
        },
        {
          name: 'Amul AI',
          description: "Amul’s farmers can track lactation cycle and perform breeding events.",
          tech: ['Android Studio', 'Jetpack', 'Room', 'Retrofit', 'Push Notification'],
          link: 'https://play.google.com/store/apps/details?id=com.prompt.amulai'
        },
        {
          name: 'Prompt Device App',
          description: "Fat measurement from milk via milk-fat testing machine using Bluetooth.",
          tech: ['Android Studio', 'Bluetooth', 'Embedded System'],
          link: 'https://www.promptsoftech.com/case-studies/milk-fat-testing-solution.html'
        },
      ]
    },
    {
      category: 'eBooks & Learning',
      items: [
        {
          name: 'Matrubharti eBooks',
          description: "Read eBooks in multiple languages like Gujarati, Hindi, English, Marathi.",
          tech: ['Android Studio', 'EPUB Reader', 'Java'],
          link: 'https://play.google.com/store/apps/details?id=com.nichetech.matrubharti'
        },
        {
          name: 'Matrubharti for Authors',
          description: "Allows authors to manage profiles and connect with fans.",
          tech: ['Android Studio'],
          link: 'https://play.google.com/store/apps/details?id=com.nichetech.matrubhartiauthor'
        }
      ]
    },
    {
      category: 'Event & Check-in Apps',
      items: [
        {
          name: 'Check-in Now Plus',
          description: "Fast guest check-in app, works online/offline.",
          tech: ['Android Studio', 'GPS'],
          link: 'https://play.google.com/store/apps/details?id=com.in4medinc.checkinplus'
        },
        {
          name: 'Event4me 2018',
          description: "Official event app for McKesson Events with agenda, maps, and exhibitor info.",
          tech: ['Android Studio', 'Google Maps'],
          link: 'https://play.google.com/store/apps/details?id=com.mckesson.ideashare'
        },
      ]
    },
    {
      category: 'Social & Media Apps',
      items: [
        {
          name: 'SnapZonez',
          description: "Photo booth app with animated selfies and location-based sharing.",
          tech: ['Android Studio', 'GPS', 'FFmpeg'],
          link: 'https://play.google.com/store/apps/details?id=com.snapzonez'
        },
        {
          name: 'SnapBooth',
          description: "Photo booth app that registers with SnapZonez.",
          tech: ['Android Studio', 'FFmpeg']
        },
        {
          name: 'Postcard',
          description: "Create and send postcards online with images, messages, and PayPal integration.",
          tech: ['Android Studio', 'Photo Collage', 'GPS', 'PayPal']
        },
        {
          name: 'FiatSelfi',
          description: "Event app to replace green screen backgrounds in video and share on social media.",
          tech: ['Android Studio', 'OpenGL']
        }
      ]
    },
    {
      category: 'Government & Utility Apps',
      items: [
        {
          name: 'RMC (Rajkot Municipal Corporation)',
          description: "Provides public/government services via mobile.",
          tech: ['Eclipse', 'Android SDK'],
          link: 'https://play.google.com/store/apps/details?id=com.app.rmcgov'
        },
        {
          name: 'Drive Safe',
          description: "Disables teen phones while driving to prevent distractions.",
          tech: ['Android Studio', 'GPS'],
          link: 'https://play.google.com/store/apps/details?id=com.app.nt.drivesaf'
        }
      ]
    },
    {
      category: 'Fitness & Lifestyle Apps',
      items: [
        {
          name: 'PitFitness',
          description: "Exercise app for body parts with timer and media player.",
          tech: ['Eclipse', 'SQLite', 'Media Player'],
          link: 'https://market.android.com/details?id=com.pitfitness'
        }
      ]
    },
    {
      category: 'Marketplace Apps',
      items: [
        {
          name: 'Baazar',
          description: "Marketplace to post products for sale with social media sharing.",
          tech: ['Eclipse', 'SQLite', 'JSON', 'Push Notification']
        },
        {
          name: 'Yeeb',
          description: "Marketplace app to post products for sale and buy from others.",
          tech: ['Eclipse', 'SQLite', 'JSON', 'Push Notification'],
          link: 'https://market.android.com/details?id=com.yeeb'
        }
      ]
    },
    {
      category: 'Other Notable Apps',
      items: [
        {
          name: 'NowArchive',
          description: "Discovery platform for videos/photos, integrated with marketplace.",
          tech: ['Android Studio', 'Parse.com', 'Fabric.io', 'PayPal'],
          link: 'https://play.google.com/store/apps/details?id=com.sui.nowarchive'
        },
        {
          name: 'iPoint Global TV',
          description: "View live TV channels and videos with subscription.",
          tech: ['Eclipse', 'SQLite', 'JSON', 'Live Streaming'],
          link: 'https://market.android.com/details?id=com.ipointApp'
        }
      ]
    }
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">Dirgha K</h1>
        <nav className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          {/* <a href="#blog">Blog</a> */}
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Hi, I’m Dirgha 👋</h1>
        <p className="text-xl text-gray-700 mb-6">
          Android & Mobile App Developer crafting fast, intuitive, and scalable mobile applications with Kotlin & Java.
        </p>
        <div className="flex justify-center gap-4">
        <a href="#projects">
          <Button
            size="lg"
            variant="solid"
          >
            View My Work
          </Button>
          </a>
          <a href={resumeFile} download>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
      {/* <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Hi, I’m Dirgha 👋
        </motion.h2>
        <p className="mt-4 text-lg max-w-xl">
        Sr. Android Developer | 12+ yrs | Kotlin, Jetpack Compose, Java | Mobile Solutions Expert
        </p>
        <div className="mt-6 space-x-4">
        <a href="#projects">
        <Button>View My Work</Button>
        </a>
         
          <Button variant="outline">Download Resume</Button>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-16 bg-white" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              I’m an Android developer based in Surrey, Canada with over 10 years of experience building apps for Android and iOS. I specialize in creating high-performance, user-friendly mobile applications using Kotlin, Java, and modern frameworks.
            </p>
            <p className="text-gray-700 mb-4">
              I build apps with clean architecture, scalable code, and best UI/UX practices. I have experience with REST APIs, Firebase backend, Material Design, animations, location-based services, and unit testing. I thrive in Agile environments and mentoring teams.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills & Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>10+ years experience in Android & iOS development</li>
              <li>Kotlin, Java, Android SDK, Jetpack, Firebase</li>
              <li>MVVM & MVP architecture, REST API integration</li>
              <li>Google Maps & location-based applications</li>
              <li>Unit Testing, Retrofit, JSON/XML parsing</li>
              <li>CI/CD pipelines, Git & SVN, Agile team experience</li>
              <li>UI/UX design following Material Guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      {/* <section id="about" className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-2xl font-bold mb-6">About Me</h3>
        <p>
          I’m an Android Developer passionate about creating user-friendly and scalable apps.
          Skilled in Kotlin, Java, Firebase, and Jetpack libraries, I love solving problems and
          building apps that make life easier.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center">
          <div className="p-4 bg-white shadow rounded-2xl">📱 30+ Apps</div>
          <div className="p-4 bg-white shadow rounded-2xl">👩‍💻 12+ Years</div>
          <div className="p-4 bg-white shadow rounded-2xl">🌍 Global Clients</div>
          <div className="p-4 bg-white shadow rounded-2xl">⚡ Problem Solver</div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        {projects.map((group, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{group.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((proj, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent>
                    <h4 className="text-xl font-bold mb-2">{proj.name}</h4>
                    <p className="text-gray-700 mb-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {proj.tech.map((tech, j) => (
                        <span key={j} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                    {proj.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2"
                        onClick={() => window.open(proj.link, '_blank')}
                      >
                        View App
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Resume Section */}
      <section className="py-16 bg-gray-50" id="resume">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resume</h2>
        
        <div className="text-center mb-8">
          <a href={resumeFile} download>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Download My Resume
            </button>
          </a>
        </div>
        
        <div className="space-y-6 text-gray-700">
          <h3 className="text-xl font-semibold">Experience</h3>
          <ul className="list-disc list-inside space-y-2">
            {/* <li>
              <strong>Self Employed | Freelance Developer</strong> – Feb 2024 - Present, Canada
            </li> */}
            <li>
              <strong>Plumscope Inc. | Android Technical Lead</strong> – Oct 2022 - Present, Ontario, Canada
            </li>
            <li>
              <strong>Prompt Softech | Android Team Lead & Senior Android Developer</strong> – Nov 2019 - Sep 2022, Ahmedabad, India
            </li>
            <li>
              <strong>AppEsperta Pvt. Ltd. | Senior Android Developer</strong> – Jan 2016 - Oct 2019, Ahmedabad, India
            </li>
            <li>
              <strong>NicheTech | Senior Android Developer</strong> – Oct 2014 - Sep 2015, Ahmedabad, India
            </li>
            <li>
              <strong>Prismetric Technologies | Android Developer</strong> – Dec 2012 - Sep 2014, Gandhinagar, India
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Education</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Veer Narmad South Gujarat University</strong> – Bachelor of Engineering (BE), Computer Engineering, 2007 - 2011
            </li>
          </ul>
        </div>
      </div>
    </section>
      {/* <section id="resume" className="max-w-5xl mx-auto py-20 px-4">
        <h3 className="text-2xl font-bold mb-6">Resume</h3>
        <p>
          A detailed PDF version of my resume is available below. Highlights include leading Android projects,
          optimizing app performance, and collaborating with cross-functional teams.
        </p>
        <div className="mt-6">
          <Button>Download Resume</Button>
        </div>
      </section> */}

      {/* Blog Section */}
      {/* <section id="blog" className="bg-gray-100 py-20 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">Blog</h3>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Coming soon: my thoughts on Android development, mobile UI/UX, and developer journeys.
        </p>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 bg-white" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
</div>
</section>
<section className="py-16 bg-white" id="contact">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Me</h3>
          <div className="flex justify-center gap-6">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                title={c.title}
                className={`text-gray-700 hover:text-blue-600 transition-colors`}
              >
                {c.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>


      {/* <section id="contact" className="max-w-5xl mx-auto py-20 px-4 text-center">
        <h3 className="text-2xl font-bold mb-6">Contact</h3>
        <p>If you’d like to work with me or have any questions, let’s connect!</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="mailto:dirghakathiriya@gmail.com"><Mail /></a>
          <a href="https://github.com/dirghak" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/dirghak" target="_blank" rel="noreferrer"><Linkedin /></a>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Dirgha Kathiriya. All rights reserved.
      </footer>
    </div>
  );
}
