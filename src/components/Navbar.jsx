import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { translations } from "../translations/language";

function Navbar({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
}) {
  const [open, setOpen] = useState(false);

  const [dateTime, setDateTime] = useState(
    new Date()
  );

  const t = translations[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const today = dateTime.toLocaleDateString(
    language === "te"

      ? "te-IN"

      : "en-IN",

    {
      day: "2-digit",

      month: "short",

      year: "numeric",
    }
  );

  const time = dateTime.toLocaleTimeString(
    language === "te"

      ? "te-IN"

      : "en-IN",

    {
      hour: "2-digit",

      minute: "2-digit",
    }
  );

  return (
    <>
      <div className="top-header">

        <p>

          {language === "te"

            ? "🇮🇳🌐🏛️🏡 డిజిటల్ ఇండియా"

            : "🇮🇳🌐🏛️🏡 Digital India"}

        </p>

        <div className="top-actions">

          <span>

            📅

            {" "}

            {today}

          </span>

          <span>

            🕐

            {" "}

            {time}

          </span>

        </div>

      </div>

      <nav className="navbar">

        <button
          className="menu-btn"

          onClick={() =>
            setOpen(!open)
          }
        >

          {open

            ? "✖"

            : "☰"}

        </button>

        <Link
          to="/"

          className="logo"

          onClick={closeMenu}
        >

          {language === "te"

            ? "🌐🏡 డిజిటల్ విలేజ్"

            : "🌐🏡 Digital Village"}

        </Link>

        <div
          className={
            open

              ? "nav-links active"

              : "nav-links"
          }
        >

          <NavLink
            to="/"

            end

            onClick={closeMenu}
          >

            🏠

            {" "}

            {t.home}

          </NavLink>

          <NavLink
            to="/about-village"

            onClick={closeMenu}
          >

            🏡

            {" "}

            {t.village}

          </NavLink>

          <NavLink
            to="/schemes"

            onClick={closeMenu}
          >

            🏛️

            {" "}

            {t.schemes}

          </NavLink>

          <NavLink
            to="/hospitals"

            onClick={closeMenu}
          >

            🏥

            {" "}

            {t.hospitals}

          </NavLink>

          <NavLink
            to="/schools"

            onClick={closeMenu}
          >

            🎓

            {" "}

            {t.schools}

          </NavLink>

          <NavLink
            to="/emergency"

            onClick={closeMenu}
          >

            🚨

            {" "}

            {t.emergency}

          </NavLink>

          <NavLink
            to="/events"

            onClick={closeMenu}
          >

            🎉

            {" "}

            {t.events}

          </NavLink>

          <NavLink
            to="/citizen-services"

            onClick={closeMenu}
          >

            🪪

            {" "}

            {language === "te"

              ? "పౌర సేవలు"

              : "Citizen Services"}

          </NavLink>

          <NavLink
            to="/contact"

            onClick={closeMenu}
          >

            📞

            {" "}

            {t.contact}

          </NavLink>

        </div>

        <div className="navbar-actions">

          <div className="lang-switch">

            <button
              className={
                language === "en"

                  ? "active-lang-btn"

                  : ""
              }

              onClick={() =>
                setLanguage("en")
              }
            >

              EN

            </button>

            <button
              className={
                language === "te"

                  ? "active-lang-btn"

                  : ""
              }

              onClick={() =>
                setLanguage("te")
              }
            >

              తెలుగు

            </button>

          </div>

          <button
            className="dark-btn"

            onClick={() =>
              setDarkMode(!darkMode)
            }
          >

            {darkMode

              ? "☀️"

              : "🌙"}

          </button>

        </div>

      </nav>

    </>
  );
}

export default Navbar;