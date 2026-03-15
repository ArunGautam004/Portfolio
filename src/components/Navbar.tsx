import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export const smoother = {
  paused: (_v: boolean) => {},
  scrollTop: (_v: number) => {},
  scrollTo: (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  },
};

export let lenis: Lenis;

const Navbar = () => {
  useEffect(() => {
    const mobile = window.innerWidth <= 1024;

    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // disable touch multiplier on mobile so native scroll works
      touchMultiplier: mobile ? 0 : 1.5,
      wheelMultiplier: 0.9,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const section = element.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section);
          if (target) {
            lenis.scrollTo(target as HTMLElement, {
              offset: 0,
              duration: 1.6,
            });
          }
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AS
        </a>
        <a
          href="mailto:sharmarun004@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sharmarun004@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;