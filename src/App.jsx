// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Hero2 from "./components/Hero2";
// import Rating from "./components/Rating";
// import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header /> {/* Header will appear on both routes */}
        
//         <Switch>
//           {/* Route for Home */}
//           <Route exact path="/">
//             <Hero />
//             <Hero2 />
//             <About />
//             <Rating />
//             <Footer />
//           </Route>

//           {/* Route for Gallery */}
//           <Route path="/gallery">
//             <Gallery />
//             <Footer /> {/* Footer remains on the gallery page as well */}
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Hero2 from "./components/Hero2";
import Rating from "/src/components/Rating";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Hero2 />
      <Rating />
      <Gallery /> {/* Gallery content included directly on the homepage */}
      <Footer />
    </div>
  );
}

export default App;
