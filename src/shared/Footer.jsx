import React from "react";
import Logo from "../assets/Home/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <img src={Logo} alt="Logo" className="w-[200px] mb-4" />
        </div>
        <div>
          
          <h2 className="text-lg font-bold mb-2">Contact Information</h2>
          <p className="mb-1">Phone Number: +99 125 125894</p>
          <p className="mb-1">Email: DamieMail@Gmail.Com</p>
          <p className="mb-4">
            Address: 2118 Thornridge Cir.
            <br />
            Syracuse, Connecticut 35624
          </p>
          <p className="font-semibold">
            Have Questions? Reach Out Today For A Customized Solution!
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-2">Services</h2>
          <ul className="space-y-1">
            <li>Structured Cabling (Copper And Fiber)</li>
            <li>Rack And Device Installation</li>
            <li>Break/Fix Services</li>
            <li>Network Migrations And Cutovers</li>
            <li>Site Surveys</li>
            <li>Deployment Of New Network Devices</li>
            <li>Consultations On Cutting-Edge Technologies</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Link</h2>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 py-5 text-center bg-[#71A850] ">

        <ul className=" flex justify-between text-lg container m-auto">
          <li><Link to={'faq'}>FAQ</Link></li>
          <li><Link to={'privacyPolicy'}>Privacy Policy</Link></li>
          <li><Link to={'TermsAndCondition'}>Terms of Condition</Link></li>
          <li>Contact us: info@jasu.us</li>
          <li>Copyright 2022 Jasu, All rights reserved</li>
        </ul>
      </div>
    </footer>
  );
};
