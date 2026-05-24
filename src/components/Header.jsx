import logoImg from "../assets/logo.jpg";

export default function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <header className="main-header">
      <div className="header-content">
        <img
          src={logoImg}
          alt="React Forms Application Logo"
          className="header-logo"
        />

        <div className="header-text">
          <h1>React Forms</h1>

          <p>
            Build scalable, reusable, and user-friendly form experiences with
            React.
          </p>
        </div>
      </div>

      <div className="header-meta">
        <span>Modern Form Handling</span>
        <span>© {currentYear}</span>
      </div>
    </header>
  );
}
