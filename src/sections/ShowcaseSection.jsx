import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a href="https://hotel-booking-nextjs16.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper">
                 <img src="/images/project1.png" alt="Ryde App Interface" />
              </div>
            </a>
            <div className="text-content">
              <h2>
              UAE Hotel Booking
              </h2>
              <p className="text-white-50 md:text-xl">
                A modern hotel booking website designed for the UAE market.
The platform allows users to search for hotels, view available rooms, book their stay, and complete secure online payments easily through a smooth and user-friendly interface.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <a href="https://zeinaboud.github.io/perfumes-store/#/" target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                  />
                </div>
              </a>
              <h2>Perfume Store</h2>
              <p> A modern e-commerce platform for purchasing perfumes online.Users can browse products, view details, add items to the cart, and complete secure online payments through a smooth and intuitive interface</p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <a href="https://yz-directory.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/project3.png" alt="YC Directory App" />
                </div>
              </a>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
