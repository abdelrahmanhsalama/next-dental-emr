import Link, { LinkProps } from "next/link";
import React from "react";

type LinkButtonProps = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

const HeaderLinks = [
  { title: "Home", url: "" },
  { title: "Features", url: "" },
  { title: "Pricing", url: "" },
];

const HeaderButton = ({ className, children, ...props }: LinkButtonProps) => {
  return (
    <Link
      className={`border px-4 py-2 rounded-full ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};

const LoginButton = () => {
  return (
    <HeaderButton
      className="bg-background hover:bg-foreground hover:text-background cursor-pointer duration-200"
      href=""
    >
      Login
    </HeaderButton>
  );
};

const SignupButton = () => {
  return (
    <HeaderButton
      className="bg-foreground hover:bg-background text-background hover:text-foreground cursor-pointer duration-200"
      href=""
    >
      Signup
    </HeaderButton>
  );
};

const HomeHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex-1 text-xl">✨ Ibtesama</div>
      <nav>
        <ul className="flex-1 flex justify-center gap-4">
          {HeaderLinks.map((link) => (
            <li key={link.title} className="hover:border-b">
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 flex justify-end gap-2">
        <LoginButton />
        <SignupButton />
      </div>
    </header>
  );
};

export default HomeHeader;
