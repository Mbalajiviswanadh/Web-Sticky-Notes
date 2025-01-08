import { useState } from "react";
import {
  Download,
  Sun,
  Moon,
  X,
  Linkedin,
  Mail,
  Plus,
  Database,
  Palette,
  Pin,
  Save,
  Layout,
  Code,
} from "lucide-react";
import CliplImg from "./images/clip.png";
import LogoImg from "./images/logoNote.png";
import Img1 from "./ScreenShots/img1.png";
import Img2 from "./ScreenShots/img2.png";
import Img3 from "./ScreenShots/img3.png";
import VID from "./Video/stickynoteDemo.mp4";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Rich Text Editor",
      description: "Full-featured text editor powered by TipTap",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Dark/Light Theme",
      description: "Switch between dark and light modes",
    },
    {
      icon: <Pin className="w-6 h-6" />,
      title: "Note Pinning",
      description: "Pin notes as floating windows with adjustable opacity",
    },
    {
      icon: <Save className="w-6 h-6" />,
      title: "Auto-Save",
      description: "Changes are saved automatically",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SQLite Storage",
      description: "Local database for reliable data persistence",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Real-time Sync",
      description: "Changes sync across all windows instantly",
    },
  ];

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleDownload = () => {
    const downloadUrl = "../APP/stickynotes-1.0.0-setup.exe";

    try {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "stickynotes-1.0.0-setup.exe";
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
          className={`text-6xl md:text-6xl font-bold mb-6 ${
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
            <Download className="mr-2 h-5 w-5 inline animate-bounce text-purple-600" />
            Download for Windows
          </button>
        </div>
        <a
          className="text-gray-400 border-b-2 border-dashed border-purple-400"
          href="https://github.com/Mbalajiviswanadh/Sticky-Notes"
        >
          or clone from github
        </a>
      </div>

      {/* Video Demo Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <video
            controls
            poster={CliplImg}
            className="w-full h-full object-cover"
          >
            <source src={VID} type="video/mp4" />
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
      {/* App Details Section */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              isDarkTheme ? "text-purple-300" : "text-purple-600"
            }`}
          >
            Features & Details
          </h2>
          <p
            className={`text-lg ${
              isDarkTheme ? "text-white/80" : "text-slate-700"
            }`}
          >
            A modern Electron-based desktop application for managing your notes
            with a sleek interface
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl transition-all duration-300 ${
                isDarkTheme
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              <div
                className={`mb-4 ${
                  isDarkTheme ? "text-purple-300" : "text-purple-600"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkTheme ? "text-white" : "text-slate-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`${
                  isDarkTheme ? "text-white/70" : "text-slate-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Usage Guide */}
        <div
          className={`rounded-xl lg:mx-20  p-8 mb-16 ${
            isDarkTheme ? "bg-white/5" : "bg-white"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              isDarkTheme ? "text-purple-300" : "text-purple-600"
            }`}
          >
            How to Use
          </h3>

          <div className="grid md:grid-cols-2 gap-8 ">
            <div>
              <h4
                className={`text-xl font-semibold mb-4 ${
                  isDarkTheme ? "text-white" : "text-slate-900"
                }`}
              >
                Creating Notes
              </h4>
              <ol
                className={`list-decimal list-inside space-y-2 ${
                  isDarkTheme ? "text-white/70" : "text-slate-600"
                }`}
              >
                <li>Click the '+' button in the top right</li>
                <li>Enter a title for your note</li>
                <li>Write your note content using the rich text editor</li>
                <li>Click 'Save' to store your note</li>
              </ol>
            </div>

            <div>
              <h4
                className={`text-xl font-semibold mb-4 ${
                  isDarkTheme ? "text-white" : "text-slate-900"
                }`}
              >
                Pinning Notes
              </h4>
              <ol
                className={`list-decimal list-inside space-y-2 ${
                  isDarkTheme ? "text-white/70" : "text-slate-600"
                }`}
              >
                <li>Click the pin icon on any note</li>
                <li>The note will appear in a floating window</li>
                <li>Adjust opacity using '+' and '-' buttons</li>
                <li>Edit content directly in the floating window</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className={`rounded-xl p-8 lg:mx-20 ${
            isDarkTheme ? "bg-white/5" : "bg-white"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              isDarkTheme ? "text-purple-300" : "text-purple-600"
            }`}
          >
            Technologies Used
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4
                className={`text-xl font-semibold mb-4 ${
                  isDarkTheme ? "text-white" : "text-slate-900"
                }`}
              >
                Frontend
              </h4>
              <ul
                className={`list-disc list-inside space-y-2 ${
                  isDarkTheme ? "text-white/70" : "text-slate-600"
                }`}
              >
                <li>React for UI components</li>
                <li>TipTap for rich text editing</li>
                <li>Tailwind CSS for styling</li>
                <li>Lucide icons for UI elements</li>
              </ul>
            </div>

            <div>
              <h4
                className={`text-xl font-semibold mb-4 ${
                  isDarkTheme ? "text-white" : "text-slate-900"
                }`}
              >
                Backend
              </h4>
              <ul
                className={`list-disc list-inside space-y-2 ${
                  isDarkTheme ? "text-white/70" : "text-slate-600"
                }`}
              >
                <li>Electron for desktop runtime</li>
                <li>SQLite3 for data storage</li>
                <li>IPC for window communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
