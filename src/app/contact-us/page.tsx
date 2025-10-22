"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { WarpBackground } from "@/components/ui/warp-background";


export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
  
         <WarpBackground>
            <div className=" md:mt-8 lg:mt-24 xl:mt-28 ">



          
    <div className="shadow-input mx-auto w-full max-w-5xl rounded-sm bg-[#0b0a0a]  p-4 md:rounded-2xl m-8 dark:bg-black">


      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-white ">Full name *</Label>
            <Input id="firstname" placeholder="Tyler" type="text" className="bg-gray-800"/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-white ">Phone number</Label>
            <Input id="phoneNumber" placeholder="+1 756 8451 1245" type="text" className="bg-gray-800"/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white ">Email Address *</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" className="bg-gray-800"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-white ">Company *</Label>
          <Input id="Company" placeholder="Company name" type="text" className="bg-gray-800"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword" className="text-white ">About your project</Label>
          <Input
            id="description"
            placeholder="Description about your project"
            type="text"
            className="bg-gray-800"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      
      </form>
    </div>
      </div>
    </WarpBackground>
  
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
