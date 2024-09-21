"use client";
import { signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Avatar from "../myCustomComponents/avatar";

export default function Headers() {
  return (
    <>
      <div
        style={{
          fontFamily: "DosisMedium",
        }}
        className="h-auto w-auto p-3 flex justify-center items-center font-medium bg-[#8A0303] max-sm:-ml-2 gap-96"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-lg ml-6">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg ml-6" href="#ourMission">
                Our Mission
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg ml-6" href="/blogs">
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg ml-6" href="#aboutUs">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/">
        <Button >LogOut</Button>
        </Link>
      </div>
    </>
  );
}
