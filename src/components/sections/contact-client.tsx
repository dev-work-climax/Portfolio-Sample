"use client";

import ContactSection from "./contact";

interface Metadata {
  title: string;
  description: string;
  author: string;
  email: string;
}

interface ContactSectionClientProps {
  metadata: Metadata;
}

const ContactSectionClient = () => {
  return <ContactSection />;
};

export default ContactSectionClient; 