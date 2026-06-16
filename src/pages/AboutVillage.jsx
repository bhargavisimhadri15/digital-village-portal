import { translations } from "../translations/language";

function AboutVillage({ language }) {
  const t = translations[language];

  const villageDetails = [
    {
      icon: "📍",
      title: t.villageName,
      value: "Kanuru Village",
    },

    {
      icon: "👨‍👩‍👧‍👦",
      title: t.population,
      value: "15,000+ Residents",
    },

    {
      icon: "🗺️",
      title: t.district,
      value: "East Godavari",
    },

    {
      icon: "🏛️",
      title: t.state,
      value: "Andhra Pradesh",
    },
  ];

  const highlights =
    language === "te"
      ? [
          "🌴 అందమైన నది దృశ్య ప్రాంతాలు",

          "🏛️ చురుకైన పంచాయతీ సేవలు",

          "🌾 వ్యవసాయం మరియు మత్స్యకార సమాజం",

          "🎉 సంప్రదాయ పండుగలు మరియు సాంస్కృతిక కార్యక్రమాలు",
        ]
      : [
          "🌴 Beautiful river view areas",

          "🏛️ Active Panchayat services",

          "🌾 Farming and fishing community",

          "🎉 Traditional festivals and cultural events",
        ];

  return (
    <div className="page-container">

      <h1>{t.aboutTitle}</h1>

      <p className="page-description">
        {t.aboutDesc}
      </p>

      <div className="details-grid">

        {villageDetails.map((item, index) => (

          <div
            className="detail-box"
            key={index}
          >

            <span>

              {item.icon}

            </span>

            <h3>

              {item.title}

            </h3>

            <p>

              {item.value}

            </p>

          </div>

        ))}

      </div>

      <div className="about-banner">

        <div>

          <h2>

            {t.overview}

          </h2>

          <p>

            {language === "te"
              ? "కనూరు ఒక ప్రశాంతమైన గ్రామం. ఇది వ్యవసాయం, పచ్చదనం, సాంస్కృతిక సంప్రదాయాలు మరియు ప్రజా సేవలకు ప్రసిద్ధి చెందింది. డిజిటల్ విలేజ్ పోర్టల్ గ్రామ ప్రజలకు అవసరమైన సమాచారాన్ని సులభంగా అందిస్తుంది."
              : "Kanuru is a peaceful village known for agriculture, greenery, community culture, and local public services. The Digital Village Portal helps people access important information easily."}

          </p>

        </div>

      </div>

      <div className="card-grid">

        <div className="card">

          <h3>

            🌴 {t.famousPlaces}

          </h3>

          <ul>

            <li>

              {language === "te"
                ? "గ్రామ దేవాలయం"
                : "Village Temple"}

            </li>

            <li>

              {language === "te"
                ? "నది దృశ్య ప్రాంతం"
                : "River View Area"}

            </li>

            <li>

              {language === "te"
                ? "కమ్యూనిటీ హాల్"
                : "Community Hall"}

            </li>

            <li>

              {language === "te"
                ? "స్థానిక మార్కెట్"
                : "Local Market"}

            </li>

          </ul>

        </div>

        <div className="card">

          <h3>

            🌾 {t.mainOccupations}

          </h3>

          <ul>

            <li>

              {language === "te"
                ? "వ్యవసాయం"
                : "Farming"}

            </li>

            <li>

              {language === "te"
                ? "మత్స్యకారులు"
                : "Fishing"}

            </li>

            <li>

              {language === "te"
                ? "బోధన"
                : "Teaching"}

            </li>

            <li>

              {language === "te"
                ? "చిన్న వ్యాపారాలు"
                : "Small Businesses"}

            </li>

          </ul>

        </div>

        <div className="card">

          <h3>

            🏢 {t.panchayatDetails}

          </h3>

          <p>

            <strong>

              Office:

            </strong>

            {" "}

            Kanuru Gram Panchayat

          </p>

          <p>

            <strong>

              {language === "te"
                ? "సమయం:"
                : "Timings:"}

            </strong>

            {" "}

            10:00 AM - 5:00 PM

          </p>

          <p>

            <strong>

              {language === "te"
                ? "రోజులు:"
                : "Days:"}

            </strong>

            {" "}

            {language === "te"
              ? "సోమవారం - శనివారం"
              : "Monday - Saturday"}

          </p>

        </div>

        <div className="card">

          <h3>

            ✨

            {" "}

            {language === "te"
              ? "గ్రామ ప్రత్యేకతలు"
              : "Village Highlights"}

          </h3>

          <ul>

            {highlights.map((item, index) => (

              <li key={index}>

                {item}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

export default AboutVillage;