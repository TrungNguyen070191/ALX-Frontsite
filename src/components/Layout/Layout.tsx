import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />

      <div className="main-content">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
