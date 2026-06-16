import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      path: "/",
      icon: "🏠",
      en: "Home",
      te: "హోమ్",
    },

    {
      path: "/about-village",
      icon: "🏡",
      en: "About Village",
      te: "గ్రామం",
    },

    {
      path: "/schemes",
      icon: "🏛️",
      en: "Schemes",
      te: "పథకాలు",
    },

    {
      path: "/hospitals",
      icon: "🏥",
      en: "Hospitals",
      te: "ఆసుపత్రులు",
    },

    {
      path: "/schools",
      icon: "🎓",
      en: "Schools",
      te: "పాఠశాలలు",
    },

    {
      path: "/emergency",
      icon: "🚨",
      en: "Emergency",
      te: "అత్యవసరం",
    },

    {
      path: "/events",
      icon: "🎉",
      en: "Events",
      te: "కార్యక్రమాలు",
    },

    {
      path: "/citizen-services",
      icon: "🪪",
      en: "Citizen Services",
      te: "పౌర సేవలు",
    },

    {
      path: "/contact",
      icon: "📞",
      en: "Contact",
      te: "సంప్రదించండి",
    },
  ];

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
    ? "🏛️ డిజిటల్ విలేజ్ | ప్రజా సమాచార పోర్టల్"
    : "🏛️ Digital Village | Public Information Portal"}
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

            ? "🌐🏡 డిజిటల్ విలేజ్ పోర్టల్"

            : "🌐🏡 Digital Village Portal"}

        </Link>

        <div
          className={
            open

              ? "nav-links active"

              : "nav-links"
          }
        >

          {menuItems.map((item) => (

            <NavLink
              key={item.path}

              to={item.path}

              end={item.path === "/"}

              onClick={closeMenu}
            >

              {item.icon}

              {" "}

              {language === "te"

                ? item.te

                : item.en}

            </NavLink>

          ))}

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