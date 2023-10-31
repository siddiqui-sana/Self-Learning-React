import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
//Importing this way will download all these components in the browser all at ones. So we prefer dynamic (on demard imports)
// import Home from "./components/Home";
// import Store from "./components/Store";
// import { About } from "./components/About";

//Standard syntax for dynamic import using React.lazy
const Home = lazy(() => wait(1000).then(() => import("./components/Home")));
const Store = lazy(() => wait(1000).then(() => import("./components/Store")));
//const About = lazy(() => wait(1000).then(() => import("./components/About"))); //About was exxported as named export. So cannot be imported this way lazily
//React.lazy expects a component/object that is being imported to have a 'default' property like: {default: Component}
const About = lazy(() =>
  import("./components/About").then((module) => {
    return { default: module.About }; //We are renaming our import to default
  })
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

function NavWrapper() {
  return (
    <>
      {/* In JSX, the <nav> tag is used to create an HTML <nav>
       element, which is typically used to define a section 
       of a web page that contains navigation links. The <nav> 
        element is commonly used to create menus, site 
        navigation bars, or any other element that provides
         links for users to navigate through a website or 
         web application. */}
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      {/* For the components that we want to give capability of being lazily loaded we need wrap them inside the React.Suspence */}
      <Suspense fallback={<h1>Loading</h1>}>
        {/* Outlet specifies that here the child routes will be rendered */}
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
export default App;
