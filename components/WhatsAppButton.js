export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9863486932"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 hover:shadow-xl transition-all z-50"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}