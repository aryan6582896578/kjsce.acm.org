import * as React from "react";
import ContactForm from "./ContactForm";
import SocialLink from "./SocialLink";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 mb-8">
      <main className="flex-grow justify-center px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-white mb-16">
          Contact Us
        </h1>
        
        <div className="max-w-5xl mx-auto flex flex-wrap gap-48 justify-center items-start">
          <ContactForm />
          
          <div className="flex flex-col gap-24 pt-8">
            <SocialLink />
          </div>
        </div>
      </main>
    </div>
  );
}