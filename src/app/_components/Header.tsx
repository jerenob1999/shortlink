import React from "react";
import {
  Navigation,
  NavigationItem,
  NavigationContent,
} from "@/components/ui/navigation";
import { Path } from "@/types/links";

const paths = [
  {
    title: "Login",
    href: Path.LOGIN,
  },
  {
    title: "Sign up",
    href: Path.SIGNUP,
  },
];

function Header() {
  return (
    <Navigation className="h-20 w-full">
      <NavigationContent className="bg-slate-800 px-24 h-16">
        <div className="flex justify-between h-full">
          <li className="list-none flex justify-between items-center">
            <ul>
              <NavigationItem
                href={Path.HOME}
                className="py-4 font-bold text-2xl text-slate-800 hover:text-blue-500"
              >
                <span className="text-neutral-50">Short</span>
                <span className="text-blue-600">Link</span>
              </NavigationItem>
            </ul>
          </li>
          <li className="list-none flex justify-between items-center">
            {paths.map((path) => (
              <ul className="rounded-lg" key={path.href}>
                <NavigationItem
                  href={path.href}
                  className="p-4 font-semibold text-neutral-50 hover:text-blue-500"
                >
                  {path.title}
                </NavigationItem>
              </ul>
            ))}
          </li>
        </div>
      </NavigationContent>
    </Navigation>
  );
}

export default Header;
