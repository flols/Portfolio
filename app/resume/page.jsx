"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiNuxtdotjs,
} from "react-icons/si";

const abouts = {
  title: "À propos",
  info: [
    {
      fieldName: "Nom",
      fieldValue: "Florian Le Saint",
    },
    {
      fieldName: "Age",
      fieldValue: "24",
    },
    {
      fieldName: "Email",
      fieldValue: "contact.florianlesaint@gmail.com",
    },
    {
      fieldName: "Téléphone",
      fieldValue: "06 68 46 13 07",
    },
    {
      fieldName: "Localisation",
      fieldValue: "Projet de déménagement à Rennes",
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais",
    },
    {
      fieldName: "Job",
      fieldValue: "En recherche d'emploi",
    },
  ],
};

const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "Expériences",
  items: [
    {
      company: "Fondation Bon Sauveur",
      position: "Stage DSI",
      duration: "Septembre 2020 - 1 mois",
    },
    {
      company: "Rudigis",
      position: "Stage Développeur Web",
      duration: "Fevrier - Mars 2021",
    },
    {
      company: "Sud Moteurs Atlantique",
      position: "Alternant Informatique",
      duration: "2021 - 2022",
    },
    {
      company: "Nahibu",
      position: "Alternant Développeur Fullstack Junior",
      duration: "2022 - 2024",
    },
  ],
};

const educations = {
  icon: "/assets/resume/badge.svg",
  title: "Éducation",
  items: [
    {
      institution: "Lycée Sacré Coeur La Salle",
      degree: "Baccalauréat STI2D",
      duration: "2019",
    },
    {
      institution: "EPSI - Brest Open Campus",
      degree: "Bachelor Informatique - titre CDA",
      duration: "2019 - 2022",
    },
    {
      institution: "MBA - MyDigitalSchool",
      degree: "Master Développeur Fullstack",
      duration: "2019 - 2022",
    },
  ],
};

const skills = {
  icon: "/assets/resume/cap.svg",
  title: "Compétences",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "Nuxt JS",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experiences"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experiences">Expériences</TabsTrigger>
            <TabsTrigger value="educations">Éducation</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="abouts">À propos</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experiences" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="educations" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educations.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educations.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize bg-[#ffffff] rounded-xl px-2 py-1 text-primary text-[14px]">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="abouts"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{abouts.title}</h3>
                <ul className="grid grid-cols-1 gap-6 max-w-[620px] mx-auto xl:mx-0 break-words">
                  {abouts.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 whitespace-nowrap">
                          {item.fieldName}
                        </span>
                        <span className="text-xl break-all">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
