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
              src="src/assets/village-view.jpg" alt="Village-View"
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
            <img src="src/assets/village-temple.jpg" alt="Village Temple" />
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