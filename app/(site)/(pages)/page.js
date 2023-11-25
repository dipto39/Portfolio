import About from "../components/home/about"
import Contact from "../components/home/contact"
import Hero from "../components/home/hero"
import Service from "../components/home/service"
import Testimonial from "../components/home/testimonial"
import Work from "../components/home/work"

const Home = async () => {

    return (
<>
    <Hero/>
    <About/>
    <Service/>
    <Work/>
    <Testimonial/>
    <Contact/>
</>
    )
}
export default Home