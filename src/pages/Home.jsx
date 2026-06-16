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
            <img src="data:image/jpeg;base64,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" />
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