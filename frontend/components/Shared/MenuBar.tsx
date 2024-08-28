"use client";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        // TODO

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "brand-gradient rounded-lg text-light-900"
                  : "text-neutral-500"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "brand-color"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="text-dark100_light900"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="background-light900_dark200 text-dark100_light900 no-scrollbar overflow-y-auto border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/xspace.svg"
            width={23}
            height={23}
            alt="Tofee"
          />

          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            X <span className="text-amber-500">Space</span>
          </p>
        </Link>
        <div className="no-scrollbar flex grow flex-col justify-between overflow-y-auto ">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
        <div>
          <section>
            <div className=" flex flex-col gap-3 pt-4">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-brand-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
