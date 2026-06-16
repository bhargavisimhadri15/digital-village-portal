import { translations } from "../translations/language";

function Events({ language }) {
  const t = translations[language];

  const events =
    language === "te"
      ? [
          {
            icon: "🎉",

            title: "సంక్రాంతి ఉత్సవాలు",

            date: "14 జనవరి 2026",

            location: "గ్రామ కేంద్రం",

            description:
              "సాంప్రదాయ సాంస్కృతిక కార్యక్రమాలు మరియు ఆటలు.",
          },

          {
            icon: "🏥",

            title: "ఉచిత ఆరోగ్య శిబిరం",

            date: "20 జనవరి 2026",

            location: "ప్రభుత్వ ఆసుపత్రి",

            description:
              "ఉచిత ఆరోగ్య పరీక్షలు మరియు వైద్య సలహాలు.",
          },

          {
            icon: "💼",

            title: "ఉద్యోగ మేళా",

            date: "05 ఫిబ్రవరి 2026",

            location: "కమ్యూనిటీ హాల్",

            description:
              "యువతకు ఉద్యోగ అవకాశాల అవగాహన కార్యక్రమం.",
          },

          {
            icon: "🌱",

            title: "పర్యావరణ అవగాహన",

            date: "15 ఫిబ్రవరి 2026",

            location: "గ్రామ పాఠశాల",

            description:
              "చెట్లు నాటడం మరియు పర్యావరణ సంరక్షణ.",
          },

          {
            icon: "🎓",

            title: "పాఠశాల వార్షికోత్సవం",

            date: "28 ఫిబ్రవరి 2026",

            location: "జిల్లా పరిషత్ పాఠశాల",

            description:
              "విద్యార్థుల సాంస్కృతిక కార్యక్రమాలు.",
          },

          {
            icon: "🏢",

            title: "పంచాయతీ సమావేశం",

            date: "10 మార్చి 2026",

            location: "పంచాయతీ కార్యాలయం",

            description:
              "గ్రామ అభివృద్ధి కార్యక్రమాల చర్చ.",
          },
        ]
      : [
          {
            icon: "🎉",

            title: "Sankranti Festival",

            date: "14 January 2026",

            location: "Village Center",

            description:
              "Traditional cultural events and games.",
          },

          {
            icon: "🏥",

            title: "Free Health Camp",

            date: "20 January 2026",

            location: "Government Hospital",

            description:
              "Free health checkups and doctor consultations.",
          },

          {
            icon: "💼",

            title: "Job Fair",

            date: "05 February 2026",

            location: "Community Hall",

            description:
              "Employment opportunities for youth.",
          },

          {
            icon: "🌱",

            title: "Environmental Awareness",

            date: "15 February 2026",

            location: "Village School",

            description:
              "Tree plantation and environment awareness.",
          },

          {
            icon: "🎓",

            title: "School Annual Day",

            date: "28 February 2026",

            location: "Zilla Parishad School",

            description:
              "Student cultural activities.",
          },

          {
            icon: "🏢",

            title: "Panchayat Meeting",

            date: "10 March 2026",

            location: "Panchayat Office",

            description:
              "Village development discussions.",
          },
        ];

  return (
    <div className="page-container">

      <h1>

        {t.eventsTitle}

      </h1>

      <p className="page-description">

        {t.eventsDesc}

      </p>

      <div className="events-grid">

        {events.map((event, index) => (

          <div
            className="event-card"
            key={index}
          >

            <div className="event-icon">

              {event.icon}

            </div>

            <h3>

              {event.title}

            </h3>

            <p>

              <strong>

                📅 {t.date}:

              </strong>

              {" "}

              {event.date}

            </p>

            <p>

              <strong>

                📍 {t.address}:

              </strong>

              {" "}

              {event.location}

            </p>

            <p>

              {event.description}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Events;