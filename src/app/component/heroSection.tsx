import Image from "next/image";

// Hero Section Component
const HeroSection = () => {
  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "8801600018656"; // Remove + and spaces
    const message = "আসসালামু আলাইকুম! আম্রপালি আমের অর্ডার সম্পর্কে জানতে চাই।";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMessenger = () => {
    // Replace with your Facebook page username or ID
    const facebookPage = "yourpagename"; // Replace with actual page name
    const messengerUrl = `https://m.me/${facebookPage}`;
    window.open(messengerUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = "tel:+8801600018656";
  };

  return (
    <div className="relative w-full h-[60vh] max-w-6xl mx-auto">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      {/* <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center z-0"
      ></div> */}
      <Image className="absolute inset-0 object-cover w-full h-full" alt="aam" width={500} height={500} src={'/img.jpeg'}></Image>
      <div className="absolute inset-0 bg-black opacity-46 z-0"></div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            আমের রাণী - আম্রপালি
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md max-w-2xl mx-auto">
            স্বাদে, গন্ধে আর মাধুর্যে অতুলনীয় — রাজকীয় এই আম এবার পৌঁছে যাবে আপনার বাসায়, সরাসরি চাঁপাইনবাবগঞ্জের বাগান থেকে।
          </p>
        </div>

        {/* Special Offer Badge */}
        <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 animate-pulse shadow-xl">
          অর্ডারের শেষ সময় - ২৭ জুন, ২০২৫, শুক্রবার
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
            </svg>
            
          </button>

          {/* Call Button */}
          <button
            onClick={handleCall}
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </button>

          {/* Messenger Button */}
          <button
            onClick={handleMessenger}
            className="flex items-center gap-3 bg-[#0084FF] hover:bg-[#0069D9] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path fill="currentColor" d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.5l3.13 3.259L19.825 8.5l-6.632 6.463z"/>
            </svg>
            
          </button>
        </div>

        {/* Phone Numbers */}
        {/* <div className="mt-8 text-center">
          <p className="text-lg text-white mb-2">হটলাইন নম্বর:</p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-white">
            <a href="tel:+8801600018656" className="hover:text-yellow-300 transition-colors flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1">
                <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              01600018656
            </a>
            <a href="tel:+8801533411968" className="hover:text-yellow-300 transition-colors flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1">
                <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              01533411968
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;