const Footer = () => {
  const logo = "/public/img/logo.svg";

  const product = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];
  const company = ["About", "Team", "Blog", "Careers"];
  const connect = ["Contact", "Newsletter", "Linkedln"];

  return (
    <>
      <div className="footer">
        <div className="footerGrid">
          <div>
            <img src={logo} alt="Logo aziendale" />
          </div>
          <div>
            <nav>
              <ul className="ulFlex">
                <li>
                  <h4>Product</h4>
                </li>
                {product.map((lista, index) => (
                  <li keys={index}>
                    <a href="">{lista}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="ulFlex">
                <li>
                  <h4>Company</h4>
                </li>
                {company.map((lista, index) => (
                  <li keys={index}>
                    <a href="">{lista}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="ulFlex">
                <li>
                  <h4>Connect</h4>
                </li>
                {connect.map((lista, index) => (
                  <li keys={index}>
                    <a href="">{lista}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
