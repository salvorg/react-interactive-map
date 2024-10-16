import React, {ReactNode} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="max-w-7xl w-full mx-auto px-4">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;