import { translations } from "../translations/language";

function Contact({ language }) {
  const t = translations[language];

  return (
    <div className="page-container">

      <h1>

        {t.contactTitle}

      </h1>

      <p className="page-description">

        {t.contactDesc}

      </p>

      <div className="contact-container">

        <div className="contact-info-card">

          <h2>

            🏢

            {language === "te"
              ? " పంచాయతీ కార్యాలయం"
              : " Panchayat Office"}

          </h2>

          <p>

            <strong>

              📍 {t.address}:

            </strong>

            {" "}
              {language === "te"
                ? "కానూరు గ్రామ్ పంచాయత్"
                : "Kanuru Gram Panchayat"},
              {language === "te"
                ? "పెరవళ్లి మండల్"
                : "Peravali Mandal"},
              {language === "te"
                ? "ఈస్ట్ గోదావరి"
                : "East Godavari"},
              {language === "te"
                ? "ఆంద్రప్రదేశ్ - 534329"
                : "Andhra Pradesh - 534329"}

          </p>

          <p>

            <strong>

              📞 {t.phone}:

            </strong>

            {" "}

            1234567890

          </p>

          <p>

            <strong>

              📧 Email:

            </strong>

            {" "}

            digitalvillage@gmail.com

          </p>

          <p>

            <strong>

              ⏰ {t.timing}:

            </strong>

            {" "}

            {language === "te"
              ? "సోమవారం - శనివారం, ఉదయం 10:00 - సాయంత్రం 5:00"
              : "Monday - Saturday, 10:00 AM - 5:00 PM"}

          </p>

          <div className="quick-contact">

            <a href="tel:1234567890">

              📞

              {" "}

              {t.callNow}

            </a>

            <a href="mailto:digitalvillage@gmail.com">

              📧

              {" "}

              {language === "te"
                ? "ఇమెయిల్ పంపండి"
                : "Send Email"}

            </a>

          </div>

        </div>

        <div className="contact-form-card">

          <h2>

            📝

            {" "}

            {t.sendMessage}

          </h2>

          <form className="contact-form">

            <input
              type="text"
              placeholder={t.yourName}
            />

            <input
              type="email"
              placeholder={t.yourEmail}
            />

            <input
              type="tel"
              placeholder={t.phoneNumber}
            />

            <textarea
              rows="5"
              placeholder={t.yourMessage}
            />

            <button
              type="submit"
              className="btn"
            >

              {t.submitMessage}

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;