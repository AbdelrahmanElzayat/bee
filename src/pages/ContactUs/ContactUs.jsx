import { useEffect } from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import Contact from "../../components/ContactComponents/Contact";

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <MainLayout>
        <Contact/>
    </MainLayout>
  );
};

export default ContactUs;
