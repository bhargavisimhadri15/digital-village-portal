import { translations } from "../translations/language";

function Emergency({ language }) {
  const t = translations[language];

  const contacts =
    language === "te"
      ? [
          {
            icon: "👮",
            department: "పోలీస్ స్టేషన్",
            number: "100",
            address: "ప్రధాన రహదారి, గ్రామ కేంద్రం",
            status: "24 గంటలు",
          },

          {
            icon: "🚑",
            department: "అంబులెన్స్",
            number: "108",
            address: "ప్రభుత్వ ఆసుపత్రి",
            status: "అత్యవసరం",
          },

          {
            icon: "🚒",
            department: "ఫైర్ స్టేషన్",
            number: "101",
            address: "పట్టణ ప్రాంతం",
            status: "24 గంటలు",
          },

          {
            icon: "🏢",
            department: "పంచాయతీ కార్యాలయం",
            number: "1234567890",
            address: "గ్రామ పంచాయతీ భవనం",
            status: "కార్యాలయ సమయం",
          },

          {
            icon: "⚡",
            department: "విద్యుత్ కార్యాలయం",
            number: "1912",
            address: "విద్యుత్ సేవా కేంద్రం",
            status: "సహాయం",
          },

          {
            icon: "🙋",
            department: "గ్రామ వాలంటీర్",
            number: "1234567890",
            address: "గ్రామ సచివాలయం",
            status: "స్థానిక సహాయం",
          },
        ]
      : [
          {
            icon: "👮",
            department: "Police Station",
            number: "100",
            address: "Main Road, Village Center",
            status: "24/7 Available",
          },

          {
            icon: "🚑",
            department: "Ambulance",
            number: "108",
            address: "Government Hospital",
            status: "Emergency",
          },

          {
            icon: "🚒",
            department: "Fire Station",
            number: "101",
            address: "Town Area",
            status: "24/7 Available",
          },

          {
            icon: "🏢",
            department: "Panchayat Office",
            number: "1234567890",
            address: "Village Panchayat Building",
            status: "Office Hours",
          },

          {
            icon: "⚡",
            department: "Electricity Office",
            number: "1912",
            address: "Electricity Service Center",
            status: "Support",
          },

          {
            icon: "🙋",
            department: "Village Volunteer",
            number: "1234567890",
            address: "Village Secretariat",
            status: "Local Help",
          },
        ];

  return (
    <div className="page-container">

      <h1>

        {t.emergencyTitle}

      </h1>

      <p className="page-description">

        {t.emergencyDesc}

      </p>

      <div className="emergency-grid">

        {contacts.map((contact, index) => (

          <div
            className="emergency-card"
            key={index}
          >

            <div className="emergency-header">

              <div className="emergency-icon">

                {contact.icon}

              </div>

              <span>

                {contact.status}

              </span>

            </div>

            <h3>

              {contact.department}

            </h3>

            <h2>

              {contact.number}

            </h2>

            <p>

              <strong>

                📍 {t.address}:

              </strong>

              {" "}

              {contact.address}

            </p>

            

          </div>

        ))}

      </div>

    </div>
  );
}

export default Emergency;