const NavBar = () => {
  const logo = "/public/img/logo.svg";

  const navPrincipale = ["Product", "Company", "Connect"];

  return (
    <div className="containerNav">
      <div>
        <img src={logo} alt="Il logo del sito" />
        <nav>
          <ul>
            {navPrincipale.map((lista,index) => (
                <li keys={index}>{lista}</li>
            ))}
            </ul>
        </nav>
      </div>
      <div>
        <span>login</span>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;