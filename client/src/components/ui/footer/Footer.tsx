import React from "react";
import FooterIcon from "./FooterIcon";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className={
        "bg-slate-800 h-20 border-0 rounded-t-sm p-8 px-24 border-blue-900"
      }
    >
      <div className="w-1/4 flex flex-col justify-center">
        <p className="text-slate-200 font-semibold text-lg"> Follow Us </p>
        <FooterIcon href="https://github.com/jerenob1999" icon={FaGithub} />
      </div>
    </footer>
  );
}

export default Footer;
