import { translations } from "../translations/language";

function CitizenServices({ language }) {
  const services =
    language === "te"
      ? [
          {
            icon: "🪪",
            title: "ఆధార్ సేవలు",
            desc: "ఆధార్ అప్డేట్ మరియు సంబంధిత సమాచారం.",
          },
          {
            icon: "🗳️",
            title: "ఓటర్ ఐడి",
            desc: "ఓటర్ నమోదు మరియు కార్డు వివరాలు.",
          },
          {
            icon: "🚜",
            title: "రైతు నమోదు",
            desc: "రైతుల పథకాలు మరియు పంట సహాయం.",
          },
          {
            icon: "🏠",
            title: "గృహ పథకాలు",
            desc: "గ్రామీణ గృహ సహాయ పథకాలు.",
          },
          {
            icon: "🎓",
            title: "స్కాలర్‌షిప్",
            desc: "విద్యార్థుల విద్యా సహాయం.",
          },
          {
            icon: "⚡",
            title: "విద్యుత్ బిల్లు",
            desc: "విద్యుత్ బిల్లు మరియు సేవా వివరాలు.",
          },
        ]
      : [
          {
            icon: "🪪",
            title: "Aadhaar Services",
            desc: "Aadhaar update and related public information.",
          },
          {
            icon: "🗳️",
            title: "Voter ID",
            desc: "Voter registration and voter card information.",
          },
          {
            icon: "🚜",
            title: "Farmer Registration",
            desc: "Farmer schemes and crop support services.",
          },
          {
            icon: "🏠",
            title: "Housing Schemes",
            desc: "Rural housing support and welfare schemes.",
          },
          {
            icon: "🎓",
            title: "Scholarship",
            desc: "Education support and scholarship information.",
          },
          {
            icon: "⚡",
            title: "Electricity Bill",
            desc: "Electricity bill and service information.",
          },
        ];

  return (
    <div className="page-container">
      <h1>
        {language === "te"
          ? "🪪 పౌర సేవలు"
          : "🪪 Citizen Services"}
      </h1>

      <p className="page-description">
        {language === "te"
          ? "గ్రామ ప్రజలకు అవసరమైన ముఖ్యమైన పౌర సేవలు ఒకే చోట."
          : "Important citizen services for villagers in one place."}
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitizenServices;