'use client'
import Image from "next/image";
import { useState } from "react";
import HeroSection from "./component/heroSection";

//Deployment ID
// AKfycbzttN7NuVhj4gJaOhODX5YZgJpOfvVF4YoGE9XsrlowE4C8iMIspK1YQXIpz7TJqyiO
// Url:https://script.google.com/macros/s/AKfycbzttN7NuVhj4gJaOhODX5YZgJpOfvVF4YoGE9XsrlowE4C8iMIspK1YQXIpz7TJqyiO/exec

const PRODUCT = {
  name: "আমের রাণী - আম্রপালি!", 
  description:
    "যাদের রাজত্বে স্বাগতম! বাদরের রাজত্বের সেরা ফার্মের অনন্যামলী – বাবর এই অনন্যায় আম সরাসরি ঘোড়াইনবগছের বাগান থেকে।",
  options: [
    { label: "১২ কেজি ক্যারেট", value: 12, price: 1450 },
    { label: "২৪ কেজি ক্যারেট", value: 24, price: 2800 },
  ],
  image1: "/img1.jpg",
  image2: "/img2.jpg",
  image3: "/img3.jpg",
  image4: "/big.jpg",
  features: [
    "দেশের অন্যতম সেরা কোয়ালিটির আম্রপালি",
    "১০০% ফরম্যালিন, কার্বাইড ও কেমিক্যালমুক্ত",
    "রসালা, অতিমিষ্ট ও আঁশমুক্ত",
    "প্রতি কেজিতে ৪–৫টি মাঝারি আকারের আম",
  ],
  distribution: "ঢাকা, ২৯ মে, ২০২৪ (হ্যাম মেটিনিউ কীবামেন)",
  contacts: ["01600018656", "01533411968"],
};

const DISTRICTS = [
  "ঢাকা - Dhaka", // ঢাকা প্রথমে
  "বাগেরহাট - Bagerhat", "বান্দরবান - Bandarban", "বরগুনা - Barguna", "বরিশাল - Barisal", "ভোলা - Bhola", "বগুড়া - Bogra", "ব্রাহ্মণবাড়িয়া - Brahmanbaria", // B
  "চাঁদপুর - Chandpur", "চাঁপাইনবাবগঞ্জ - Chapainawabganj", "চট্টগ্রাম - Chittagong", "চুয়াডাঙ্গা - Chuadanga", "কুমিল্লা - Comilla", "কক্সবাজার - Cox's Bazar", // C
  "দিনাজপুর - Dinajpur", // D
  "ফরিদপুর - Faridpur", "ফেনী - Feni", // F
  "গাইবান্ধা - Gaibandha", "গাজীপুর - Gazipur", "গোপালগঞ্জ - Gopalganj", // G
  "হবিগঞ্জ - Habiganj", // H
  "জামালপুর - Jamalpur", "যশোর - Jessore", "ঝালকাঠি - Jhalokati", "ঝিনাইদহ - Jhenaidah", "জয়পুরহাট - Joypurhat", // J
  "খাগড়াছড়ি - Khagrachhari", "খুলনা - Khulna", "কিশোরগঞ্জ - Kishoreganj", "কুড়িগ্রাম - Kurigram", "কুষ্টিয়া - Kushtia", // K
  "লক্ষ্মীপুর - Lakshmipur", "লালমনিরহাট - Lalmonirhat", // L
  "মাদারীপুর - Madaripur", "মাগুরা - Magura", "মানিকগঞ্জ - Manikganj", "মেহেরপুর - Meherpur", "মৌলভীবাজার - Moulvibazar", "মুন্শিগঞ্জ - Munshiganj", "ময়মনসিংহ - Mymensingh", // M
  "নওগাঁ - Naogaon", "নারায়ণগঞ্জ - Narayanganj", "নরসিংদী - Narsingdi", "নাটোর - Natore", "নেত্রকোনা - Netrokona", "নীলফামারী - Nilphamari", "নোয়াখালী - Noakhali", "নড়াইল - Narail", // N
  "পাবনা - Pabna", "পঞ্চগড় - Panchagarh", "পটুয়াখালী - Patuakhali", "পিরোজপুর - Pirojpur", // P
  "রাজবাড়ী - Rajbari", "রাজশাহী - Rajshahi", "রাঙ্গামাটি - Rangamati", "রংপুর - Rangpur", // R
  "সাতক্ষীরা - Satkhira", "শরীয়তপুর - Shariatpur", "শেরপুর - Sherpur", "সিরাজগঞ্জ - Sirajganj", "সুনামগঞ্জ - Sunamganj", "সিলেট - Sylhet", // S
  "টাঙ্গাইল - Tangail", "ঠাকুরগাঁও - Thakurgaon" // T
];

const COURIERS = [
  "Sundarban",
  "Karatoa",
  "AJR",
  "Janani",
];

// const TESTIMONIALS = ['/test.jpeg', '/test.jpeg','/test.jpeg']

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "",
    detailedAddress: "",
    courier: "",
    pack: 12, // default to 12kg
    bkashTransactionId: "",
    bkashNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [bkashNumberError, setBkashNumberError] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  // Fullscreen image modal state
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
const handleShowPayment = () => {
  setShowPayment(true);
};
  // console.log(DISTRICTS.length)
  // Phone validation function
  const validatePhone = (phoneNumber: string): string => {
    // Remove any spaces or dashes
    const cleanPhone = phoneNumber.replace(/[\s-]/g, '');
    
    // Check if it's exactly 11 digits
    if (cleanPhone.length !== 11) {
      return "ফোন নম্বর অবশ্যই ১১ সংখ্যার হতে হবে";
    }
    
    // Check if it contains only numbers
    if (!/^\d+$/.test(cleanPhone)) {
      return "ফোন নম্বরে শুধুমাত্র সংখ্যা থাকতে পারবে";
    }
    
    // Check if it starts with valid prefixes
    const validPrefixes = ['013', '014', '015', '016', '017', '018', '019'];
    const prefix = cleanPhone.substring(0, 3);
    
    if (!validPrefixes.includes(prefix)) {
      return "ফোন নম্বর অবশ্যই 013, 014, 015, 016, 017, 018, বা 019 দিয়ে শুরু হতে হবে";
    }
    
    return ""; // No error
  };

  // bKash number validation function (same as phone validation)
  const validateBkashNumber = (bkashNumber: string): string => {
    // Remove any spaces or dashes
    const cleanNumber = bkashNumber.replace(/[\s-]/g, '');
    
    // Check if it's exactly 11 digits
    if (cleanNumber.length !== 11) {
      return "বিকাশ নম্বর অবশ্যই ১১ সংখ্যার হতে হবে";
    }
    
    // Check if it contains only numbers
    if (!/^\d+$/.test(cleanNumber)) {
      return "বিকাশ নম্বরে শুধুমাত্র সংখ্যা থাকতে পারবে";
    }
    
    // Check if it starts with valid prefixes
    const validPrefixes = ['013', '014', '015', '016', '017', '018', '019'];
    const prefix = cleanNumber.substring(0, 3);
    
    if (!validPrefixes.includes(prefix)) {
      return "বিকাশ নম্বর অবশ্যই 013, 014, 015, 016, 017, 018, বা 019 দিয়ে শুরু হতে হবে";
    }
    
    return ""; // No error
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Phone validation on change
    if (name === 'phone') {
      const error = validatePhone(value);
      setPhoneError(error);
    }
    
    // bKash number validation on change
    if (name === 'bkashNumber') {
      const error = validateBkashNumber(value);
      setBkashNumberError(error);
    }
    
    // Reset courier when district changes
    if (name === 'district') {
      setForm(prev => ({ ...prev, district: value, courier: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final phone validation before submission
    const phoneValidationError = validatePhone(form.phone);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      return;
    }
    
    // Final bKash number validation before submission
    const bkashValidationError = validateBkashNumber(form.bkashNumber);
    if (bkashValidationError) {
      setBkashNumberError(bkashValidationError);
      return;
    }
    
    setSubmitted(true);
    setIsLoading(true);

    // Prepare data
    const selectedOption = PRODUCT.options.find(opt => opt.value === Number(form.pack));
    const orderTime = new Date().toLocaleString('bn-BD', { 
      timeZone: 'Asia/Dhaka',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const orderData = {
      name: form.name,
      phone: form.phone.replace(/[\s-]/g, ''), // Clean phone number
      district: form.district,
      detailedAddress: form.detailedAddress,
      courier: form.district === 'ঢাকা' ? 'Home Delivery' : form.courier,
      package: selectedOption ? selectedOption.value : "",
      price: selectedOption ? selectedOption.price : 0,
      bkashTransactionId: form.bkashTransactionId,
      bkashNumber: form.bkashNumber.replace(/[\s-]/g, ''), // Clean bKash number
      orderTime: orderTime,
      orderAmount: selectedOption ? selectedOption.price : 0,
    };

    // Send to Google Sheets
    await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .catch(() => {
        // handle error, show error message, etc.
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  const selectedOption = PRODUCT.options.find(opt => opt.value === Number(form.pack));
  const isDhaka = form.district === 'ঢাকা - Dhaka';
  const handlePackageChange = (value: number) => {
    setForm({ ...form, pack: value });
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center ">
      <HeroSection/>
{/* <div className="text-center text-white my-4 py-8 px-4 text-xl font-semibold bg-[#0d5c3c] ">আর নয় বাজারের অপরিপক্ক, কার্বাইডে পাকানো, নিম্ন মানের, ক্ষতিকর আম!</div> */}

      {/* Key Information Section */}
      <div className="w-full max-w-3xl mx-auto my-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg border-2 border-green-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Product Info */}
          <div className="bg-white rounded-lg p-4 shadow-md border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🥭</span>
              <h3 className="text-lg font-bold text-green-800">আম</h3>
            </div>
            <p className="text-green-700 text-lg">
              চাঁপাইনবাবগঞ্জের আম্রপালি (রসালো, অতিমিষ্ট, আঁশমুক্ত, কেজিতে ৩-৪টা হবে)
            </p>
          </div>

          {/* Delivery Date */}
          <div className="bg-white rounded-lg p-4 shadow-md border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🚚</span>
              <h3 className="text-lg font-bold text-green-800">ডেলিভারি তারিখ</h3>
            </div>
            <p className="text-green-700 text-lg">
              ২৯/৩০ জুন, ২০২৫
            </p>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg p-4 shadow-md border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💳</span>
              <h3 className="text-lg font-bold text-green-800">পেমেন্ট ব্যবস্থা</h3>
            </div>
            <p className="text-green-700 text-lg">
              অর্ডার কনফার্ম করতে বিকাশের মাধ্যমে অগ্রীম পেমেন্ট
            </p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className=" w-full max-w-2xl bg-[#fef5d8] shadow-lg p-4 flex flex-col md:flex-row gap-4 border-b-4 border-green-600">
       {/* Delivery Process Section */}
<div className="w-full max-w-2xl bg-[#fef5d8] shadow-lg p-6 rounded-xl my-4">
  <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">ডেলিভারি প্রক্রিয়া</h2>
  
  <div className="space-y-4">
    {/* Dhaka Delivery */}
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
      <div className="bg-green-100 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-green-800">ঢাকার ভিতর</h3>
        <p className="text-green-700">সম্পূর্ণ হোম ডেলিভারি সেবা </p>
        <p className="text-sm text-gray-600 mt-1">আপনার বাসা/অফিসে সরাসরি পণ্য ডেলিভারি করা হবে</p>
      </div>
    </div>
    
    {/* Outside Dhaka */}
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border-l-4 border-blue-500">
      <div className="bg-blue-100 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-blue-800">ঢাকার বাইরে</h3>
        <p className="text-blue-700">নিকটস্থ কুরিয়ার হাব থেকে কালেক্শন</p>
        <p className="text-sm text-gray-600 mt-1">অর্ডার কনফার্ম করার সময় পছন্দমতোন কুরিয়ার সিলেক্ট করে দিবেন</p>
      </div>
    </div>
  </div>
</div>
        {/* <div className="flex-1 bg-white rounded-lg p-3 flex flex-col items-center">
          <div className="font-bold text-green-700 mb-1">যোগাযোগ করুন</div>
          <div className="text-sm text-gray-800 flex flex-col gap-1">
            {PRODUCT.contacts.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </div> */}
      </div>
      <div className="text-center text-white my-4 py-8 px-4 text-xl font-semibold bg-[#0d5c3c] ">আর নয় বাজারের অপরিপক্ক, কার্বাইডে পাকানো, নিম্ন মানের, ক্ষতিকর আম!</div>
      {/* Features */}
 
        <div className="w-full flex-1 flex justify-center py-4 px-2">
          <Image
            src={PRODUCT.image4}
            alt="আম্রপালি"
            width={500}
            height={500}
            className="md:w-full xl:w-2/6 h-full rounded-xl border border-green-200 object-cover cursor-pointer"
            onClick={() => setFullscreenImage(PRODUCT.image4)}
          />
        </div>
      {/* Images */}
      <div className="w-full max-w-2xl flex flex-row gap-4 my-4 py-4 px-2">
        <div className="flex-1 flex justify-center">
          <Image
            src={PRODUCT.image1}
            alt="আম্রপালি"
            width={180}
            height={120}
            className="rounded-xl border border-green-200 object-cover cursor-pointer"
            onClick={() => setFullscreenImage(PRODUCT.image1)}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={PRODUCT.image2}
            alt="আম্রপালি"
            width={180}
            height={120}
            className="rounded-xl border border-green-200 object-cover cursor-pointer"
            onClick={() => setFullscreenImage(PRODUCT.image2)}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={PRODUCT.image3}
            alt="আম্রপালি"
            width={180}
            height={120}
            className="rounded-xl border border-green-200 object-cover cursor-pointer"
            onClick={() => setFullscreenImage(PRODUCT.image3)}
          />
        </div>
      </div>

{/* Product Options Showcase Section */}
<div className="w-full max-w-3xl mx-auto my-6 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg border-2 border-amber-200">
  <div className="text-center mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2">
      🥭 আমাদের প্যাকেজসমূহ
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {PRODUCT.options.map((option) => (
      <div 
        key={option.value}
        className="relative bg-white rounded-xl shadow-md border-2 border-amber-200 hover:shadow-lg transition-all duration-300"
      >
        {/* Popular Badge for 24kg */}
        {option.value === 24 && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
            জনপ্রিয় ⭐
          </div>
        )}
        
        <div className="p-4">
          {/* Package Header */}
          <div className="text-center mb-3">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg mb-2">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-bold text-amber-800">{option.label}</h3>
          </div>

          {/* Features */}
          <div className="space-y-1 mb-4">
            <div className="flex items-center gap-2 text-green-700 text-sm">
              <span className="text-green-500">✅</span>
              <span>প্রায় {option.value === 12 ? '৪০-৪৫' : '৮৪-৯০'}
টি আম হবে</span>
            </div>
            <div className="flex items-center gap-2 text-green-700 text-sm">
              <span className="text-green-500">✅</span>
              <span>
                {option.value === 12 ? '২-৩ সদস্যের পরিবারের জন্য উপযুক্ত' : '৪-৭  সদস্যের পরিবারের জন্য উপযুক্ত'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-green-700 text-sm">
              <span className="text-green-500">✅</span>
              <span>ক্যারেটে বিশেষ প্যাকেজিং ও সুরক্ষা</span>
            </div>
          </div>

          {/* Price Section */}
                  <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1 flex items-center justify-center gap-1">
              ৳{option.price}
              <span className="text-sm text-black font-medium mt-1">
              (সকল চার্জ সহ)
            </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-[#fef5d8] rounded-xl shadow-md border border-amber-200">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-6">
    আমাদের থেকে কেনো নিবেন?
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      "দেশের অন্যতম সেরা কোয়ালিটির আম্রপালি",
      "১০০% ফর্মালিন, কার্বাইড ও অন্যান্য ক্ষতিকর কেমিক্যালমুক্ত",
      "সরাসরি চাঁপাইনবাবগঞ্জের বাগান থেকে আপনার ঘরে",
      "অর্ডার করার পর গাছ থেকে পরিপক্ক আম সংগ্রহ করা হয় — কোনো পুরনো বা সংরক্ষিত আম নয়",
      "প্রতিটি অর্ডারে হাতে বেছে আম প্যাক করা হয়, যেন আপনি পান সেরা আমগুলো",
      "ঢাকায় হোম ডেলিভারি ও ঢাকার বাইরে পছন্দের কুরিয়ার থেকে নেয়ার সুবিধা",
      "প্রাকৃতিক স্বাদ ও ঘ্রাণ অক্ষুণ্ন রাখতে বিশেষভাবে প্যাকেজিং করা হয়",
      "সাধ্যের মধ্যে সেরা আম্রপালি!"
    ].map((feature, index) => (
      <div key={index} className="flex items-start gap-3 p-3 bg-white bg-opacity-70 rounded-lg">
        <div className="mt-1 text-amber-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-amber-900 font-medium">{feature}</p>
      </div>
    ))}
  </div>
  
  <div className="mt-6 text-center">
    {/* <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
      অর্ডার করুন এখনই
    </button> */}
      {!showForm && !submitted && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition"
            onClick={() => setShowForm(true)}
          >
            অর্ডার করুন এখনই
          </button>
        )}
  </div>
</div>
     {/* <div className="w-full max-w-2xl bg-[#fef5d8]  shadow-lg p-4 flex flex-col gap-2">
        {PRODUCT.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-green-800 text-base">
            <span className="text-green-600 text-xl">✔️</span>
            {f}
          </div>
        ))}
      </div> */}
      {/* Testimonial Marquee */}
      {/* <div className="w-full max-w-2xl overflow-hidden py-4">
        <h2 className="text-green-800 text-center text-2xl font-bold mb-2">কাস্টমার রিভিও</h2>
        <div
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{ willChange: 'transform' }}
        >
          {TESTIMONIALS.concat(TESTIMONIALS).map((img, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image
                src={img}
                alt={`Testimonial ${idx + 1}`}
                width={500}
                height={500}
                className="rounded-xl border border-green-200 object-cover w-full h-32 shadow-md bg-white"
              />
            </div>
          ))}
        </div>
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 8s linear infinite;
          }
        `}</style>
      </div> */}
    

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl border-4 border-white"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 text-black hover:bg-opacity-100 transition"
              onClick={() => setFullscreenImage(null)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Order Button or Form */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-8">
        {/* {!showForm && !submitted && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition"
            onClick={() => setShowForm(true)}
          >
            অর্ডার করুন এখই — সীমিত সময়ের জন্য!
          </button>
        )} */}
        {showForm && !submitted && (
          <form className="w-full bg-[#fef5d8]  rounded-xl shadow-lg p-6 mt-4 space-y-4" onSubmit={handleSubmit}>
            {/* Package Selection */}
            {/* <div className="flex flex-col gap-2">
              <span className="block text-green-800 font-semibold mb-1">প্যাকেজ নির্বাচন করুন</span>
              {PRODUCT.options.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="pack"
                    value={opt.value}
                    checked={form.pack === opt.value}
                    onChange={handlePackChange}
                    className="accent-green-600"
                  />
                  <span className="text-green-800">{opt.label} — {opt.price} টাকা</span>
                </label>
              ))}
            </div> */}
 <div>
                <label className="block text-green-800 font-semibold mb-3">প্যাকেজ নির্বাচন</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRODUCT.options.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => handlePackageChange(option.value)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        form.pack === option.value
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          form.pack === option.value
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}>
                          {form.pack === option.value && (
                            <div className="w-full h-full bg-white rounded-full transform scale-50"></div>
                          )}
                        </div>
                        <div>
                          <div className=" text-green-800">{option.label}</div>
                          <div className="font-semibold text-green-600">{option.price} টাকা (সকল চার্জ সহ)</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            {/* Name */}
            <div>
              <label className="block text-green-800 font-semibold mb-1" htmlFor="name">নাম</label>
              <input
                required
                className="text-green-800 w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-green-800 font-semibold mb-1" htmlFor="phone">মোবাইল নম্বর</label>
              <input
                required
                className={`text-green-800 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                  phoneError ? 'border-red-500 focus:ring-red-400' : 'border-green-300 focus:ring-green-400'
                }`}
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                maxLength={11}
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
              <p className="text-gray-500 text-xs mt-1">
                উদাহরণ: 01712345678 (১১ সংখ্যার, 013-019 দিয়ে শুরু)
              </p>
            </div>

            {/* District */}
            <div>
              <label className="block text-green-800 font-semibold mb-1" htmlFor="district">জেলা</label>
              <select
                required
                className= "text-green-800 w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                id="district"
                name="district"
                value={form.district}
                onChange={handleChange}
              >
                <option className="text-black" value="">জেলা নির্বাচন করুন</option>
                {DISTRICTS.map((district) => (
                  <option className="text-black" key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>

            {/* Detailed Address */}
            <div>
              <label className="block text-green-800 font-semibold mb-1" htmlFor="detailedAddress">বিস্তারিত ঠিকানা</label>
              <textarea
                required
                className="text-green-800 w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                id="detailedAddress"
                name="detailedAddress"
                rows={2}
                value={form.detailedAddress}
                onChange={handleChange}
                placeholder="বাড়ির নম্বর, রাস্তার নাম, এলাকার নাম"
              />
            </div>

            {/* Courier Selection */}
            {form.district && (
              <div>
                <label className="block text-green-800 font-semibold mb-1" htmlFor="courier">
                  {isDhaka ? "ডেলিভারি পদ্ধতি" : "কুরিয়ার সার্ভিস"}
                </label>
                {isDhaka ? (
                  <input
                    className="text-green-800 w-full border border-green-300 rounded px-3 py-2 bg-gray-100"
                    type="text"
                    value="Home Delivery"
                    readOnly
                  />
                ) : (
                  <select
                    required
                    className="text-green-800 w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                    id="courier"
                    name="courier"
                    value={form.courier}
                    onChange={handleChange}
                  >
                    <option value="">কুরিয়ার নির্বাচন করুন</option>
                    {COURIERS.map((courier) => (
                      <option key={courier} value={courier}>{courier}</option>
                    ))}
                  </select>
                )}
              </div>
            )}
      {!showPayment&&(
        <div className="flex justify-between"><span className="font-semibold text-green-800">
                মোট: {selectedOption ? selectedOption.price : 0} টাকা
              </span>
      <button onClick={()=>handleShowPayment()} className="bg-green-800 text-white py-2 px-4 rounded">পেমেন্ট করুন </button>
              
              </div>
      )}

{/* Payment Process Guideline Section */}
      {showPayment && (
        <>
        <div className="w-full max-w-2xl mx-auto my-6 p-6 bg-white rounded-xl shadow-md border border-green-200">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">পেমেন্ট করুন</h2>
        <p className="text-green-700 text-center mb-4">
          এই ব্যাচে আপনার অর্ডার কনফার্ম করতে অগ্রীম পেমেন্ট দিয়ে অর্ডার সম্পন্ন করতে হবে।
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-3/6 text-green-600 font-bold">ধাপ - ১ঃ</div>
            <div className="text-green-900">
              আপনার বিকাশ নাম্বার থেকে <span className="font-bold text-green-800">01600018656</span> নাম্বারে <span className="font-bold text-green-800">{selectedOption ? selectedOption.price : 0} টাকা</span> Make Payment (পেমেন্ট) করুন।
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5/6 text-green-600 font-bold">ধাপ - ২ঃ</div>
            <div className="text-green-900">
              পেমেন্ট সফল হলে ট্র‍্যানজেকশন আইডি (Transaction ID) এবং যেই নাম্বার থেকে পেমেন্ট সম্পন্ন করা হয়েছে সেই নাম্বারটি নিচে প্রদান করুন এবং অর্ডার কনফার্ম করুন
            </div>
          </div>
        </div>
      </div>
            {/* Payment Information */}
            <div className="border-t pt-4">
              <h3 className="text-green-800 font-semibold mb-3">পেমেন্ট তথ্য</h3>
              
              <div>
                <label className="block text-green-800 font-semibold mb-1" htmlFor="bkashTransactionId">বিকাশ ট্র‍্যানজেকশন আইডি</label>
                <input
                  required
                  className="text-green-800 w-full border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  type="text"
                  id="bkashTransactionId"
                  name="bkashTransactionId"
                  value={form.bkashTransactionId}
                  onChange={handleChange}
                  placeholder="যেমন: 9G451XXXXX"
                />
              </div>

              <div className="mt-3">
                <label className="block text-green-800 font-semibold mb-1" htmlFor="bkashNumber">বিকাশ নম্বার</label>
                <input
                  required
                  className={`text-green-800 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                    bkashNumberError ? 'border-red-500 focus:ring-red-400' : 'border-green-300 focus:ring-green-400'
                  }`}
                  type="text"
                  id="bkashNumber"
                  name="bkashNumber"
                  value={form.bkashNumber}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  maxLength={11}
                />
                {bkashNumberError && (
                  <p className="text-red-500 text-sm mt-1">{bkashNumberError}</p>
                )}
                <p className="text-gray-500 text-xs mt-1">
                  যে বিকাশ নম্বর থেকে পেমেন্ট করেছেন (১১ সংখ্যার, 013-019 দিয়ে শুরু)
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold text-green-800">
                মোট: {selectedOption ? selectedOption.price : 0} টাকা
              </span>
              <button
                type="submit"
                disabled={phoneError !== "" || bkashNumberError !== ""}
                className={`font-bold py-2 px-6 rounded shadow ${
                  phoneError !== "" || bkashNumberError !== ""
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                অর্ডার কনফার্ম করুন
              </button>
            </div>
        </>
      )}
          </form>
        )}
        {submitted && isLoading && (
          <div className="w-full bg-green-50 rounded-xl shadow-lg p-6 mt-4 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <svg className="animate-spin h-10 w-10 text-green-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              <h2 className="text-xl font-bold text-green-700 mb-2">অর্ডার প্রসেস হচ্ছে...</h2>
              <p className="text-green-800">দয়া করে অপেক্ষা করুন, আপনার অর্ডার কনফার্ম করা হচ্ছে।</p>
            </div>
          </div>
        )}
        {submitted && !isLoading && (
          <div className="w-full bg-green-50 rounded-xl shadow-lg p-6 mt-4 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-green-700 mb-2">ধন্যবাদ!</h2>
            <p className="mb-4 text-green-800">আপনার অর্ডার গ্রহণ করা হয়েছে। শীঘ্রই যোগাযোগ করা হবে।</p>
            <div className="bg-white rounded-lg p-4 w-full">
              <h3 className="text-green-800 font-bold mb-2">অর্ডার সারাংশ</h3>
              <ul className="text-green-800 text-sm mb-2">
                <li><strong>নাম:</strong> {form.name}</li>
                <li><strong>মোবাইল:</strong> {form.phone}</li>
                <li><strong>জেলা:</strong> {form.district}</li>
                <li><strong>ঠিকানা:</strong> {form.detailedAddress}</li>
                <li><strong>ডেলিভারি:</strong> {isDhaka ? 'Home Delivery' : form.courier}</li>
                <li><strong>প্যাকেজ:</strong> {selectedOption ? selectedOption.label : ""}</li>
                <li><strong>মোট:</strong> {selectedOption ? selectedOption.price : 0} টাকা</li>
                <li><strong>বিকাশ টিআইডি:</strong> {form.bkashTransactionId}</li>
              </ul>
              <button
                className="mt-2 text-green-700 underline"
                onClick={() => { 
                  setShowForm(false); 
                  setSubmitted(false); 
                  setPhoneError("");
                  setBkashNumberError("");
                  setForm({
                    name: "", phone: "", district: "", detailedAddress: "", courier: "", pack: 12, bkashTransactionId: "", bkashNumber: ""
                  }); 
                }}
              >
                নতুন অর্ডার করুন
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="mt-10 text-green-800 font-bold text-sm">&copy; {new Date().getFullYear()} Seasonscape Mangoes।</footer>
    </div>
  );
}