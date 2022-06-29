import "./App.css";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/home";
import Category from "../src/components/category/home2";
import TopSelling from "../src/components/top selling/home3";

import BookingSteps from "./components/bookingSteps/home5";

import Testimonials from "./components/testimonials/home4";

import Brand from "../src/components/brands/brand";
import Substribe from "./components/Subscriptiondiv/home7";
import Footer from "./components/footer/footer.js";


function App() {

  return (
    <div>
     <Navbar /> 
     <Home />
     <Category />
     <TopSelling/>
     <BookingSteps/>
     <Testimonials/>
     <Brand/> 
     <Substribe/>
     <Footer />
     {/*  
      
      
      
      
      
        */}
    </div>
  );
}

export default App;
