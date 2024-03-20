import React, { ReactElement, ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto text-main text-base">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
