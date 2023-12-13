import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import WeOffer from "../../components/WeOffer/WeOffer";
import IndividualOrders from "../../components/IndividualOrders/IndividualOrders";
import OurTechnology from "../../components/OurTechnology/OurTechnology";
import OrderProcess from "../../components/OrderProcess/OrderProcess";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ScrollRestoration } from "react-router-dom";
import Construction from "../Construction/Construction";

const Index = () => {
  return (
    <>
      {/*<Construction />*/}
      <Header />
      <HeroBanner />
      <WeOffer />
      <IndividualOrders />
      <OurTechnology />
      <OrderProcess />
      <ContactUs />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Index;
