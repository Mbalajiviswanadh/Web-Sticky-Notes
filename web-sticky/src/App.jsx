import { useState } from "react";
import { Download, Sun, Moon, X, Linkedin, Mail } from "lucide-react";
import CliplImg from "./images/img.jpg";
import LogoImg from "./images/logoNote.png";
import Img1 from "./ScreenShots/img1.png";
import Img2 from "./ScreenShots/img2.png";
import Img3 from "./ScreenShots/img3.png";

export default function LandingPage() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleDownload = () => {
    const downloadUrl = ".././public/APP/stickynotes-1.0.0-setup.exe";

    try {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "stickynotes.exe";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again or contact support.");
    }
  };

  const screenshots = [
    { src: Img1, alt: "Desktop App Screenshot 1" },
    { src: Img2, alt: "Desktop App Screenshot 2" },
    { src: Img3, alt: "Desktop App Screenshot 3" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkTheme ? "bg-slate-950" : "bg-slate-100"
      } relative overflow-hidden transition-colors duration-300`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ${
            isDarkTheme
              ? "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
              : "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"
          }`}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-10 lg:px-52 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src={LogoImg} alt="LOGO" className="w-12 h-12" />
            <span
              className={`text-2xl font-bold ${
                isDarkTheme ? "text-white" : "text-slate-900"
              }`}
            ></span>
          </a>
          <div
            onClick={toggleTheme}
            className={`cursor-pointer ${
              isDarkTheme ? "text-white" : "text-slate-900"
            }`}
          >
            {isDarkTheme ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDarkTheme ? "text-purple-300" : "text-purple-600"
          }`}
        >
          Sticky Notes
        </h1>
        <p
          className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
            isDarkTheme ? "text-white/90" : "text-slate-900/90"
          }`}
        >
          Stick your notes, boost your{" "}
          <span className="border-b-2 border-purple-400">productivity!</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleDownload}
            className={`px-6 py-3 rounded-lg text-lg font-semibold ${
              isDarkTheme
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-slate-900/10 text-slate-900 hover:bg-slate-900/20"
            } transition-colors`}
          >
            <Download className="mr-2 h-5 w-5 inline" />
            Download for Windows
          </button>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <video
            controls
            poster={CliplImg}
            className="w-full h-full object-cover"
          >
            <source src={""} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Enhanced Desktop Screenshots Section */}
      <div className="container mx-auto px-4 py-20 overflow-hidden relative z-10">
        <div className="flex justify-center items-center gap-[-25] flex-wrap md:flex-nowrap">
          {screenshots.map((image, index) => (
            <div
              key={index}
              className="relative w-full md:w-[380px] group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`aspect-[16/10] transform transition-transform duration-500 ease-out 
            group-hover:scale-105 group-hover:rotate-0 
            relative z-[1] hover:z-[2]
            ${
              index === 0 ? "-rotate-6" : index === 2 ? "rotate-6" : "rotate-0"
            }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover rounded-xl 
              shadow-lg transition-all duration-500 
              group-hover:shadow-2xl
              border ${
                isDarkTheme ? "border-white/10" : "border-slate-900/10"
              }`}
                />
                {/* Subtle reflection effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t 
              from-black/30 to-transparent rounded-xl 
              group-hover:opacity-0 transition-opacity`}
                ></div>
              </div>
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 blur-xl opacity-0 
            group-hover:opacity-100 transition-opacity 
            bg-purple-400/20`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full lg:max-w-3xl h-auto">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="relative z-10 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div
            className={`border-t ${
              isDarkTheme ? "border-white/10" : "border-slate-900/10"
            } pt-8`}
          >
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/balaji-viswanadh-madhavareddy-875473220/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform ${
                  isDarkTheme
                    ? "text-white/80 hover:text-white"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:madhavareddybalajiviswanadh@gmail.com"
                className={`hover:scale-110 transition-transform ${
                  isDarkTheme
                    ? "text-white/80 hover:text-white"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p
              className={`text-center mt-4 ${
                isDarkTheme ? "text-white/60" : "text-slate-600"
              }`}
            >
              Balaji Viswanadh👦
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// import { useState } from "react";
// import { Monitor, Download, Sun, Moon } from "lucide-react";
// import CliplImg from "./images/img.jpg";
// import LogoImg from "./images/logoNote.png";
// import Img1 from "./ScreenShots/img1.png";
// import Img2 from "./ScreenShots/img2.png";
// import Img3 from "./ScreenShots/img3.png";

// export default function LandingPage() {
//   const [isDarkTheme, setIsDarkTheme] = useState(true);

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   const handleDownload = () => {
//     // Using the absolute path from the public folder
//     const downloadUrl = "/APP/stickynotes.exe";

//     try {
//       // Create an anchor element
//       const link = document.createElement("a");
//       link.href = downloadUrl;
//       // Keep the original filename
//       link.download = "stickynotes.exe";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Download failed:", error);
//       alert("Download failed. Please try again or contact support.");
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         isDarkTheme ? "bg-slate-950" : "bg-slate-100"
//       } relative overflow-hidden transition-colors duration-300`}
//     >
//       {/* Grid Background */}
//       <div className="absolute inset-0">
//         <div
//           className={`absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ${
//             isDarkTheme
//               ? "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
//               : "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]"
//           }`}
//         ></div>
//       </div>

//       {/* Navigation remains the same */}
//       <nav className="container mx-auto px-10 lg:px-52 py-6 relative z-10">
//         <div className="flex items-center justify-between">
//           <a href="/" className="flex items-center space-x-2">
//             <img src={LogoImg} alt="LOGO" className="w-12 h-12" />
//             <span
//               className={`text-2xl font-bold ${
//                 isDarkTheme ? "text-white" : "text-slate-900"
//               }`}
//             ></span>
//           </a>
//           <div
//             onClick={toggleTheme}
//             className={`cursor-pointer ${
//               isDarkTheme ? "text-white" : "text-slate-900"
//             }`}
//           >
//             {isDarkTheme ? (
//               <Sun className="h-5 w-5" />
//             ) : (
//               <Moon className="h-5 w-5" />
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-20 text-center relative z-10">
//         <h1
//           className={`text-4xl md:text-6xl font-bold mb-6 ${
//             isDarkTheme ? "text-purple-300" : "text-slate-900"
//           }`}
//         >
//           Sticky Notes
//         </h1>
//         <p
//           className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
//             isDarkTheme ? "text-white/90" : "text-slate-900/90"
//           }`}
//         >
//           Stick your notes, boost your{" "}
//           <span className="border-b-2 border-purple-400">productivity!</span>
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <button
//             onClick={handleDownload}
//             className={`px-6 py-3 rounded-lg text-lg font-semibold ${
//               isDarkTheme
//                 ? "bg-white/10 text-white hover:bg-white/20"
//                 : "bg-slate-900/10 text-slate-900 hover:bg-slate-900/20"
//             } transition-colors`}
//           >
//             <Download className="mr-2 h-5 w-5 inline" />
//             Download for Windows
//           </button>
//         </div>
//       </div>

//       {/* Rest of the component remains the same */}
//       {/* Video Demo Section */}
//       <div className="container mx-auto px-4 py-12 relative z-10">
//         <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
//           <video
//             controls
//             poster={CliplImg}
//             className="w-full h-full object-cover"
//           >
//             <source src={""} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>

//       {/* Desktop Screenshots */}
//       <div className="container mx-auto px-4 py-20 overflow-hidden relative z-10">
//         <div className="flex justify-center items-center gap-8">
//           <div className="relative w-[400px] aspect-[16/10] rotate-[-5deg] transform hover:rotate-0 transition-transform duration-500">
//             <img
//               src={Img1}
//               alt="Desktop App Screenshot 1"
//               className="rounded-lg shadow-2xl border border-white/20"
//             />
//           </div>
//           <div className="relative w-[400px] aspect-[16/10] transform hover:rotate-0 transition-transform duration-500">
//             <img
//               src={Img2}
//               alt="Desktop App Screenshot 2"
//               className="rounded-lg shadow-2xl border border-white/20"
//             />
//           </div>
//           <div className="relative w-[400px] aspect-[16/10] rotate-[5deg] transform hover:rotate-0 transition-transform duration-500">
//             <img
//               src={Img3}
//               alt="Desktop App Screenshot 3"
//               className="rounded-lg shadow-2xl border border-white/20"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
