import Header from "./Header";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="page">{children}</main>
      <Footer />
    </>
  );
}
