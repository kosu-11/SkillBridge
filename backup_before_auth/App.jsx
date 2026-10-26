
// // import { useState } from "react";
// // import "./App.css";

// // const features = [
// //   {
// //     icon: "🤝",
// //     title: "Exchange Skills",
// //     description:
// //       "Find students who can teach what you want to learn, and share the skills you already have.",
// //   },
// //   {
// //     icon: "🎯",
// //     title: "Discover Opportunities",
// //     description:
// //       "Find relevant hackathons, internships, scholarships, competitions and certifications.",
// //   },
// //   {
// //     icon: "✨",
// //     title: "Personalized Guidance",
// //     description:
// //       "Understand your skill gaps and discover what to learn next for your goals.",
// //   },
// // ];

// // function App() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <div className="app">
// //       <header className="navbar">
// //         <a className="brand" href="#home">
// //           <span className="brand-icon">S</span>
// //           SkillBridge<span className="brand-dot">.</span>
// //         </a>

// //         <button
// //           className="menu-toggle"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           aria-label="Toggle navigation"
// //         >
// //           ☰
// //         </button>

// //         <nav className={menuOpen ? "nav-links open" : "nav-links"}>
// //           <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
// //           <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
// //           <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
// //         </nav>

// //         <div className="nav-actions">
// //           <a className="login-link" href="#join">Log in</a>
// //           <a className="button button-dark nav-cta" href="#join">Get started ↗</a>
// //         </div>
// //       </header>

// //       <main>
// //         <section className="hero" id="home">
// //           <div className="hero-copy">
// //             <div className="eyebrow">
// //               <span className="live-dot" />
// //               LEARN TOGETHER. GROW TOGETHER.
// //             </div>

// //             <h1>
// //               Your skills have value.
// //               <br />
// //               <span>Share them.</span>
// //               <br />
// //               Discover what's next.
// //             </h1>

// //             <p className="hero-description">
// //               Connect with students who can teach you something new.
// //               Exchange skills for free and discover opportunities made
// //               for your interests, goals and potential.
// //             </p>

// //             <div className="hero-actions" id="join">
// //               <a className="button button-dark" href="#features">
// //                 Explore SkillBridge <span>↗</span>
// //               </a>
// //               <a className="button button-light" href="#how">
// //                 See how it works
// //               </a>
// //             </div>

// //             <div className="trust-row">
// //               <div className="avatar-stack">
// //                 <span>K</span><span>A</span><span>R</span><span>+</span>
// //               </div>
// //               <p><strong>Built for student growth</strong><br />Skills, community and opportunities in one place.</p>
// //             </div>
// //           </div>

// //           <div className="hero-art" aria-label="Skill exchange illustration">
// //             <div className="art-orbit orbit-one" />
// //             <div className="art-orbit orbit-two" />
// //             <div className="art-center">
// //               <span className="center-symbol">S</span>
// //               <strong>SkillBridge</strong>
// //               <small>Learn • Share • Grow</small>
// //             </div>
// //             <div className="skill-card card-java">
// //               <span className="skill-emoji">☕</span>
// //               <div><strong>Java</strong><small>Can teach</small></div>
// //               <span className="skill-status">↗</span>
// //             </div>
// //             <div className="skill-card card-design">
// //               <span className="skill-emoji">🎨</span>
// //               <div><strong>UI / UX</strong><small>Want to learn</small></div>
// //               <span className="skill-status">↗</span>
// //             </div>
// //             <div className="opportunity-card">
// //               <span>✦ PERSONALIZED FOR YOU</span>
// //               <strong>New opportunities await</strong>
// //               <small>Internships · Hackathons · More</small>
// //             </div>
// //             <div className="floating-star star-one">✳</div>
// //             <div className="floating-star star-two">✦</div>
// //           </div>
// //         </section>

// //         <section className="value-strip" id="community">
// //           <div><strong>01</strong><span>Share what you know</span></div>
// //           <div><strong>02</strong><span>Learn from your peers</span></div>
// //           <div><strong>03</strong><span>Find your next opportunity</span></div>
// //         </section>

// //         <section className="features-section" id="features">
// //           <div className="section-heading">
// //             <span className="eyebrow">ONE PLATFORM. MORE POSSIBILITIES.</span>
// //             <h2>More than a skill exchange.</h2>
// //             <p>Turn what you know into what you can become.</p>
// //           </div>

// //           <div className="feature-grid">
// //             {features.map((feature) => (
// //               <article className="feature-card" key={feature.title}>
// //                 <div className="feature-icon">{feature.icon}</div>
// //                 <h3>{feature.title}</h3>
// //                 <p>{feature.description}</p>
// //                 <a href="#how">Discover more <span>↗</span></a>
// //               </article>
// //             ))}
// //           </div>
// //         </section>

// //         <section className="how-section" id="how">
// //           <div>
// //             <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>
// //             <h2>Good things happen when students help students.</h2>
// //           </div>
// //           <div className="steps">
// //             <div><span>1</span><p><strong>Create your profile</strong><br />Add your skills, interests and goals.</p></div>
// //             <div><span>2</span><p><strong>Find your match</strong><br />Connect with peers and relevant opportunities.</p></div>
// //             <div><span>3</span><p><strong>Learn and grow</strong><br />Build skills and take your next step.</p></div>
// //           </div>
// //         </section>
// //       </main>

// //       <footer className="footer">
// //         <a className="brand" href="#home"><span className="brand-icon">S</span> SkillBridge<span className="brand-dot">.</span></a>
// //         <p>Skills shared. Opportunities unlocked.</p>
// //         <span>© 2026 SkillBridge · Built for students</span>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;
// import { useMemo, useState } from "react";
// import "./App.css";

// const features = [
//   { icon: "🤝", title: "Exchange Skills", description: "Find students who can teach what you want to learn, and share the skills you already have." },
//   { icon: "🎯", title: "Discover Opportunities", description: "Find relevant hackathons, internships, scholarships, competitions and certifications." },
//   { icon: "✨", title: "Personalized Guidance", description: "Understand your skill gaps and discover what to learn next for your goals." },
// ];

// const skills = [
//   { name: "Java Programming", category: "Programming", level: "Intermediate", teaches: "Core Java, OOP, DSA basics", wants: "Spring Boot", initials: "JP", color: "sage" },
//   { name: "React Development", category: "Web Development", level: "Intermediate", teaches: "React, components, hooks", wants: "Backend APIs", initials: "RD", color: "peach" },
//   { name: "Python Basics", category: "Programming", level: "Beginner friendly", teaches: "Python syntax, automation", wants: "Data analysis", initials: "PB", color: "gold" },
//   { name: "UI / UX Design", category: "Design", level: "Intermediate", teaches: "Figma, wireframes, prototyping", wants: "React basics", initials: "UX", color: "lavender" },
//   { name: "SQL & Databases", category: "Data", level: "Beginner friendly", teaches: "SQL queries, joins, schema", wants: "Data visualization", initials: "SQL", color: "blue" },
//   { name: "Public Speaking", category: "Communication", level: "All levels", teaches: "Presentations, confidence", wants: "Video editing", initials: "PS", color: "pink" },
// ];
// const categories = ["All skills", "Programming", "Web Development", "Design", "Data", "Communication"];

// const opportunities = [
//   { type: "HACKATHON", title: "Build for Tomorrow", detail: "Team-based problem solving", tag: "Teamwork" },
//   { type: "INTERNSHIP", title: "Frontend Developer Intern", detail: "Build projects and learn from mentors", tag: "Web Development" },
//   { type: "WORKSHOP", title: "Getting Started with AI", detail: "Explore practical AI concepts", tag: "Artificial Intelligence" },
// ];
// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All skills");
//   const [connected, setConnected] = useState([]);
//   const [notice, setNotice] = useState("");

//   const filteredSkills = useMemo(() => skills.filter((skill) => {
//     const matchesCategory = category === "All skills" || skill.category === category;
//     const text = `${skill.name} ${skill.category} ${skill.teaches} ${skill.wants}`.toLowerCase();
//     return matchesCategory && text.includes(search.toLowerCase().trim());
//   }), [search, category]);

//   const handleConnect = (name) => {
//     setConnected((current) => current.includes(name) ? current : [...current, name]);
//     setNotice(`Demo request sent to ${name}! Real connections will be enabled after backend integration.`);
//   };
//   return (
//     <div className="app">
//       <header className="navbar">
//         <a className="brand" href="#home"><span className="brand-icon">S</span>SkillBridge<span className="brand-dot">.</span></a>
//         <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
//         <nav className={menuOpen ? "nav-links open" : "nav-links"}>
//           <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
//           <a href="#skills" onClick={() => setMenuOpen(false)}>Explore skills</a>
//           <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
//           <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
//         </nav>
//         <div className="nav-actions">
//           <a className="login-link" href="#skills">Log in</a>
//           <a className="button button-dark nav-cta" href="#skills">Get started ↗</a>
//         </div>
//       </header>
//       <main>
//         <section className="hero" id="home">
//           <div className="hero-copy">
//             <div className="eyebrow"><span className="live-dot" />LEARN TOGETHER. GROW TOGETHER.</div>
//             <h1>Your skills have value.<br /><span>Share them.</span><br />Discover what's next.</h1>
//             <p className="hero-description">Connect with students who can teach you something new. Exchange skills for free and discover opportunities made for your interests, goals and potential.</p>
//             <div className="hero-actions" id="join">
//               <a className="button button-dark" href="#skills">Explore SkillBridge <span>↗</span></a>
//               <a className="button button-light" href="#how">See how it works</a>
//             </div>
//             <div className="trust-row"><div className="avatar-stack"><span>K</span><span>A</span><span>R</span><span>+</span></div><p><strong>Built for student growth</strong><br />Skills, community and opportunities in one place.</p></div>
//           </div>
//           <div className="hero-art" aria-label="Skill exchange illustration">
//             <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
//             <div className="art-center"><span className="center-symbol">S</span><strong>SkillBridge</strong><small>Learn • Share • Grow</small></div>
//             <div className="skill-card card-java"><span className="skill-emoji">☕</span><div><strong>Java</strong><small>Can teach</small></div><span className="skill-status">↗</span></div>
//             <div className="skill-card card-design"><span className="skill-emoji">🎨</span><div><strong>UI / UX</strong><small>Want to learn</small></div><span className="skill-status">↗</span></div>
//             <div className="opportunity-card"><span>✦ PERSONALIZED FOR YOU</span><strong>New opportunities await</strong><small>Internships · Hackathons · More</small></div>
//             <div className="floating-star star-one">✳</div><div className="floating-star star-two">✦</div>
//           </div>
//         </section>
//         <section className="value-strip" id="community"><div><strong>01</strong><span>Share what you know</span></div><div><strong>02</strong><span>Learn from your peers</span></div><div><strong>03</strong><span>Find your next opportunity</span></div></section>

//         <section className="features-section" id="features">
//           <div className="section-heading"><span className="eyebrow">ONE PLATFORM. MORE POSSIBILITIES.</span><h2>More than a skill exchange.</h2><p>Turn what you know into what you can become.</p></div>
//           <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.description}</p><a href="#skills">Discover more <span>↗</span></a></article>)}</div>
//         </section>

//         <section className="skills-section" id="skills">
//           <div className="section-heading skills-heading"><span className="eyebrow">MEET. SHARE. LEARN.</span><h2>Find your skill match.</h2><p>Explore what fellow students can teach and what they want to learn.</p></div>
//           <div className="skill-tools"><label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search skills, topics or interests..." aria-label="Search skills" /></label><div className="category-filters" aria-label="Filter by category">{categories.map((item) => <button key={item} className={category === item ? "filter-chip active" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
//           {notice && <div className="demo-notice" role="status"><span>✓</span><p>{notice}</p><button onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
//           <div className="skills-grid">{filteredSkills.map((skill) => <article className="person-card" key={skill.name}>
//             <div className="person-top"><div className={`person-avatar ${skill.color}`}>{skill.initials}</div><span className="level-pill">{skill.level}</span></div>
//             <span className="person-category">{skill.category}</span><h3>{skill.name}</h3><p className="person-desc">Can help with: <strong>{skill.teaches}</strong></p><div className="learn-row"><span>Wants to learn</span><strong>{skill.wants}</strong></div>
//             <button className={connected.includes(skill.name) ? "connect-button connected" : "connect-button"} onClick={() => handleConnect(skill.name)}>{connected.includes(skill.name) ? "Request sent ✓" : "Connect with student ↗"}</button>
//           </article>)}</div>
//           {filteredSkills.length === 0 && <div className="empty-state"><span>⌕</span><h3>No matching skills found</h3><p>Try another keyword or choose “All skills”.</p><button className="button button-dark" onClick={() => { setSearch(""); setCategory("All skills"); }}>Clear filters</button></div>}
//           <p className="prototype-note">Prototype preview · Sample student profiles · Connections are demo interactions</p>
//         </section>

//         <section className="opportunities-section" id="opportunities"><div className="opportunity-intro"><span className="eyebrow">YOUR NEXT STEP STARTS HERE</span><h2>Opportunities worth discovering.</h2><p>Explore sample opportunities that can help you practise, collaborate and grow.</p></div><div className="opportunities-grid">{opportunities.map((item) => <article className="opportunity-tile" key={item.title}><span className="opportunity-type">✦ {item.type}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="opportunity-tag">{item.tag}</span><a href="#how" onClick={() => setNotice(`${item.title} is a sample opportunity in this prototype.`)}>View details ↗</a></article>)}</div></section>

//         <section className="how-section" id="how"><div><span className="eyebrow">YOUR JOURNEY STARTS HERE</span><h2>Good things happen when students help students.</h2></div><div className="steps"><div><span>1</span><p><strong>Create your profile</strong><br />Add your skills, interests and goals.</p></div><div><span>2</span><p><strong>Find your match</strong><br />Connect with peers and relevant opportunities.</p></div><div><span>3</span><p><strong>Learn and grow</strong><br />Build skills and take your next step.</p></div></div></section>
//       </main>
//       <footer className="footer"><a className="brand" href="#home"><span className="brand-icon">S</span>SkillBridge<span className="brand-dot">.</span></a><p>Skills shared. Opportunities unlocked.</p><span>© 2026 SkillBridge · Built for students</span></footer>
//     </div>
//   );
// }

// export default App;
import { useMemo, useState } from "react";
import "./App.css";

const features = [
  { icon: "🤝", title: "Exchange Skills", description: "Find students who can teach what you want to learn, and share the skills you already have." },
  { icon: "🎯", title: "Discover Opportunities", description: "Find relevant hackathons, internships, scholarships, competitions and certifications." },
  { icon: "✨", title: "Personalized Guidance", description: "Understand your skill gaps and discover what to learn next for your goals." },
];

const skills = [
  { name: "Java Programming", category: "Programming", level: "Intermediate", teaches: "Core Java, OOP, DSA basics", wants: "Spring Boot", initials: "JP", color: "sage" },
  { name: "React Development", category: "Web Development", level: "Intermediate", teaches: "React, components, hooks", wants: "Backend APIs", initials: "RD", color: "peach" },
  { name: "Python Basics", category: "Programming", level: "Beginner friendly", teaches: "Python syntax, automation", wants: "Data analysis", initials: "PB", color: "gold" },
  { name: "UI / UX Design", category: "Design", level: "Intermediate", teaches: "Figma, wireframes, prototyping", wants: "React basics", initials: "UX", color: "lavender" },
  { name: "SQL & Databases", category: "Data", level: "Beginner friendly", teaches: "SQL queries, joins, schema", wants: "Data visualization", initials: "SQL", color: "blue" },
  { name: "Public Speaking", category: "Communication", level: "All levels", teaches: "Presentations, confidence", wants: "Video editing", initials: "PS", color: "pink" },
];
const categories = ["All skills", "Programming", "Web Development", "Design", "Data", "Communication"];

const opportunities = [
  { type: "HACKATHON", title: "Build for Tomorrow", detail: "Team-based problem solving", tag: "Teamwork" },
  { type: "INTERNSHIP", title: "Frontend Developer Intern", detail: "Build projects and learn from mentors", tag: "Web Development" },
  { type: "WORKSHOP", title: "Getting Started with AI", detail: "Explore practical AI concepts", tag: "Artificial Intelligence" },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All skills");
  const [connected, setConnected] = useState([]);
  const [notice, setNotice] = useState("");
  const [authMode, setAuthMode] = useState(null);
  const [authMessage, setAuthMessage] = useState("");

  const filteredSkills = useMemo(() => skills.filter((skill) => {
    const matchesCategory = category === "All skills" || skill.category === category;
    const text = `${skill.name} ${skill.category} ${skill.teaches} ${skill.wants}`.toLowerCase();
    return matchesCategory && text.includes(search.toLowerCase().trim());
  }), [search, category]);

  const handleConnect = (name) => {
    setConnected((current) => current.includes(name) ? current : [...current, name]);
    setNotice(`Demo request sent to ${name}! Real connections will be enabled after backend integration.`);
  };
  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home"><span className="brand-icon">S</span>SkillBridge<span className="brand-dot">.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Explore skills</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
        </nav>
        <div className="nav-actions">
          <button className="login-link auth-nav-button" onClick={() => { setAuthMode("login"); setAuthMessage(""); }}>Log in</button>
          <button className="button button-dark nav-cta" onClick={() => { setAuthMode("signup"); setAuthMessage(""); }}>Get started ↗</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" />LEARN TOGETHER. GROW TOGETHER.</div>
            <h1>Your skills have value.<br /><span>Share them.</span><br />Discover what's next.</h1>
            <p className="hero-description">Connect with students who can teach you something new. Exchange skills for free and discover opportunities made for your interests, goals and potential.</p>
            <div className="hero-actions" id="join">
              <a className="button button-dark" href="#skills">Explore SkillBridge <span>↗</span></a>
              <a className="button button-light" href="#how">See how it works</a>
            </div>
            <div className="trust-row"><div className="avatar-stack"><span>K</span><span>A</span><span>R</span><span>+</span></div><p><strong>Built for student growth</strong><br />Skills, community and opportunities in one place.</p></div>
          </div>
           <div className="hero-art" aria-label="Skill exchange illustration">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-center"><span className="center-symbol">S</span><strong>SkillBridge</strong><small>Learn • Share • Grow</small></div>
            <div className="skill-card card-java"><span className="skill-emoji">☕</span><div><strong>Java</strong><small>Can teach</small></div><span className="skill-status">↗</span></div>
            <div className="skill-card card-design"><span className="skill-emoji">🎨</span><div><strong>UI / UX</strong><small>Want to learn</small></div><span className="skill-status">↗</span></div>
            <div className="opportunity-card"><span>✦ PERSONALIZED FOR YOU</span><strong>New opportunities await</strong><small>Internships · Hackathons · More</small></div>
            <div className="floating-star star-one">✳</div><div className="floating-star star-two">✦</div>
          </div>
        </section>

        <section className="value-strip" id="community"><div><strong>01</strong><span>Share what you know</span></div><div><strong>02</strong><span>Learn from your peers</span></div><div><strong>03</strong><span>Find your next opportunity</span></div></section>

        <section className="features-section" id="features">
          <div className="section-heading"><span className="eyebrow">ONE PLATFORM. MORE POSSIBILITIES.</span><h2>More than a skill exchange.</h2><p>Turn what you know into what you can become.</p></div>
          <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.description}</p><a href="#skills">Discover more <span>↗</span></a></article>)}</div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading skills-heading"><span className="eyebrow">MEET. SHARE. LEARN.</span><h2>Find your skill match.</h2><p>Explore what fellow students can teach and what they want to learn.</p></div>
          <div className="skill-tools"><label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search skills, topics or interests..." aria-label="Search skills" /></label><div className="category-filters" aria-label="Filter by category">{categories.map((item) => <button key={item} className={category === item ? "filter-chip active" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
          {notice && <div className="demo-notice" role="status"><span>✓</span><p>{notice}</p><button onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
          <div className="skills-grid">{filteredSkills.map((skill) => <article className="person-card" key={skill.name}>
            <div className="person-top"><div className={`person-avatar ${skill.color}`}>{skill.initials}</div><span className="level-pill">{skill.level}</span></div>
            <span className="person-category">{skill.category}</span><h3>{skill.name}</h3><p className="person-desc">Can help with: <strong>{skill.teaches}</strong></p><div className="learn-row"><span>Wants to learn</span><strong>{skill.wants}</strong></div>
            <button className={connected.includes(skill.name) ? "connect-button connected" : "connect-button"} onClick={() => handleConnect(skill.name)}>{connected.includes(skill.name) ? "Request sent ✓" : "Connect with student ↗"}</button>
          </article>)}</div>
          {filteredSkills.length === 0 && <div className="empty-state"><span>⌕</span><h3>No matching skills found</h3><p>Try another keyword or choose “All skills”.</p><button className="button button-dark" onClick={() => { setSearch(""); setCategory("All skills"); }}>Clear filters</button></div>}
          <p className="prototype-note">Prototype preview · Sample student profiles · Connections are demo interactions</p>
        </section>
         <section className="how-section" id="how"><div><span className="eyebrow">YOUR JOURNEY STARTS HERE</span><h2>Good things happen when students help students.</h2></div><div className="steps"><div><span>1</span><p><strong>Create your profile</strong><br />Add your skills, interests and goals.</p></div><div><span>2</span><p><strong>Find your match</strong><br />Connect with peers and relevant opportunities.</p></div><div><span>3</span><p><strong>Learn and grow</strong><br />Build skills and take your next step.</p></div></div></section>
      </main>

      {authMode && (
        <div className="auth-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) { setAuthMode(null); setAuthMessage(""); }
        }}>
          <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
            <button className="auth-close" aria-label="Close authentication form" onClick={() => { setAuthMode(null); setAuthMessage(""); }}>×</button>
            <div className="auth-brand-mark">S</div>
            <span className="eyebrow auth-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2 id="auth-title">{authMode === "signup" ? "Create your account" : "Welcome back"}</h2>
            <p className="auth-subtitle">{authMode === "signup" ? "Join SkillBridge and start learning with your peers." : "Log in to continue your SkillBridge journey."}</p>
            <form className="auth-form" onSubmit={(event) => {
              event.preventDefault();
              setAuthMessage(authMode === "signup"
                ? "Demo sign-up complete! Account creation will work after backend integration."
                : "Demo login submitted! Real authentication will be enabled after backend integration.");
            }}>
              {authMode === "signup" && (
                <label>Full name
                  <input type="text" name="fullName" placeholder="Enter your full name" required minLength={2} />
                </label>
              )}
              <label>Email address
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>Password
                <input type="password" name="password" placeholder="At least 8 characters" required minLength={8} />
              </label>
               {authMode === "signup" && (
                <label className="auth-checkbox">
                  <input type="checkbox" required />
                  <span>I agree to use SkillBridge respectfully.</span>
                </label>
              )}
              <button className="button button-dark auth-submit" type="submit">
                {authMode === "signup" ? "Create account ↗" : "Log in ↗"}
              </button>
            </form>
            {authMessage && <div className="auth-message" role="status">{authMessage}</div>}
            <p className="auth-switch">
              {authMode === "signup" ? "Already have an account?" : "New to SkillBridge?"}
              <button onClick={() => { setAuthMode(authMode === "signup" ? "login" : "signup"); setAuthMessage(""); }}>
                {authMode === "signup" ? "Log in" : "Create an account"}
              </button>
            </p>
            <p className="auth-demo-note">Phase 1 prototype · Demo form only · No account data is saved</p>
          </section>
        </div>
      )}
      
      <footer className="footer"><a className="brand" href="#home"><span className="brand-icon">S</span>SkillBridge<span className="brand-dot">.</span></a><p>Skills shared. Opportunities unlocked.</p><span>© 2026 SkillBridge · Built for students</span></footer>
    </div>
  );
}

export default App;
