import { Link } from "react-router-dom";
import { translations } from "../translations/language";

function Footer({ language }) {
  const t = translations[language];

  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>

          <h3>
              {language === "te"
                ? "🌐🏠డిజిటల్ విలేజ్ పోర్టల్"
                : " 🌐🏠Digital Village Portal"}

          </h3>

          <p>

            {t.footerText}

          </p>

        </div>

        <div>

          <h4>

            {t.quickLinks}

          </h4>

          <Link to="/">

            {t.home}

          </Link>

          <Link to="/about-village">

            {t.village}

          </Link>

          <Link to="/schemes">

            {t.schemes}

          </Link>

          <Link to="/events">

            {t.events}

          </Link>

        </div>

        <div>

          <h4>

            {t.services}

          </h4>

          <Link to="/hospitals">

            {t.hospitals}

          </Link>

          <Link to="/schools">

            {t.schools}

          </Link>

          <Link to="/emergency">

            {t.emergency}

          </Link>

          <Link to="/contact">

            {t.contact}

          </Link>

        </div>

        <div>

          <h4>

            {language === "te"
              ? "సంప్రదింపు"
              : "Contact"}

          </h4>

          <p>

            📍

            {" "}
            {language === "te"
              ? "కానూరు"
              : "Kanuru"},
            {language === "te"
              ? "పెరవళ్లి"
              : "Peravali Mandal"},
            {language === "te"
              ? "ఈస్ట్ గోదావరి"
              : "East Godavari"},
            {language === "te"
              ? "ఆంద్రప్రదేశ్ - 534329"
              : "Andhra Pradesh - 534329"}

          </p>

          <p>

            📞

            {" "}

            1234567890

          </p>

          <p>

            📧

            {" "}

            digitalvillage@gmail.com

          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          {
            language === "te"
              ? "©🌐🏠2026 డిజిటల్ విలేజ్ పోర్టల్ | డిజైన్ & అభివృద్ధి భార్గవి సింహాద్రి ద్వారా."
              : "©🌐🏠2026 Digital Village Portal | Designed & Developed by Bhargavi Simhadri ."
          }

        </p>

      </div>

    </footer>
  );
}

export default Footer;