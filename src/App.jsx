import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import FeatureSection from "./components/Feature"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
import Workflow from "./components/Workflow"
import Testimonials from "./components/Testimonials"
function App() {

  return (
    <>
     <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6"><Hero/></div>    
      <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer /> 
    </>
  )
}

export default App
