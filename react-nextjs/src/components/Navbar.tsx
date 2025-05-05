const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="#">Damon Dooley-Vrstala</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link active" aria-current="page" href="#">About me</a>
            <a className="nav-link active" aria-current="page" href="#">Projects</a>
            <a className="nav-link active" aria-current="page" href="#">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;