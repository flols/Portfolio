"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "School Project",
    title: "Athletes_V2",
    description:
      "Cet exercice avait pour objectif de créer une application mobile simple en React Native permettant la gestion d'athlètes. L'application comporte deux fonctionnalités principales. Pour commencer l'ajout d'un athlète et ensuite, l'utilisateur doit pouvoir ajouter un athlète en saisissant une adresse e-mail dans un champ dédié. Après validation, l'athlète est ajouté à la liste My Athletes en dessous. Un message de succès apparaît indiquant que L'athlète a bien été ajouté à votre liste",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/Athletes.png",
    github: "https://github.com/flols/Athletes_V2",
  },
  {
    num: "02",
    category: "School Project",
    title: "Tricount Like",
    description:
      "Projet d'école visant à reproduire l'application Tricount. Cette application permet de gérer les dépenses partagées dans une colocation, inspirée du fonctionnement de Tricount. Elle se compose de deux parties : Tricount App, qui permet aux utilisateurs de suivre et gérer leurs dépenses, et Tricount API, la partie backend qui gère les utilisateurs, les dépenses et les catégories via une base de données MongoDB. Cette API permet l'ajout, la suppression et la mise à jour des données via des requêtes HTTP, notamment effectué avec Postman.",
    stack: [
      {
        name: "Vue.js",
      },
      {
        name: "Javascript",
      },
      {
        name: "CSS",
      },
    ],
    image: "/assets/work/Tricount.png",
    github: "https://github.com/flols/tricount_app",
    github_api: "https://github.com/flols/tricount_api",
  },
  {
    num: "03",
    category: "School Project",
    title: "Développement Natif",
    description:
      "Projet de développement d'une application Android de type clicker game. L'application permet aux utilisateurs de gérer un stock de ressources à collecter et dépenser. Les ressources de départ incluent le bois, le minerai de fer brut et le minerai de cuivre brut. Les joueurs peuvent cliquer sur chaque ressource pour en récolter une unité. Les ressources accumulées permettent de débloquer des recettes et de nouveaux éléments de gameplay pour progresser dans le jeu. L'application comprend plusieurs pages : la page Ressources pour présenter les ressources disponibles avec un bouton Miner pour les récolter. La page Recettes affiche la liste de recettes permettant de produire des objets. La page Inventaires affiche les recettes produites.",
    stack: [
      {
        name: "Dart",
      },
      {
        name: "C++",
      },
    ],
    image: "/assets/work/dev_natif.png",
    github: "https://github.com/flols/dev_natif",
  },
  {
    num: "04",
    category: "School Project",
    title: "My Magic Prompts",
    description:
      "My Magic Prompt est un script Bash interactif conçu pour simplifier la gestion des fichiers et des dossiers tout en fournissant un accès rapide à diverses informations système. Ce script permet aux utilisateurs d'exécuter une variété de commandes pour manipuler des fichiers, gérer leur environnement et interagir avec des services en ligne. Le script propose un ensemble de commandes utiles.",
    stack: [
      {
        name: "Shell",
      },
    ],
    image: "/assets/work/mmp.png",
    github: "https://github.com/flols/Magic-Prompt",
  },
  {
    num: "05",
    category: "School Project",
    title: "Learning Nuxt",
    description:
      "Projet scolaire pour apprendre le framework Nuxt3. L'objectif principal était de me familiariser avec ce framework et ses fonctionnalités. Nous avons utilisé une API externe, The Movie Database (TMDb), afin de récupérer des données sur les films. Au cours de ce projet, nous avons testé le framework pour mieux comprendre ses capacités, notamment le rendu côté serveur, la gestion des routes et le traitement des données.",
    stack: [
      {
        name: "Vue.js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Typescript",
      },
    ],
    image: "/assets/work/nuxt3.png",
    github: "https://github.com/flols/LearningNuxt",
  },
  {
    num: "06",
    category: "School Project",
    title: "Projet Startup",
    description:
      "Way’V est un projet étudiant développé par une équipe de cinq personnes, dont un développeur (moi-même), qui a émergé dans le cadre d’un projet startup sur deux ans. Cette application a été conçue pour accompagner les étudiants dans la recherche d’une voie professionnelle qui leur convient. En rendant l’exploration des métiers plus accessible et moins stressante, Way’V adopte une approche ludique et humaine. Les utilisateurs ont la possibilité de découvrir une variété de métiers à travers des vidéos réalisées par d'anciens élèves, offrant ainsi des perspectives authentiques et concrètes sur différents parcours professionnels. De plus, ils peuvent interagir directement avec ces alumni via un système de messagerie intégré, ce qui enrichit leur exploration et leur permet d’approfondir leurs réflexions. L'application vise ainsi à rendre l'orientation professionnelle plus simple, interactive et inspirante, en transformant une étape souvent délicate en une expérience engageante et enrichissante.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "Expo",
      },
      {
        name: "Strapi",
      },
    ],
    image: "/assets/work/wayv.png",
    github: "https://github.com/flols/WayV",
    github_api: "https://github.com/flols/WayV_API",
  },
  {
    num: "07",
    category: "School Project",
    title: "Fiona Events",
    description:
      "Dans le cadre d’une collaboration avec Fiona Events, j'ai eu l'opportunité de participer à la refonte de son site internet, qui nécessitait une mise à jour. Pour ce projet, j'ai travaillé en étroite collaboration avec une personne chargée de la communication. Ensemble, nous avons redéfini le logo et l'identité visuelle, et proposé une maquette avant de procéder aux modifications du site. Le site internet est toujours en cours de réalisation.",
    stack: [
      {
        name: "Wordpress",
      },
    ],
    image: "/assets/work/fionaevents.png",
  },
  {
    num: "08",
    category: "Personal Project",
    title: "Portfolio",
    description:
      "Portfolio personnel conçu pour me présenter, permettre aux visiteurs de me contacter. Offrir une vitrine sur mes projets réalisés.",
    stack: [
      {
        name: "Next.js",
      },
    ],
    image: "/assets/work/portfolio3.png",
    github: "https://github.com/flols/portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index < project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github_api && (
                  <Link href={project.github_api}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github API repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;