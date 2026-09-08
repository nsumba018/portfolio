import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">nsumba.dev</a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/Herve_IRAKOZE_NSUMBA_Resume.pdf" download="Herve_IRAKOZE_NSUMBA_Resume" className="resume-btn">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
