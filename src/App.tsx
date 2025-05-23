
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
];

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FeatureSection />
      <Footer
        logo="ShoeStyle"
        companyName="ShoeStyle"
        links={footerLinks}
      />

    </div>
  )
}

export default App
