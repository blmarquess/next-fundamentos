import Header from "./Header";

export default function Layout({children}) {
  return (
    <>
      <section className="header-page">
        <Header />
      </section>

      <section className="main-page">
          {children}
      </section>

      <section className="footer-page">
        <footer>RodaPé</footer>
      </section>
    </>
  );
}