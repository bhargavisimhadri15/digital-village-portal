import { translations } from "../translations/language";

function Schemes({ language }) {
  const t = translations[language];

  const schemes =
    language === "te"
      ? [
          {
            icon: "🌾",
            title: "రైతు పథకాలు",
            description:
              "రైతులకు ఆర్థిక సహాయం, పంట బీమా మరియు వ్యవసాయ పరికరాల సబ్సిడీ.",
            items: [
              "PM-Kisan",
              "పంట బీమా",
              "ఉచిత విత్తనాలు",
              "పరికరాల సబ్సిడీ",
            ],
          },
          {
            icon: "🎓",
            title: "విద్యార్థుల పథకాలు",
            description:
              "విద్యార్థులకు స్కాలర్‌షిప్‌లు మరియు విద్యా సహాయం.",
            items: [
              "స్కాలర్‌షిప్‌లు",
              "ఉచిత పుస్తకాలు",
              "మధ్యాహ్న భోజనం",
              "డిజిటల్ విద్య",
            ],
          },
          {
            icon: "👩",
            title: "మహిళల పథకాలు",
            description:
              "మహిళల సాధికారత, భద్రత, శిక్షణ మరియు వ్యాపార సహాయం.",
            items: [
              "స్వయం సహాయక సంఘాలు",
              "నైపుణ్య శిక్షణ",
              "మహిళల భద్రత",
              "చిన్న రుణాలు",
            ],
          },
          {
            icon: "👴",
            title: "వృద్ధుల పథకాలు",
            description:
              "వృద్ధులకు పెన్షన్, ఆరోగ్య పరీక్షలు మరియు సంక్షేమ సహాయం.",
            items: [
              "పెన్షన్ సహాయం",
              "ఆరోగ్య పరీక్షలు",
              "ఉచిత బస్ పాస్",
              "వృద్ధుల సంక్షేమం",
            ],
          },
          {
            icon: "🏥",
            title: "ఆరోగ్య పథకాలు",
            description:
              "ఆరోగ్య శిబిరాలు, టీకాలు మరియు కుటుంబ ఆరోగ్య సేవలు.",
            items: [
              "ఆరోగ్య శిబిరాలు",
              "టీకాలు",
              "ఆయుష్మాన్ భారత్",
              "తల్లి & శిశు సంరక్షణ",
            ],
          },
          {
            icon: "🏠",
            title: "ఇళ్ల పథకాలు",
            description:
              "గ్రామీణ కుటుంబాలకు ప్రభుత్వ గృహ సహాయ పథకాలు.",
            items: [
              "PMAY ఇళ్లు",
              "గ్రామీణ గృహ సహాయం",
              "మరుగుదొడ్డి సహాయం",
              "విద్యుత్ కనెక్షన్",
            ],
          },
        ]
      : [
          {
            icon: "🌾",
            title: "Farmer Schemes",
            description:
              "Support for farmers through financial aid, crop insurance, and farming tools.",
            items: [
              "PM-Kisan",
              "Crop Insurance",
              "Free Seeds Support",
              "Subsidy for Tools",
            ],
          },
          {
            icon: "🎓",
            title: "Student Schemes",
            description:
              "Education support for students through scholarships and learning programs.",
            items: [
              "Scholarships",
              "Free Books",
              "Mid-Day Meal",
              "Digital Education",
            ],
          },
          {
            icon: "👩",
            title: "Women Schemes",
            description:
              "Programs for women empowerment, safety, training, and business support.",
            items: [
              "Self Help Groups",
              "Skill Training",
              "Women Safety",
              "Small Loans",
            ],
          },
          {
            icon: "👴",
            title: "Senior Citizen Schemes",
            description:
              "Welfare schemes for elderly people including pension and health support.",
            items: [
              "Pension Support",
              "Health Checkups",
              "Free Bus Pass",
              "Old Age Welfare",
            ],
          },
          {
            icon: "🏥",
            title: "Health Schemes",
            description:
              "Healthcare services, medical camps, vaccination, and family care programs.",
            items: [
              "Health Camps",
              "Vaccination",
              "Ayushman Bharat",
              "Mother Care",
            ],
          },
          {
            icon: "🏠",
            title: "Housing Schemes",
            description:
              "Housing support for rural families through government welfare programs.",
            items: [
              "PMAY Housing",
              "Rural Housing",
              "Toilet Support",
              "Electricity Connection",
            ],
          },
        ];

  return (
    <div className="page-container">
      <h1>🏛️ {t.governmentSchemes}</h1>

      <p className="page-description">
        {language === "te"
          ? "రైతులు, విద్యార్థులు, మహిళలు, వృద్ధులు, ఆరోగ్యం మరియు గృహ అవసరాల కోసం ఉపయోగకరమైన ప్రభుత్వ పథకాలను చూడండి."
          : "Explore useful government schemes for farmers, students, women, senior citizens, healthcare, and housing support."}
      </p>

      <div className="scheme-grid">
        {schemes.map((scheme, index) => (
          <div className="scheme-card" key={index}>
            <div className="scheme-icon">{scheme.icon}</div>

            <h3>{scheme.title}</h3>

            <p>{scheme.description}</p>

            <div className="scheme-tags">
              {scheme.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schemes;