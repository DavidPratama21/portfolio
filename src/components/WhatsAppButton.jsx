import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  const number = "6285174436737";
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      aria-label="Contact me on WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-elevated transition-all duration-300 hover:scale-110 animate-fade-in"
    >
      <FaWhatsapp className="size-7" />
    </a>
  );
};

export default WhatsAppButton;
