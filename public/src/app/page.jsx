"use client"
import React from "react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AuthModal from "../components/auth/AuthModal";

import { useAppStore } from '../store/store';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthModalOpen } = useAppStore();

  return <div>
    <Navbar />
    <Footer/>
    {
      isAuthModalOpen && <AuthModal />
    }
    
  </div>;
};

export default page;
