import { useState, useEffect } from "react";

const SatwaMedia = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { icon: "◈", title: "Property Branding", desc: "Crafting powerful identities for luxury developments, townships, and commercial spaces that command premium positioning." },
    { icon: "◉", title: "Digital Campaigns", desc: "Precision-targeted Meta, Google & YouTube campaigns engineered for qualified lead generation and maximum ROI." },
    { icon: "◇", title: "Visual Production", desc: "Cinematic property videos, 3D walkthroughs, drone cinematography and photography that sell the lifestyle." },
    { icon: "◆", title: "Social Media", desc: "Strategic content ecosystems across Instagram, Facebook and LinkedIn that build authority and drive conversions." },
    { icon: "○", title: "Lead Generation", desc: "Full-funnel lead generation systems with CRM integration, nurturing sequences and performance analytics." },
    { icon: "●", title: "Website & SEO", desc: "High-converting property microsites and SEO strategies that rank and capture organic buyer traffic." },
  ];

  const stats = [
    { num: "150+", label: "Projects Delivered" },
    { num: "₹500Cr+", label: "Property Value Marketed" },
    { num: "40+", label: "Builder Partners" },
    { num: "98%", label: "Client Retention" },
  ];

  const testimonials = [
    { text: "Satwa Media transformed our project launch. We sold 60% of units in the first month.", name: "Rajesh Reddy", role: "Director, GreenVista Realty" },
    { text: "Their digital campaigns delivered 3x more qualified leads than our previous agency.", name: "Priya Sharma", role: "Marketing Head, Urban Estates" },
    { text: "The branding and visuals they created made our luxury apartments truly stand out.", name: "Anil Kumar", role: "CEO, Pinnacle Developers" },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0A0A08", color: "#E8E4DC", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@200;300;400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root { --gold: #C9A84C; --gold-light: #E8C97A; --cream: #E8E4DC; --dark: #0A0A08; --dark-2: #111110; --dark-3: #1A1A17; --muted: #7A7A6E; }
        body { background: var(--dark); }
        .cormorant { font-family: 'Cormorant Garamond', serif; }
        .josefin { font-family: 'Josefin Sans', sans-serif; }
        .nav-link { font-family: 'Josefin Sans', sans-serif; font-weight: 300; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--muted); text-decoration: none; cursor: pointer; transition: color 0.3s; }
        .nav-link:hover { color: var(--gold); }
        .gold-btn { font-family: 'Josefin Sans', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; background: var(--gold); color: var(--dark); border: none; padding: 14px 32px; cursor: pointer; transition: background 0.3s, transform 0.2s; }
        .gold-btn:hover { background: var(--gold-light); transform: translateY(-1px); }
        .outline-btn { font-family: 'Josefin Sans', sans-serif; font-size: 10px; font-weight: 400; letter-spacing: 3px; text-transform: uppercase; background: transparent; color: var(--cream); border: 1px solid rgba(201,168,76,0.4); padding: 14px 32px; cursor: pointer; transition: border-color 0.3s, color 0.3s; }
        .outline-btn:hover { border-color: var(--gold); color: var(--gold); }
        .service-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.08); padding: 40px 32px; cursor: pointer; transition: all 0.4s; position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: 0; left: 0; width: 0; height: 2px; background: var(--gold); transition: width 0.4s; }
        .service-card:hover::before, .service-card.active::before { width: 100%; }
        .service-card:hover, .service-card.active { border-color: rgba(201,168,76,0.2); background: #1E1E1A; transform: translateY(-4px); }
        .stat-card { border-left: 1px solid rgba(201,168,76,0.2); padding: 0 40px; }
        .stat-card:first-child { border-left: none; padding-left: 0; }
        .testimonial-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.1); padding: 40px; position: relative; }
        .testimonial-card::before { content: '"'; font-family: 'Cormorant Garamond', serif; font-size: 120px; color: var(--gold); opacity: 0.15; position: absolute; top: -20px; left: 20px; line-height: 1; }
        .divider { width: 60px; height: 1px; background: var(--gold); margin: 24px 0; }
        .divider-center { width: 60px; height: 1px; background: var(--gold); margin: 24px auto; }
        .grain { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hero-title { animation: fadeUp 1.2s ease forwards; }
        .hero-sub { animation: fadeUp 1.2s ease 0.3s forwards; opacity: 0; }
        .hero-btns { animation: fadeUp 1.2s ease 0.5s forwards; opacity: 0; }
        .hero-stats { animation: fadeUp 1.2s ease 0.7s forwards; opacity: 0; }
        .section { padding: 120px 0; }
        .contact-field { background: transparent; border: none; border-bottom: 1px solid rgba(201,168,76,0.25); color: var(--cream); font-family: 'Josefin Sans', sans-serif; font-size: 13px; letter-spacing: 1px; padding: 16px 0; width: 100%; outline: none; transition: border-color 0.3s; }
        .contact-field:focus { border-color: var(--gold); }
        .contact-field::placeholder { color: var(--muted); }
        .social-pill { display: inline-flex; align-items: center; gap: 8px; font-family: 'Josefin Sans', sans-serif; font-size: 10px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.3s; padding: 8px 0; }
        .social-pill:hover { color: var(--gold); }
        .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; animation: fadeIn 2s ease 1.5s forwards; opacity: 0; }
        .scroll-line { width: 1px; height: 60px; background: linear-gradient(to bottom, var(--gold), transparent); }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-direction: column !important; gap: 32px !important; }
          .stat-card { border-left: none !important; border-top: 1px solid rgba(201,168,76,0.2); padding: 24px 0 0 !important; }
          .stat-card:first-child { border-top: none; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .nav-links-desktop { display: none !important; }
          .section { padding: 80px 0; }
          .cta-banner { margin: 0 20px !important; padding: 48px 32px !important; }
          nav { padding: 20px 24px !important; }
          .main-container { padding: 0 24px !important; }
        }
      `}</style>

      <div className="grain" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "24px 60px", background: scrolled ? "rgba(10,10,8,0.95)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(201,168,76,0.08)" : "none", transition: "all 0.4s", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", color: "#E8E4DC" }}>
            Satwa <span style={{ color: "#C9A84C" }}>Media</span>
          </div>
          <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "8px", letterSpacing: "4px", color: "#7A7A6E", textTransform: "uppercase", marginTop: "2px" }}>Real Estate Marketing</div>
        </div>
        <div className="nav-links-desktop" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Services", "About", "Work", "Contact"].map(l => <span key={l} className="nav-link">{l}</span>)}
          <button className="gold-btn" style={{ padding: "10px 24px", fontSize: "9px" }}>Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-100px", top: "50%", transform: "translateY(-50%)", width: "600px", height: "600px", border: "1px solid rgba(201,168,76,0.06)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", right: "50px", top: "50%", transform: "translateY(-50%)", width: "400px", height: "400px", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", right: "150px", top: "50%", transform: "translateY(-50%)", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px", paddingTop: "120px" }} className="main-container">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C" }} />
            <span className="josefin" style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C" }}>Hyderabad's Premier</span>
          </div>
          <h1 className="hero-title cormorant" style={{ fontSize: "clamp(52px, 7vw, 96px)", fontWeight: 300, lineHeight: 1.05, color: "#E8E4DC", maxWidth: "700px" }}>
            Where Real Estate<br /><em style={{ color: "#C9A84C", fontStyle: "italic" }}>Meets Mastery</em>
          </h1>
          <p className="hero-sub josefin" style={{ fontSize: "13px", fontWeight: 200, letterSpacing: "2px", color: "#7A7A6E", maxWidth: "480px", lineHeight: 2, marginTop: "32px", opacity: 0 }}>
            We craft compelling narratives for builders, developers, and realtors that convert prospects into buyers — through strategy, storytelling, and precision marketing.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "16px", marginTop: "48px", opacity: 0 }}>
            <button className="gold-btn">Start a Project</button>
            <button className="outline-btn">View Our Work</button>
          </div>
          <div className="hero-stats stats-row" style={{ display: "flex", gap: "0", marginTop: "80px", opacity: 0 }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="cormorant" style={{ fontSize: "42px", fontWeight: 300, color: "#C9A84C" }}>{s.num}</div>
                <div className="josefin" style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E" }}>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: "#C9A84C", padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-block", animation: "marquee 20s linear infinite" }}>
          {Array(4).fill("◈ Property Branding ◈ Digital Campaigns ◈ Lead Generation ◈ Social Media ◈ Video Production ◈ SEO & Web ").map((t, i) => (
            <span key={i} className="josefin" style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#0A0A08", marginRight: "40px" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div className="josefin" style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>What We Do</div>
            <h2 className="cormorant" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, lineHeight: 1.1 }}>Services Built for<br /><em style={{ color: "#C9A84C" }}>Real Estate Growth</em></h2>
            <div className="divider-center" />
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(201,168,76,0.06)" }}>
            {services.map((s, i) => (
              <div key={i} className={`service-card ${activeService === i ? "active" : ""}`} onClick={() => setActiveService(i)}>
                <div className="cormorant" style={{ fontSize: "32px", color: "#C9A84C", marginBottom: "20px" }}>{s.icon}</div>
                <h3 className="cormorant" style={{ fontSize: "24px", fontWeight: 400, marginBottom: "16px", color: "#E8E4DC" }}>{s.title}</h3>
                <p className="josefin" style={{ fontSize: "12px", fontWeight: 200, letterSpacing: "0.5px", lineHeight: 2, color: "#7A7A6E" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: "#0E0E0C", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="hero-grid">
            <div>
              <div className="josefin" style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Why Satwa Media</div>
              <h2 className="cormorant" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.15 }}>
                We Don't Just Market Properties —<br /><em style={{ color: "#C9A84C" }}>We Sell Lifestyles</em>
              </h2>
              <div className="divider" />
              <p className="josefin" style={{ fontSize: "12px", fontWeight: 200, letterSpacing: "0.5px", lineHeight: 2.2, color: "#7A7A6E", marginBottom: "32px" }}>
                Based in Hyderabad, we specialize exclusively in real estate marketing. Our deep understanding of the property buyer's psychology, combined with data-driven digital strategies, ensures your project reaches the right audience at the right time.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {["Exclusive real estate focus — no distractions", "In-house creative + strategy + performance team", "Hyderabad market expertise with pan-India reach", "Full transparency with live reporting dashboards"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "20px", height: "20px", border: "1px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <div style={{ width: "6px", height: "6px", background: "#C9A84C" }} />
                    </div>
                    <span className="josefin" style={{ fontSize: "12px", fontWeight: 300, letterSpacing: "0.5px", color: "#B0AEA4", lineHeight: 1.8 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ background: "linear-gradient(135deg, #1A1A17 0%, #111110 100%)", border: "1px solid rgba(201,168,76,0.15)", padding: "60px", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1px", left: "40px", width: "60px", height: "2px", background: "#C9A84C" }} />
                <div style={{ position: "absolute", bottom: "-1px", right: "40px", width: "60px", height: "2px", background: "#C9A84C" }} />
                <div className="cormorant" style={{ fontSize: "80px", fontWeight: 300, color: "rgba(201,168,76,0.12)", lineHeight: 1, position: "absolute", top: "20px", right: "30px" }}>HYD</div>
                <div className="josefin" style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "40px" }}>Our Approach</div>
                {["Discover & Strategy", "Creative Development", "Campaign Execution", "Optimize & Scale"].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px", marginBottom: i < 3 ? "32px" : "0", alignItems: "flex-start" }}>
                    <div className="cormorant" style={{ fontSize: "40px", fontWeight: 300, color: "rgba(201,168,76,0.3)", lineHeight: 1, minWidth: "48px" }}>0{i + 1}</div>
                    <div>
                      <div className="josefin" style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "1px", color: "#E8E4DC", marginBottom: "6px" }}>{step}</div>
                      <div style={{ width: "30px", height: "1px", background: "rgba(201,168,76,0.3)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="josefin" style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Testimonials</div>
            <h2 className="cormorant" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300 }}>Trusted by <em style={{ color: "#C9A84C" }}>Developers Across Hyderabad</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="services-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="josefin" style={{ fontSize: "12px", fontWeight: 200, letterSpacing: "0.5px", lineHeight: 2.2, color: "#B0AEA4", marginBottom: "32px", position: "relative", zIndex: 1 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "36px", height: "36px", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="cormorant" style={{ color: "#C9A84C", fontSize: "16px" }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="josefin" style={{ fontSize: "11px", fontWeight: 400, color: "#E8E4DC" }}>{t.name}</div>
                    <div className="josefin" style={{ fontSize: "9px", letterSpacing: "1px", color: "#7A7A6E" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" style={{ background: "linear-gradient(135deg, #1A1810 0%, #0A0A08 100%)", border: "1px solid rgba(201,168,76,0.1)", margin: "0 60px", padding: "80px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "300px", height: "300px", border: "1px solid rgba(201,168,76,0.06)", borderRadius: "50%" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <div className="josefin" style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Ready to Grow?</div>
            <h2 className="cormorant" style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 300 }}>Let's Build Your Next<br /><em style={{ color: "#C9A84C" }}>Marketing Success Story</em></h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
            <button className="gold-btn">Schedule a Free Consultation</button>
            <div className="josefin" style={{ fontSize: "10px", letterSpacing: "2px", color: "#7A7A6E" }}>No commitment required</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="hero-grid">
            <div>
              <div className="josefin" style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Get In Touch</div>
              <h2 className="cormorant" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, marginBottom: "16px" }}>Start Your <em style={{ color: "#C9A84C" }}>Project</em></h2>
              <div className="divider" />
              <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "40px" }}>
                <div>
                  <div className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", marginBottom: "8px" }}>Phone</div>
                  <a href="tel:6301485724" style={{ textDecoration: "none", color: "#E8E4DC", fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300 }}>+91 63014 85724</a>
                </div>
                <div>
                  <div className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", marginBottom: "8px" }}>Email</div>
                  <a href="mailto:satwamediaa@gmail.com" style={{ textDecoration: "none", color: "#E8E4DC", fontFamily: "'Josefin Sans', sans-serif", fontSize: "14px", fontWeight: 300, letterSpacing: "1px" }}>satwamediaa@gmail.com</a>
                </div>
                <div>
                  <div className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", marginBottom: "8px" }}>Location</div>
                  <div className="cormorant" style={{ fontSize: "22px", fontWeight: 300, color: "#E8E4DC" }}>Hyderabad, Telangana</div>
                </div>
                <div>
                  <div className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", marginBottom: "12px" }}>Follow Us</div>
                  <a href="https://instagram.com/satwamedia" className="social-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    @satwamedia
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div>
                    <label className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", display: "block", marginBottom: "8px" }}>Name</label>
                    <input className="contact-field" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", display: "block", marginBottom: "8px" }}>Phone</label>
                    <input className="contact-field" placeholder="Your Number" />
                  </div>
                </div>
                <div>
                  <label className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", display: "block", marginBottom: "8px" }}>Project Type</label>
                  <input className="contact-field" placeholder="e.g. Residential, Commercial, Villa..." />
                </div>
                <div>
                  <label className="josefin" style={{ fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "#7A7A6E", display: "block", marginBottom: "8px" }}>Message</label>
                  <textarea className="contact-field" placeholder="Tell us about your project..." rows={4} style={{ resize: "none" }} />
                </div>
                <button className="gold-btn" style={{ alignSelf: "flex-start" }}>Send Message →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060604", borderTop: "1px solid rgba(201,168,76,0.08)", padding: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", marginBottom: "60px" }} className="footer-grid">
            <div>
              <div className="cormorant" style={{ fontSize: "26px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase", marginBottom: "6px" }}>Satwa <span style={{ color: "#C9A84C" }}>Media</span></div>
              <div className="josefin" style={{ fontSize: "8px", letterSpacing: "4px", color: "#7A7A6E", textTransform: "uppercase", marginBottom: "24px" }}>Real Estate Marketing · Hyderabad</div>
              <p className="josefin" style={{ fontSize: "11px", fontWeight: 200, letterSpacing: "0.5px", lineHeight: 2, color: "#5A5A50", maxWidth: "280px" }}>Hyderabad's specialist real estate marketing agency. Transforming properties into sought-after destinations.</p>
            </div>
            {[
              { title: "Services", items: ["Property Branding", "Digital Campaigns", "Video Production", "Social Media", "Lead Generation"] },
              { title: "Company", items: ["About Us", "Our Work", "Blog", "Careers", "Contact"] },
              { title: "Connect", items: ["+91 63014 85724", "satwamediaa@gmail.com", "@satwamedia", "Hyderabad, TS"] },
            ].map((col, i) => (
              <div key={i}>
                <div className="josefin" style={{ fontSize: "8px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {col.items.map((item, j) => (
                    <span key={j} className="josefin" style={{ fontSize: "11px", fontWeight: 200, color: "#5A5A50", letterSpacing: "0.5px", cursor: "pointer", transition: "color 0.3s" }}
                      onMouseEnter={e => e.target.style.color = "#C9A84C"}
                      onMouseLeave={e => e.target.style.color = "#5A5A50"}
                    >{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.06)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div className="josefin" style={{ fontSize: "9px", letterSpacing: "2px", color: "#3A3A32" }}>© 2024 Satwa Media. All rights reserved.</div>
            <div className="josefin" style={{ fontSize: "9px", letterSpacing: "2px", color: "#3A3A32" }}>Real Estate Marketing · Hyderabad, India</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SatwaMedia;
