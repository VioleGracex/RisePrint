
import '../App.css';
import '../Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { PriceList } from '../components/PriceList';
import FloatingCatalogMenuBar from '../components/floatingCatalogBar';
const HomePage = () => {
    return (
        <>
         
      <Banner />
      <Services />
      <PriceList />

      <Contact />
      <Footer />
        </>
    )
}

export default  HomePage;