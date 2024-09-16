import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Headers(){
  return(
    <div
    style={{
      fontFamily: "DosisMedium",
    }}
    className="h-auto w-auto p-3 flex justify-center items-center font-medium bg-[#8A0303] "
  >
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>

          <NavigationMenuLink href="/" className="text-lg ml-6">Home</NavigationMenuLink>
          {/* <NavigationMenuContent>
            <NavigationMenuLink href="/">Home Link</NavigationMenuLink>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-lg ml-6" href='#ourMission'>Our Mission</NavigationMenuLink>
          {/* <NavigationMenuContent>
            <NavigationMenuLink href="/mission" >
              Mission Link
            </NavigationMenuLink>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-lg ml-6" href='#aboutUs'>About Us</NavigationMenuLink>
          {/* <NavigationMenuContent>
            <NavigationMenuLink href="/about">
              About Link
            </NavigationMenuLink>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">Save Life</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/save-life">
              Donor
            </NavigationMenuLink>
          </NavigationMenuContent>
          <NavigationMenuContent>
            <NavigationMenuLink href="/save-life">
              Hospital
            </NavigationMenuLink>
          </NavigationMenuContent>
          <NavigationMenuContent>
            <NavigationMenuLink href="/save-life">
              Blood Bank
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
    {/* <Link href="/login">
    <div className="flex justify-end right-0 ">
      
      <Button className="bg-inherit text-white hover:bg-white hover:text-black text-lg ">
        Login
      </Button>
      
    </div>
    </Link> */}
  </div>
  )
}