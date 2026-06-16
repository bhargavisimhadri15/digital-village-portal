import { translations } from "../translations/language";

function Hospitals({ language }) {
  const t = translations[language];

  const hospitals =
    language === "te"
      ? [
          {
            icon: "🏥",
            type: "24 గంటలు",

            name: "శ్రీ లక్ష్మీ నరసింహ ఫస్ట్ ఎయిడ్ సెంటర్",

            doctor: "సాధారణ వైద్య సిబ్బంది",

            address:
              "కనూరు, పెరవలి మండలం, ఆంధ్రప్రదేశ్ - 534329",

            contact: "స్థానిక ఆరోగ్య కేంద్రం",

            timing: "24 గంటలు",
          },

          {
            icon: "🩺",
            type: "ప్రభుత్వం",

            name: "ప్రాథమిక ఆరోగ్య కేంద్రం",

            doctor: "ప్రభుత్వ వైద్యులు",

            address:
              "కనూరు, ఆంధ్రప్రదేశ్ - 534329",

            contact: "ప్రభుత్వ ఆరోగ్య సేవలు",

            timing: "ఉదయం 9:00 - సాయంత్రం 4:00",
          },

          {
            icon: "🚑",
            type: "సాధారణ ఆసుపత్రి",

            name: "శ్రీ సూర్య హాస్పిటల్స్",

            doctor: "మల్టీ స్పెషాలిటీ వైద్యులు",

            address:
              "సజ్జాపురం, ఆంధ్రప్రదేశ్ - 534211",

            contact: "ప్రైవేట్ ఆసుపత్రి",

            timing: "ఉదయం 9:00 - సాయంత్రం 7:00",
          },
        ]
      : [
          {
            icon: "🏥",
            type: "24 Hours",

            name: "Sri Lakshmi Narasimha First Aid Center",

            doctor: "General Medical Staff",

            address:
              "Kanuru, Peravali Mandal, Andhra Pradesh 534329",

            contact: "Local Health Centre",

            timing: "24 Hours",
          },

          {
            icon: "🩺",
            type: "Government",

            name: "Primary Health Centre",

            doctor: "Government Doctors",

            address:
              "Kanuru, Andhra Pradesh 534329",

            contact: "Government Health Service",

            timing: "9:00 AM - 4:00 PM",
          },

          {
            icon: "🚑",
            type: "General Hospital",

            name: "Sri Surya Hospitals",

            doctor: "Multi Specialty Doctors",

            address:
              "Sajjapuram, Andhra Pradesh 534211",

            contact: "private hospital",

            timing: "9:00 AM - 7:00 PM",
          },
        ];

  return (
    <div className="page-container">

      <h1>{t.hospitalsTitle}</h1>

      <p className="page-description">

        {t.hospitalsDesc}

      </p>

      <div className="hospital-grid">

        {hospitals.map((hospital, index) => (

          <div
            className="hospital-card"
            key={index}
          >

            <div className="hospital-top">

              <div className="hospital-icon">

                {hospital.icon}

              </div>

              <span>

                {hospital.type}

              </span>

            </div>

            <h3>

              {hospital.name}

            </h3>

            <p>

              <strong>

                👨‍⚕️ {t.doctor}:

              </strong>

              {" "}

              {hospital.doctor}

            </p>

            <p>

              <strong>

                📍 {t.address}:

              </strong>

              {" "}

              {hospital.address}

            </p>

            <p>

              <strong>

                📞 {t.phone}:

              </strong>

              {" "}

              {hospital.contact}

            </p>

            <p>

              <strong>

                ⏰ {t.timing}:

              </strong>

              {" "}

              {hospital.timing}

            </p>

            {hospital.contact.includes("+91") && (

              <a
                href={`tel:${hospital.contact}`}
                className="call-btn"
              >

                📞 {t.callNow}

              </a>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Hospitals;