import resumeFile from './assets/DirghaK_resume.pdf';
import ProfileImg from './assets/profile.jpeg';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone} from 'react-icons/fa';

export default function Portfolio() {
  const contacts = [
    {
      icon: <FaEnvelope size={24} />,
      link: 'mailto:dirghakathiriya@gmail.com',
      title: 'Email',
      color: 'red-600'
    },
    {
      icon: <FaPhone size={24} />,
      link: 'https://calendly.com/dirghakathiriya/30min',
      title: 'Book a Call',
      color: 'green-600'
    },
    {
      icon: <FaLinkedin size={24} />,
      link: 'https://www.linkedin.com/in/dirghak/',
      title: 'LinkedIn',
      color: 'blue-600'
    },
    {
      icon: <FaGithub size={24} />,
      link: 'https://github.com/dirghak',
      title: 'GitHub',
      color: 'gray-800'
    }
  ];

  const skillCategories = [
    {
      category: "Technical Skills",
      skills: [
        "Java", "Kotlin", "Android SDK/NDK", "iOS (Swift)", "Jetpack Compose",
        "MVVM", "MVP", "Retrofit", "SQLite", "Clean Architecture", "Room Database", "Firebase", "Jetpack", 
        "Git", "SVN", "Jenkins","XML","Junit", "Volley", "Jira", "Espresso"
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        "REST API Integration", "Offline-First Apps", "NFC & Bluetooth Technologies",
        "Performance Optimization", "Google Maps & GPS", "Bluetooth & IoT Integration",
        "Cloud Platforms (AWS, Google Cloud)","Crash Reduction", "FFmpeg (Video/GIF)","Play Store Deployment"
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving", "Communication",
        "Team Leadership", "Time Management", "Attention to Detail", "Adaptability",
        "Cross-functional Collaboration", "Critical Thinking", "Mentoring & Team Support","Agile / Scrum Experience"
      ],
    },
    {
      category: "Leadership & Other",
      skills: [
        "Team Guidance & Code Review", 
        "Requirement Analysis", "Work Estimation",
        "Technical Documentation", "Material Design Standards", "Willingness to learn", "Creativity", "Continuous Improvement", "Ownership"
      ],
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold"><a href="#intro">Dirgha K</a></h1>
        <nav className="space-x-6">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          {/* <a href="#blog">Blog</a> */}
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-50 px-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img 
            src={ProfileImg} 
            alt="Dirgha Kathiriya" 
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I’m Dirgha Kathiriya</h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-6">
        Android & Mobile App Developer | 10+ Years Experience {/* | Vancouver, BC */}
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          I build fast, reliable, and user-focused mobile applications across industries — 
          from agriculture and healthcare to events, media, and e-commerce. My focus is on 
          performance, stability, and creating meaningful digital experiences.
        </p>
        <div className="flex gap-4">
          <a href="#projects" aria-label="View my work">
            <button className="px-6 py-3 rounded-md font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
              View My Work
            </button>
          </a>
          <a href={resumeFile} download>
            <button className="px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800">
              Download Resume
            </button>
          </a>
          <a href="#contact" aria-label="Connect with Me">
            <button className="px-6 py-3 rounded-md font-semibold text-base bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:scale-105 transition duration-300">
            Connect with Me
            </button>
          </a>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="text-lg text-gray-700 space-y-6">
            <p>
            As a Senior Android Developer at Plumscope Inc., I lead the development of enterprise-level Android applications, driving a 30% increase in deployment speed through the implementation of efficient CI/CD pipelines. My role involves enhancing application stability and user satisfaction by collaborating closely with UI/UX designers to integrate accessibility features, resulting in a 15% improvement in user satisfaction scores.
            </p>
            <p>
            Previously, I served as a Senior Android Developer and Team Lead at Prompt Softech, where I directed a team to deliver high-performance applications, achieving an 80% boost in app performance. My educational background in Computer Engineering from Veer Narmad South Gujarat University provided a strong foundation in software development, mobile application development, and cloud computing.
            </p>
            <p>
            I possess a robust set of technical skills, including Java, Kotlin, and Android SDK/NDK, complemented by software knowledge in tools like Retrofit, Firebase, and Jenkins. My certifications, such as the Meta Android Developer Certification, underscore my commitment to continuous learning and mastery of Android development.
            </p>
            <p>
            What sets me apart is my ability to lead and mentor teams, fostering a collaborative environment that enhances productivity and innovation. I am passionate about building user-centric applications and am eager to bring my expertise in modern architectures and agile practices to a forward-thinking organization. Let's connect to explore how I can contribute to your team's success.
            </p>
          </div>
        </div>
      </section>
 
      <section id="experience" className="py-20 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="text-center mb-8">
          <a href={resumeFile} download>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Download My Resume
            </button>
          </a>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Plumscope */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Android Technical Lead — Plumscope Inc.</h3>
            <p className="text-gray-600 text-sm mb-2">Oct 2022 – Present · Vancouver, BC</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Spearheaded the development of enterprise Android applications, achieving a <strong>30%</strong> increase in deployment speed by implementing efficient CI/CD pipelines.</li>
              <li>Enhanced application stability, reducing crash rates by <strong>50%</strong> through comprehensive debugging and testing strategies.</li>
              <li>Elevated team productivity by <strong>20%</strong> by mentoring junior developers and fostering a collaborative coding environment.</li>
              <li>Collaborated with UI/UX designers to integrate accessibility features, improving user satisfaction scores by <strong>15%</strong>.</li>
            </ul>
          </div>

          {/* Prompt Softech */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Android Team Lead — Prompt Softech</h3>
            <p className="text-gray-600 text-sm mb-2">2019 – 2022 · Ahmedabad, India</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Planned and delivered multiple Android projects with Agile methodology.</li>
              <li>Trained and managed a team of developers, improving delivery quality.</li>
              <li>Handled Git/SVN branching strategies across modules.</li>
            </ul>
          </div>

          {/* Earlier Roles */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Senior Android Developer — Various Companies</h3>
            <p className="text-gray-600 text-sm mb-2">2012 – 2019 · India</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Delivered 20+ production apps across e-commerce, social, and utilities.</li>
              <li>Integrated Google Maps, payment gateways, and social APIs.</li>
              <li>Developed scalable apps with clean architecture (MVP/MVVM).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Farm365 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Farm365 — Animal Husbandry App</h3>
            <p className="text-gray-700 mb-4">
              Farm365 is designed to support farmers in managing livestock health and productivity. 
              It allows farmers to register animals, track daily milk yield, and schedule 
              appointments with veterinarians. I led Android development (team of 5) and designed an offline-first data architecture with Room, 
              built seamless server communication using Retrofit, and designed notifications for 
              medical events.Worked closely with backend engineers to ensure smooth sync across devices. The app made livestock management more accessible and efficient, 
              especially for rural farmers adapting to digital tools.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Kotlin · Jetpack · Room · Retrofit · Push Notifications</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.ps.farm365"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800">
                View App
              </button>
            </a>
          </div>

          {/* Matrubharti eBooks */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Matrubharti eBooks — Multi-language Reader</h3>
            <p className="text-gray-700 mb-4">
              Matrubharti is a mobile eBook reader that supports Gujarati, Hindi, English, and 
              Marathi languages.As senior developer in a 3-person team, I integrated an EPUB reader, implemented offline reading 
              features, and ensured smooth navigation for multi-language support. I ensured compliance with Material Design and optimized UI for long reading sessions.The app allowed 
              thousands of readers to access regional literature easily, making it one of the first of its kind in India.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Java · Android Studio · EPUB Reader</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.nichetech.matrubharti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800">
                View App
              </button>
            </a>
          </div>

          {/* Canaray Mobile app */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Canaray Mobile app</h3>
            <p className="text-gray-700 mb-4">
              As the sole developer, I designed and built the Canaray Mobile app using Native Android and Jetpack Compose to provide a secure and efficient platform for dentists. My work involved creating a seamless user experience and implementing key features like client data search and account management. The outcome was a robust application that streamlined data access, significantly improving the workflow for dental professionals. This project successfully launched on the Google Play Store, showcasing my ability to deliver a complete mobile solution from concept to completion.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Kotlin · Android Studio · Jetpack Compose · MVVM</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.canaray"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800">
                View App
              </button>
            </a>
          </div>

          {/* Farm365 Partner */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Farm365 Partner — Breeding Management</h3>
            <p className="text-gray-700 mb-4">
              Built as a companion app to Farm365, Farm365 Partner helps farmers manage breeding 
              cycles and key events such as insemination, pregnancy checks, and calving. As part of a 4-member Android team, My role 
              focused on creating calendar-based workflows, reliable offline data handling, and 
              notification reminders.I supported a junior developer with mentorship and reviewed their code.
              Partnered with QA to improve data accuracy by 25%. This app helped farmers improve herd health and optimize 
              breeding decisions using digital records instead of paper logs.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Kotlin · Room · Retrofit · Push Notifications</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.prompt.promptai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800">
                View App
              </button>
            </a>
          </div>

          {/* Amul AI */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Amul AI — Breeding Management</h3>
            <p className="text-gray-700 mb-4">
              Developed for Amul’s extensive farmer network, this app provides tools for 
              tracking animal lactation and breeding cycles at scale. As Android lead (team of 4), I optimized background sync for large datasets, reduced crashes by 40%, and improved performance with Jetpack architecture. I collaborated with product managers to refine breeding workflows and improve usability. I worked on complex 
              event flows like calving and insemination, ensuring robustness with background 
              handling and crash-resistant design. This app modernized breeding data management 
              for one of India’s largest dairy cooperatives.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Jetpack · Room · Retrofit · Push Notifications</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.prompt.amulai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800">
                View App
              </button>
            </a>
          </div>

          {/* Rajkot Municipal Corporation (RMC) App */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">RMC Citizen App</h3>
            <p className="text-gray-700 mb-4">
              As a key developer for the Rajkot Municipal Corporation (RMC) App, I was responsible for creating a comprehensive digital platform to deliver essential online services to citizens. My work involved implementing core features such as secure online payment gateways for property and professional taxes, and a centralized system for downloading official certificates. The app also includes modules for online complaint submissions and bookings for community and sports facilities. This project successfully streamlined civic services, providing citizens with a convenient, single point of access to municipal operations and significantly enhancing citizen engagement.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Android Studio · REST APIs · Payment Gateway · Push Notifications</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.rmcgov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800">
                View App
              </button>
            </a>
          </div>

          {/* Prompt Device App */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Prompt Device App — Milk Fat Testing</h3>
            <p className="text-gray-700 mb-4">
              This app integrates with a Bluetooth-enabled milk fat testing device to digitize 
              dairy quality checks. As Android lead (team of 3), I developed the Bluetooth communication layer, data parsing 
              logic, and offline-to-online synchronization system. It significantly reduced 
              manual errors and improved reliability for technicians working in areas with 
              limited connectivity. I also coordinated directly with the embedded hardware team. This solution reduced manual errors and made fat testing seamless for rural dairy operators.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Android Studio · Bluetooth · Room · Retrofit</p>
            <a href="mailto:dirghakathiriya@gmail.com?subject=Demo%20Request%20-%20Prompt%20Device%20App">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                Request Private Demo
              </button>
            </a>
          </div>

          {/* SnapZonez */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">SnapZonez — Photo Booth & Social Sharing</h3>
            <p className="text-gray-700 mb-4">
              SnapZonez brought a photo booth experience to mobile. Users could capture fun 
              selfies, apply GIF/video effects with FFmpeg, and share them locally or online. 
              I built the media processing pipeline, handled GPS-based location features, and 
              optimized real-time effects. The app offered a unique blend of entertainment and 
              social interaction tied to physical locations.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Android Studio · GPS · FFmpeg · Video Processing</p>
            <a href="mailto:dirghakathiriya@gmail.com?subject=Demo%20Request%20-%20SnapZonez%20App">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                Request Private Demo
              </button>
            </a>
          </div>

          {/* Event4Me */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Event4Me — Event Management App</h3>
            <p className="text-gray-700 mb-4">
              Event4Me was the official app for McKesson events, providing agendas, maps, 
              exhibitor info, and check-in features. I contributed to the event mapping system, 
              offline-first guest check-in, and syncing flows to handle thousands of attendees 
              simultaneously. The app ensured smoother event operations and better attendee 
              engagement at large-scale conferences.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Android Studio · Google Maps · Offline Sync</p>
            <a href="mailto:dirghakathiriya@gmail.com?subject=Demo%20Request%20%20Event4Me%20App">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                Request Private Demo
              </button>
            </a>
          </div>

          {/* Drive Safe */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Drive Safe — Parental Control for Driving</h3>
            <p className="text-gray-700 mb-4">
              Drive Safe allows parents to disable phone use while their teens are driving, 
              reducing distractions on the road. I designed the GPS-based detection logic and 
              implemented controls that balance safety with user privacy. This app highlighted 
              my ability to create socially impactful apps with careful UX considerations.
            </p>
            <p className="text-sm text-gray-600 mb-4"><strong>Tech:</strong> Android Studio · GPS</p>
            <a href="mailto:dirghakathiriya@gmail.com?subject=Demo%20Request%20-%20Drive%20Safe%20App">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                Request Private Demo
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="other-projects" className="py-20 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Other Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Biz-Esperta */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Biz-Esperta</h3>
            <p className="text-gray-600 text-sm mt-2">
              Sales management app enabling managers to track sales reporters, 
              view customer histories, and manage orders efficiently.
            </p>
          </div>

          {/* Matrubharti for Authors */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Matrubharti for Authors</h3>
            <p className="text-gray-600 text-sm mt-2">
              Companion app for writers to maintain profiles, connect with fans, 
              and manage content publishing workflows.
            </p>
          </div>

          {/* Jail Mail */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Jail Mail</h3>
            <p className="text-gray-600 text-sm mt-2">
              Allowed users to send letters, photos, and money orders digitally 
              to correctional facilities, replacing manual processes.
            </p>
          </div>

          {/* PitFitness */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">PitFitness</h3>
            <p className="text-gray-600 text-sm mt-2">
              A guided fitness app with body-part-specific exercises, video 
              tutorials, and timers for structured workouts.
            </p>
          </div>

          {/* Baazar */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Baazar</h3>
            <p className="text-gray-600 text-sm mt-2">
              Online classifieds marketplace where users could post and 
              browse ads, similar to OLX, with push notifications.
            </p>
          </div>

          {/* Yeeb */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Yeeb</h3>
            <p className="text-gray-600 text-sm mt-2">
              A buy/sell app with integrated sharing across Twitter, Facebook, 
              and Instagram, supporting multimedia product posts.
            </p>
          </div>

          {/* TimeBox */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">TimeBox</h3>
            <p className="text-gray-600 text-sm mt-2">
              Custom video recording tool with countdown timers and 
              in-app media playback features.
            </p>
          </div>

          {/* Conex2share */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Conex2share</h3>
            <p className="text-gray-600 text-sm mt-2">
              Enabled users to capture video, audio, and photos, upload 
              to a server, and access synced media files.
            </p>
          </div>

          {/* Live RSS Reader */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Live RSS Reader (Times of India)</h3>
            <p className="text-gray-600 text-sm mt-2">
              Real-time RSS reader app for Times of India with DOM parsing 
              and push notifications for breaking news.
            </p>
          </div>

          {/* VOTS */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">VOTS</h3>
            <p className="text-gray-600 text-sm mt-2">
              Stock market tracking app that allowed users to watch 
              live updates and monitor rates with broadcast services.
            </p>
          </div>

          {/* CamelLeather */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">CamelLeather</h3>
            <p className="text-gray-600 text-sm mt-2">
              E-commerce app for purchasing camel leather products, 
              integrated with Firebase DB and PayPal payments.
            </p>
          </div>

          {/* NowArchive */}
          <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">NowArchive</h3>
            <p className="text-gray-600 text-sm mt-2">
              A discovery platform for videos/photos, enabling users 
              to share media instantly with news outlets and communities.
            </p>
          </div>

        </div>
      </section>
  
    {/* Skills Section */}
    <section id="skills" className="py-16 bg-gray-100 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((cat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">{cat.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="px-4 py-3 bg-blue-100 text-blue-800 font-medium rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Blog Section */}
      {/* <section id="blog" className="bg-gray-100 py-20 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">Blog</h3>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Coming soon: my thoughts on Android development, mobile UI/UX, and developer journeys.
        </p>
      </section> */}

    {/* Contact Section*/}
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let’s Work Together</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            I’d love to connect! Whether it’s about an opportunity, collaboration, or just a tech chat — feel free to reach out.
          </p>
          <div className="flex justify-center gap-6">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                title={c.title}
                className={`p-4 rounded-full bg-gray-100 shadow transition duration-300 hover:bg-${c.color} hover:text-white`}
              >
                {c.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
      
    {/* Footer */}
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      © {new Date().getFullYear()} Dirgha Kathiriya. All rights reserved.
    </footer>
    </div>
  );
}
