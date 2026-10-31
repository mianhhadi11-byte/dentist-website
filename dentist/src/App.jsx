import React, { useState } from "react";
import "./App.css";

const treatments = [
  { icon: "✧", name: "Smile Makeover", desc: "Transform your smile with personalized cosmetic dentistry.", time: "Custom treatment" },
  { icon: "◈", name: "Dental Implants", desc: "Modern tooth replacement solutions designed around your needs.", time: "Consultation required" },
  { icon: "✦", name: "Teeth Whitening", desc: "Professional whitening treatments for a brighter smile.", time: "45–60 minutes" },
  { icon: "◇", name: "Invisalign & Braces", desc: "Explore orthodontic options for a more aligned smile.", time: "Personalized plan" },
  { icon: "◎", name: "Root Canal", desc: "Comfort-focused treatment to help preserve natural teeth.", time: "Varies by case" },
  { icon: "✧", name: "General Dentistry", desc: "Regular checkups, cleaning and preventive dental care.", time: "30–45 minutes" }
];

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Cosmetic & Restorative Dentist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700",
    detail: "Dedicated to personalized smile design and patient-focused dental care."
  },
  {
    name: "Dr. Hamza Malik",
    role: "Implant & General Dentist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700",
    detail: "Focused on modern restorative techniques and comfortable dental experiences."
  }
];

const reviews = [
  ["Ayesha K.", "The clinic experience was welcoming and the appointment process was very smooth."],
  ["Usman R.", "Beautiful environment and a very professional approach to patient care."],
  ["Fatima S.", "I appreciated how clearly every step of my treatment was explained."]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", treatment: "General Dentistry", date: ""
  });

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="dental">

      <div className="announcement">
        <span>YOUR SMILE DESERVES EXCEPTIONAL CARE</span>
        <span>Karachi, Pakistan · Demo Clinic</span>
      </div>

      <header className="header">
        <a className="brand" href="#home">
          LUMIÈRE<span>®</span>
          <small>DENTAL STUDIO</small>
        </a>

        <button className="mobile-toggle" onClick={() => setMenu(!menu)}>☰</button>

        <nav className={menu ? "navigation open" : "navigation"}>
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("about")}>Our Story</button>
          <button onClick={() => go("services")}>Treatments</button>
          <button onClick={() => go("team")}>Our Dentists</button>
          <button onClick={() => go("reviews")}>Testimonials</button>
        </nav>

        <button className="nav-appointment" onClick={() => go("appointment")}>
          Book Consultation ↗
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image"></div>
          <div className="hero-content">
            <span className="overline">THE ART OF MODERN DENTISTRY</span>
            <h1>A beautiful smile<br />begins with <i>care.</i></h1>
            <p>Discover a more thoughtful approach to dental care. Where modern technology meets a genuinely comfortable experience.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("appointment")}>Schedule Your Visit ↗</button>
              <button className="text-link" onClick={() => go("services")}>Explore Treatments ↓</button>
            </div>
            <div className="hero-bottom">
              <span>01 — PERSONALIZED CARE</span>
              <span>02 — MODERN TECHNOLOGY</span>
              <span>03 — PATIENT FIRST</span>
            </div>
          </div>
          <div className="hero-caption">A NEW PERSPECTIVE ON DENTAL CARE</div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="intro-left">
            <span className="overline">WELCOME TO LUMIÈRE</span>
            <h2>More than dentistry.<br /><i>A different feeling.</i></h2>
          </div>
          <div className="intro-right">
            <p>We believe every smile has its own story. Our approach combines thoughtful treatment planning, contemporary dental techniques and a welcoming environment.</p>
            <p>From your first consultation to your ongoing care, every detail is designed around your comfort and individual needs.</p>
            <button className="underlined" onClick={() => go("team")}>MEET OUR TEAM ↗</button>
          </div>
        </section>

        <section className="image-strip">
          <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000" alt="Modern dental care"/>
          <div className="image-strip-content">
            <span className="overline">A SPACE DESIGNED AROUND YOU</span>
            <h2>Comfort is part<br />of the treatment.</h2>
            <p>Thoughtful spaces. Clear communication. A more personal dental experience.</p>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-title">
            <div>
              <span className="overline">WHAT WE OFFER</span>
              <h2>Care for every<br /><i>kind of smile.</i></h2>
            </div>
            <p>Explore our range of dental services, thoughtfully planned to suit your needs.</p>
          </div>

          <div className="treatment-grid">
            {treatments.map((t, i) => (
              <article className="treatment" key={t.name}>
                <div className="treatment-top">
                  <span className="treatment-icon">{t.icon}</span>
                  <span>0{i + 1}</span>
                </div>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <small>{t.time}</small>
                <button onClick={() => {
                  setForm({ ...form, treatment: t.name });
                  go("appointment");
                }}>DISCOVER TREATMENT ↗</button>
              </article>
            ))}
          </div>
        </section>

        <section className="feature">
          <div className="feature-photo">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1100" alt="Dental clinic interior"/>
          </div>
          <div className="feature-content">
            <span className="overline">THE LUMIÈRE EXPERIENCE</span>
            <h2>Modern care.<br /><i>Human touch.</i></h2>
            <p>Technology is important. But so is listening. We make time to understand your concerns, explain your options and create a treatment plan that feels right for you.</p>
            <div className="feature-points">
              <div><span>01</span><p>Personalized consultations</p></div>
              <div><span>02</span><p>Modern dental equipment</p></div>
              <div><span>03</span><p>Clear treatment guidance</p></div>
            </div>
            <button className="primary" onClick={() => go("appointment")}>Start Your Journey ↗</button>
          </div>
        </section>

        <section className="team section-pad" id="team">
          <div className="section-title">
            <div>
              <span className="overline">THE PEOPLE BEHIND YOUR SMILE</span>
              <h2>Meet our <i>dentists.</i></h2>
            </div>
            <p>Meet our fictional demo team. Real clinic profiles can be added when the website is customized for a dentist.</p>
          </div>
          <div className="team-grid">
            {doctors.map(d => (
              <article className="doctor" key={d.name}>
                <div className="doctor-image">
                  <img src={d.image} alt={d.name}/>
                </div>
                <div className="doctor-info">
                  <div><h3>{d.name}</h3><span>{d.role}</span></div>
                  <p>{d.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews section-pad" id="reviews">
          <div className="review-heading">
            <span className="overline">PATIENT EXPERIENCES</span>
            <h2>Kind words,<br /><i>lasting impressions.</i></h2>
            <p>Sample testimonials for this demonstration. They are not verified patient reviews.</p>
          </div>
          <div className="review-slider">
            <div className="quote-mark">“</div>
            <div className="stars">★★★★★</div>
            <h3>{reviews[active][1]}</h3>
            <span className="review-name">{reviews[active][0]}</span>
            <div className="review-controls">
              <button onClick={() => setActive((active + 2) % 3)}>←</button>
              <span>0{active + 1} / 03</span>
              <button onClick={() => setActive((active + 1) % 3)}>→</button>
            </div>
          </div>
        </section>

        <section className="appointment section-pad" id="appointment">
          <div className="appointment-left">
            <span className="overline">YOUR NEXT STEP</span>
            <h2>Let's make room<br />for a <i>better smile.</i></h2>
            <p>Tell us a little about yourself. Our reception team can help arrange a consultation.</p>
            <div className="contact-detail">
              <span>LOCATION</span>
              <strong>Karachi, Pakistan</strong>
            </div>
            <div className="contact-detail">
              <span>EMAIL</span>
              <strong>hello@lumieredental.example</strong>
            </div>
            <small>Fictional contact details for this demo website.</small>
          </div>

          <div className="appointment-form">
            {submitted ? (
              <div className="form-success">
                <span>✓</span>
                <h3>Thank you!</h3>
                <p>Your demo appointment request has been submitted locally. No actual booking has been made.</p>
                <button className="primary" onClick={() => setSubmitted(false)}>New Request</button>
              </div>
            ) : (
              <>
                <span className="overline">BOOK A CONSULTATION</span>
                <h3>We'd love to hear from you.</h3>
                <form onSubmit={submit}>
                  <label>Full Name<input name="name" value={form.name} onChange={update} placeholder="Your name" required/></label>
                  <label>Phone Number<input name="phone" value={form.phone} onChange={update} placeholder="03XX XXXXXXX" required/></label>
                  <label>Email Address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label>
                  <label>Treatment Interested In
                    <select name="treatment" value={form.treatment} onChange={update}>
                      {treatments.map(t => <option key={t.name}>{t.name}</option>)}
                    </select>
                  </label>
                  <label>Preferred Date<input type="date" name="date" value={form.date} onChange={update} required/></label>
                  <button className="primary submit-btn" type="submit">Request Appointment ↗</button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#home">LUMIÈRE<span>®</span><small>DENTAL STUDIO</small></a>
            <p>A thoughtful approach to modern dental care.</p>
          </div>
          <div><span>EXPLORE</span><button onClick={() => go("about")}>Our Story</button><button onClick={() => go("services")}>Treatments</button><button onClick={() => go("team")}>Our Dentists</button></div>
          <div><span>CONNECT</span><p>Karachi, Pakistan</p><p>hello@lumieredental.example</p></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 LUMIÈRE DENTAL STUDIO — DEMO PROJECT</span>
          <button onClick={() => go("home")}>BACK TO TOP ↑</button>
        </div>
      </footer>
    </div>
  );
}

export default App;