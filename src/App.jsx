import "./App.css";

//todo Header components
import NavBar from "./assets/components/header/NavBar";
import Header from "./assets/components/header/Header";

//todo Content components
import ContentSez1 from "./assets/components/main/ContentSez1";
import ContentSez2 from "./assets/components/main/ContentSez2";
import ContentSez3 from "./assets/components/main/ContentSez3";

//todo Footer components
import Footer from "./assets/components/footer/Footer";

function app() {
  return (
    <>
      <body>
        <header>
          <div className="containerImg">      <NavBar />
          <Header />
          </div>
        </header>
        <main>
          <ContentSez1 />
          <ContentSez2 />
          <ContentSez3 />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default app;