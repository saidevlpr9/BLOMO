'use client'
import { Medal } from "lucide-react";
import  {HoverEffect}  from "../../components/ui/card-hover-effect";
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
import Image from "next/image";
import dashBoard from "../assets/demoDashBoard.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../myCustomComponents/card";
import Link from "next/link";
import {
  LongHorizontalCardLeft,
  LongHorizontalCardRight,
} from "../myCustomComponents/longHorizontalcard";
import request from "../assets/request.png";
import bloodBank from "../assets/bloodBank.png";
import connect from "../assets/connect.png";
import exchange from "../assets/exchange.png";
import lifeSaving from "../assets/lifeSaving.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";




const LandingPage = () => {
  const projects = [
    {
      "title": "Connecting Lives",
      "context": "Bridging Donors and Recipients",
      "description": "Blomo connects individuals in urgent need of blood with nearby donors who have the same blood group. Our platform simplifies the process by providing a fast, reliable way to find a match and facilitate a life-saving donation, ensuring that help is always close at hand."
    },
    {
      "title": "Collaboration with Blood Banks",
      "context": "Working Hand-in-Hand with Blood Banks",
      "description": "If no donor match is available, Blomo partners with local blood banks to ensure you get the required blood type. We enable an exchange system to release the needed blood and save lives."
    },
    {
      "title": "Empowering Communities",
      "context": "Be a Lifeline",
      "description": "Blomo empowers individuals to become heroes. Whether you donate or facilitate an exchange, your actions make a life-saving difference. Join us in building a community where giving is part of everyday life."
    },
    {
      "title": "Awareness and Engagement",
      "context": "Spreading Awareness Through Our Blog",
      "description": "Blomo also serves as an awareness hub. Our blog helps spread the word about blood donation, and hospitals can post upcoming blood donation camps to keep the community engaged and informed."
    }
  ]
  
  const words = [
    {
      text: " One Selfless Act at a Time",
    },
    {
      text: "One Vital Gift at a Time",
    },
    {
      text: "One Brave Choice at a Time",
    },
    {
      text: "One Lifeline at a Time",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
       <BackgroundBeamsWithCollision>
      <div className="mb-20 h-auto pt-28 ">
     
        {/* HeroSection */}

        <div className="flex p-16 justify-center items-center max-sm:pb-4">
          <h1 className="text-[#8A0303] text-5xl max-sm:text-3xl text-nowrap">
            Be a Blomo Hero: Save lives,
            <br />
            <p className="text-center">
              One Donation
              <span className="font-bold" style={{ fontFamily: "DosisBold" }}>
                {" "}
                at a Time
              </span>
            </p>
          </h1>
        </div>
        <div className="flex justify-center items-center mb-7">
          <p className="text-wrap text-[black] w-1/2 h-auto max-sm:w-2/3">
            Connecting Blood Donors with Those in Critical Need Every drop of
            blood can be a beacon of hope. At Blomo, we bridge the gap between
            dedicated blood donors and individuals facing urgent situations.
            Whether you’re here to donate or request blood, our platform makes
            it easy to connect and make a significant difference. Join Blomo
            today and become the lifeline someone is waiting for.
          </p>
        </div>
        <div className="flex justify-center items-start h-auto w-auto">
          <Link href="/login">
            <Button className="h-12 w-48 hover:cursor-pointer text-lg bg-[#8A0303] hover:bg-black">
              Save A Life
            </Button>
          </Link>
        </div>
      
      </div>
      </BackgroundBeamsWithCollision>
      
      {/* Testimonials */}
      <div id='aboutUs'>
        <h1 className="h-4 pt-32 bg-[#FDFDFD] text-4xl pl-8 text-[black] max-sm:pb-9" >
          See What People Have To Say About Us
        </h1>
        <div className="flex justify-center items-center bg-[#FDFDFD] w-full h-auto pt-20 pb-28 max-sm:w-auto">
          <Carousel className="bg-black w-1/2 h-auto p-10 rounded-lg max-sm:w-auto">
            <CarouselContent className="">
              <CarouselItem >
                <div>
                  <div className="mb-5">
                    <h1 className="text-white text-3xl font-medium">
                      Emily S.
                    </h1>
                    <p className="text-gray-400">~Donor</p>
                  </div>
                  Donor "Blomo has made donating blood incredibly easy. The
                  platform connects me with people in need, and the process is
                  quick and efficient. Knowing that my donation could save a
                  life is the most rewarding feeling. I’m proud to be part of
                  such a meaningful community."
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <div className="mb-5">
                    <h1 className="text-white text-3xl font-medium">
                      Rahul M.
                    </h1>
                    <p className="text-gray-400">~Recipient</p>
                  </div>
                  Donor "Blomo has made donating blood incredibly easy. The
                  platform connects me with people in need, and the process is
                  quick and efficient. Knowing that my donation could save a
                  life is the most rewarding feeling. I’m proud to be part of
                  such a meaningful community."
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <div className="mb-5">
                    <h1 className="text-white text-3xl font-medium">
                      Sarah K.
                    </h1>
                    <p className="text-gray-400">~Medical Professional</p>
                  </div>
                  "Blomo has revolutionized how we connect patients with blood
                  donors. It streamlines the entire process, making it easier
                  and faster to find matches. As a healthcare provider, I’ve
                  seen firsthand the difference it makes in saving lives."
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-black max-sm:hidden" />
            <CarouselNext className="bg-black max-sm:hidden" />
          </Carousel>
        </div>
      </div>
      {/* Our Mission */}
      <div className="pt-14 pl-24 pr-24 max-sm:p-10" id="ourMission">
        <h1 className="text-center pb-20 text-[#8A0303] max-sm:text-nowrap">Our Mission</h1>
        <div className=" border-slate-800 border-4 rounded-3xl p-10 max-sm:w-auto h-auto max-sm:p-3">
          <div className="flex justify-center items-center max-sm:flex-col">
          {/* <HoverEffect items={projects} /> */}

            <Card
              title="Connecting Lives"
              context="Bridging Donors and Recipients"
              description="Blomo connects individuals in urgent need of blood with nearby donors who have the same blood group. Our platform simplifies the process by providing a fast, reliable way to find a match and facilitate a life-saving donation, ensuring that help is always close at hand."
            />
            <Card
              title="Collaboration with Blood Banks"
              context="Working Hand-in-Hand with Blood Banks"
              description="If no donor match is available, Blomo partners with local blood banks to ensure you get the required blood type. We enable an exchange system to release the needed blood and save lives."
            />
          </div>
          <div className="flex justify-center items-center max-sm:flex-col">
            <Card
              title="Empowering Communities"
              context="Be a Lifeline"
              description="Blomo empowers individuals to become heroes. Whether you donate or facilitate an exchange, your actions make a life-saving difference. Join us in building a community where giving is part of everyday life."
            />
            <Card
              title="Awareness and Engagement"
              context="Spreading Awareness Through Our Blog"
              description="Blomo also serves as an awareness hub. Our blog helps spread the word about blood donation, and hospitals can post upcoming blood donation camps to keep the community engaged and informed."
            />

          </div>
        </div>
      </div>
      {/* The Blomo Approach */}
      <div className=" p-20 max-sm:p-5" id='howItWorks'>
        <div className="mb-10">
          <h1 className="text-center text-[#8A0303] max-sm:text-wrap leading-none">The Blomo Approach</h1>
        </div>
        <LongHorizontalCardLeft
          title="Submit a Request"
          description="When a need for blood arises, you can submit a request on Blomo, specifying your blood type and location. Our platform immediately begins searching for a compatible donor near you."
          icon={request}
        />
        <LongHorizontalCardRight
          title="Connect with a Donor"
          description="Blomo swiftly identifies nearby donors with the matching blood type. If a suitable donor is found, they are notified to begin the process of making a life-saving donation, ensuring swift action when it matters most."
          icon={connect}
        />
        <LongHorizontalCardLeft
          title="Engage with Blood Banks"
          description="In cases where no direct donor is available, Blomo reaches out to nearby blood banks holding the required blood type. Blood banks may request a donation in exchange, either of the same or a different blood group, ensuring a balanced supply."
          icon={bloodBank}
        />
        <LongHorizontalCardRight
          title="Facilitating the Exchange"
          description="If you cannot fulfill the blood bank’s request for an exchange, Blomo steps in to connect you with a willing donor who can. This donor facilitates the exchange, ensuring that the necessary blood is provided to those in need."
          icon={exchange}
        />
        <LongHorizontalCardLeft
          title="A Lifesaving Solution"
          description="Blomo seamlessly bridges the gap between donors, recipients, and blood banks, ensuring that no one is left waiting. By uniting communities and resources, we make sure every request is met with life-saving efficiency."
          icon={lifeSaving}
        />
      </div>
    </>
  );
};

export default LandingPage;
