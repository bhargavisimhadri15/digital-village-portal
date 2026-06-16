import { translations } from "../translations/language";

function Schools({ language }) {
  const t = translations[language];

  const schools =
    language === "te"
      ? [
          {
            icon: "🏫",

            name: "జిల్లా పరిషత్ ఉన్నత పాఠశాల",

            type: "ప్రభుత్వం",

            classes: "6వ - 10వ తరగతి",

            address: "ప్రధాన రహదారి, గ్రామ కేంద్రం",

            contact: "1234567890",

            students: "850+",
          },

          {
            icon: "📚",

            name: "ప్రభుత్వ ప్రాథమిక పాఠశాల",

            type: "ప్రభుత్వం",

            classes: "1వ - 5వ తరగతి",

            address: "పంచాయతీ కార్యాలయం దగ్గర",

            contact: "1234567890",

            students: "500+",
          },

          {
            icon: "🎓",

            name: "ప్రైవేట్ పాఠశాల",

            type: "ప్రైవేట్",

            classes: "LKG - 10వ తరగతి",

            address: "మార్కెట్ ప్రాంతం",

            contact: "1234567890",

            students: "1200+",
          },
        ]
      : [
          {
            icon: "🏫",

            name: "Zilla Parishad High School",

            type: "Government",

            classes: "6th - 10th",

            address: "Main Road, Village Center",

            contact: "1234567890",

            students: "850+",
          },

          {
            icon: "📚",

            name: "Government Primary School",

            type: "Government",

            classes: "1st - 5th",

            address: "Near Panchayat Office",

            contact: "1234567890",

            students: "500+",
          },

          {
            icon: "🎓",

            name: "Private School",

            type: "Private",

            classes: "LKG - 10th",

            address: "Market Area",

            contact: "1234567890",

            students: "1200+",
          },
        ];

  return (
    <div className="page-container">

      <h1>

        {t.schoolsTitle}

      </h1>

      <p className="page-description">

        {t.schoolsDesc}

      </p>

      <div className="school-grid">

        {schools.map((school, index) => (

          <div
            className="school-card"
            key={index}
          >

            <div className="school-header">

              <div className="school-icon">

                {school.icon}

              </div>

              <span className="school-type">

                {school.type}

              </span>

            </div>

            <h3>

              {school.name}

            </h3>

            <p>

              <strong>

                📚 {t.classes}:

              </strong>

              {" "}

              {school.classes}

            </p>

            <p>

              <strong>

                👨‍🎓 {t.students}:

              </strong>

              {" "}

              {school.students}

            </p>

            <p>

              <strong>

                📍 {t.address}:

              </strong>

              {" "}

              {school.address}

            </p>

            <p>

              <strong>

                📞 {t.phone}:

              </strong>

              {" "}

              {school.contact}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Schools;