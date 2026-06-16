import { useState } from "react";
import { Link } from "react-router-dom";
import { translations } from "../translations/language";

function Home({ language }) {
  const [search, setSearch] = useState("");
  const t = translations[language];

  const services = [
    t.villageInformation,
    t.governmentSchemes,
    t.hospitals,
    t.schools,
    t.emergency,
    t.villageEvents,
    t.panchayatServices,
    t.healthcare,
    t.education,
  ];

  const filteredServices = services.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="badge">{t.heroBadge}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>

          <div className="hero-buttons">
            <Link to="/about-village" className="btn">
              {t.exploreVillage}
            </Link>

            <Link to="/schemes" className="btn-outline">
              {t.viewSchemes}
            </Link>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder={t.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <div className="search-results">
                {filteredServices.length > 0 ? (
                  filteredServices.map((item, index) => (
                    <p key={index}>🔎 {item}</p>
                  ))
                ) : (
                  <p>{t.noResults}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>15K+</h2>
          <p>{t.villagePopulation}</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>{t.governmentSchemes}</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>{t.publicServices}</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>{t.emergencyHelp}</p>
        </div>
      </section>

      <section className="today-section">
        <div className="today-card">
          <div className="today-icon">📅</div>

          <div>
            <h2>{language === "te" ? "ఈరోజు" : "Today"}</h2>

            <p>
              {new Date().toLocaleDateString(
                language === "te" ? "te-IN" : "en-IN",
                {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="ticker-section">
        <div className="ticker-label">
          {language === "te" ? "📢 అప్డేట్స్" : "📢 Updates"}
        </div>

        <div className="ticker-content">
          <span>
            {language === "te"
              ? "ఉచిత ఆరోగ్య శిబిరం • రైతు పథకం నమోదు ప్రారంభం • స్కాలర్‌షిప్ దరఖాస్తులు • పంచాయతీ సమావేశం"
              : "Free Health Camp • Farmer Scheme Registration Open • Scholarship Applications • Panchayat Meeting"}
          </span>
        </div>
      </section>

      <section className="notice-section">
        <div className="notice-header">
          <h2>{t.latestNotices}</h2>
          <span>{t.updatedToday}</span>
        </div>

        <div className="notice-list">
          <div className="notice-item">
            <strong>{t.freeHealthCamp}</strong>
            <p>{t.freeHealthCampText}</p>
          </div>

          <div className="notice-item">
            <strong>{t.farmerRegistration}</strong>
            <p>{t.farmerRegistrationText}</p>
          </div>

          <div className="notice-item">
            <strong>{t.scholarshipApplications}</strong>
            <p>{t.scholarshipApplicationsText}</p>
          </div>
        </div>
      </section>

      <section className="leaders-section">
        <h2 className="section-title">
          {language === "te" ? "👨‍💼 గ్రామ నాయకులు" : "👨‍💼 Village Leaders"}
        </h2>

        <p className="section-subtitle">
          {language === "te"
            ? "ముఖ్యమైన గ్రామ నాయకులు మరియు ప్రజా సహాయ సంప్రదింపులు."
            : "Important village leadership and public support contacts."}
        </p>

        <div className="leaders-grid">
          <div className="leader-card">
            <div className="leader-icon">👨‍💼</div>
            <h3>{language === "te" ? "సర్పంచ్" : "Sarpanch"}</h3>
            <p>
              {language === "te"
                ? "గ్రామ అభివృద్ధి నాయకుడు"
                : "Village Development Head"}
            </p>
            <span>📞 1234567890</span>
          </div>

          <div className="leader-card">
            <div className="leader-icon">👩‍💼</div>
            <h3>
              {language === "te" ? "పంచాయతీ కార్యదర్శి" : "Panchayat Secretary"}
            </h3>
            <p>
              {language === "te"
                ? "ప్రజా సేవల నిర్వహణ"
                : "Public Service Management"}
            </p>
            <span>📞 1234567890</span>
          </div>

          <div className="leader-card">
            <div className="leader-icon">🙋</div>
            <h3>{language === "te" ? "గ్రామ వాలంటీర్" : "Village Volunteer"}</h3>
            <p>
              {language === "te"
                ? "స్థానిక ప్రజా సహాయం"
                : "Local Public Support"}
            </p>
            <span>📞 1234567890</span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2 className="section-title">{t.digitalServices}</h2>

        <div className="service-grid">
          <div className="service-box">
            🏛️
            <h3>{t.panchayatServices}</h3>
            <p>{t.panchayatServicesText}</p>
          </div>

          <div className="service-box">
            🩺
            <h3>{t.healthcare}</h3>
            <p>{t.healthcareText}</p>
          </div>

          <div className="service-box">
            🎓
            <h3>{t.education}</h3>
            <p>{t.educationText}</p>
          </div>

          <div className="service-box">
            🚨
            <h3>{t.emergencyService}</h3>
            <p>{t.emergencyServiceText}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">{t.findHere}</h2>
        <p className="section-subtitle">{t.findHereText}</p>

        <div className="card-grid">
          <Link to="/about-village" className="feature-card">
            <div className="icon">🏡</div>
            <h3>{t.villageInformation}</h3>
            <p>{t.villageInformationText}</p>
          </Link>

          <Link to="/schemes" className="feature-card">
            <div className="icon">🏛️</div>
            <h3>{t.governmentSchemes}</h3>
            <p>{t.panchayatServicesText}</p>
          </Link>

          <Link to="/hospitals" className="feature-card">
            <div className="icon">🏥</div>
            <h3>{t.hospitals}</h3>
            <p>{t.hospitalsText}</p>
          </Link>

          <Link to="/schools" className="feature-card">
            <div className="icon">🎓</div>
            <h3>{t.schools}</h3>
            <p>{t.schoolsText}</p>
          </Link>

          <Link to="/emergency" className="feature-card">
            <div className="icon">🚨</div>
            <h3>{t.emergency}</h3>
            <p>{t.emergencyText}</p>
          </Link>

          <Link to="/events" className="feature-card">
            <div className="icon">🎉</div>
            <h3>{t.villageEvents}</h3>
            <p>{t.villageEventsText}</p>
          </Link>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">{t.gallery}</h2>
        <p className="section-subtitle">{t.galleryText}</p>

        <div className="gallery-grid">
          <div className="gallery-card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Village View"
              />
              
            <h3>{t.villageView}</h3>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
              alt="Farming Fields"
            />
            <h3>{t.farmingFields}</h3>
          </div>

          <div className="gallery-card">
            <img src="assets/public/village-temple.jpg" alt="Village Temple" />
            <h3>{t.villageTemple}</h3>
          </div>

          <div className="gallery-card">
            <img
              src="https://thumbs.dreamstime.com/z/community-life-day-city-23221601.jpg"
              alt="Community Life"
            />
            <h3>{t.communityLife}</h3>
          </div>
        </div>
      </section>

      <section className="weather-section">
        <h2 className="section-title">{t.weather}</h2>
        <p className="section-subtitle">{t.weatherText}</p>

        <div className="weather-grid">
          <div className="weather-card">
            <div className="weather-icon">☀️</div>
            <h2>31°C</h2>
            <h3>{t.sunny}</h3>
            <p>{t.humidity}: 65%</p>
            <p>{t.wind}: 12 km/h</p>
          </div>

          <div className="weather-card">
            <div className="weather-icon">🌅</div>
            <h3>{t.sunrise}</h3>
            <h2>05:42 AM</h2>
          </div>

          <div className="weather-card">
            <div className="weather-icon">🌇</div>
            <h3>{t.sunset}</h3>
            <h2>06:34 PM</h2>
          </div>
        </div>
      </section>

      <section className="achievement-section">
        <h2 className="section-title">{t.achievements}</h2>
        <p className="section-subtitle">{t.achievementsText}</p>

        <div className="achievement-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🌳</div>
            <h2>5000+</h2>
            <p>{t.treesPlanted}</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🎓</div>
            <h2>98%</h2>
            <p>{t.literacyRate}</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">💧</div>
            <h2>100%</h2>
            <p>{t.cleanWater}</p>
          </div>

          <div className="achievement-card">
            <div className="achievement-icon">🌐</div>
            <h2>85%</h2>
            <p>{t.digitalUsage}</p>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-content">
          <h2>{t.location}</h2>
          <p>{t.locationText}</p>

          <Link to="/contact" className="btn">
            {t.viewContactDetails}
          </Link>
        </div>

        <div className="map-card">
          <iframe
            title="Kanuru Village Map"
            src="https://www.google.com/maps?q=Kanuru,Peravali,East+Godavari,Andhra+Pradesh+534329&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <section className="info-banner">
        <div>
          <h2>{t.bannerTitle}</h2>
          <p>{t.bannerText}</p>
        </div>

        <Link to="/contact" className="btn">
          {t.contactPanchayat}
        </Link>
      </section>
    </div>
  );
}

export default Home;