import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

type Props = {
  children: React.ReactNode;
  //? means prop is optional
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div> //top level div of whole app, use flex to take up entirety of screen in terms of height
    //add space to the left and right of content on page, py-10 to seperate header from page
    //min-h screen makes elements span entirety of screen
  );
};

export default Layout;
