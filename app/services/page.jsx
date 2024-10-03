"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
    {
        num: "01",
        title: "Development Front",
        description: "En tant que développeur front-end, je me charge de créer des interfaces utilisateur attrayantes et intuitives. Mon rôle est de transformer des maquettes en éléments interactifs avec des technologies comme HTML, CSS et JavaScript, tout en optimisant l'expérience utilisateur sur différents appareils. J'assure également la compatibilité entre navigateurs et l'optimisation des performances visuelles.",
        href: "/"
    },
    {
        num: "02",
        title: "Development Back",
        description: "En tant que développeur back-end, je m'occupe de la gestion des serveurs, des bases de données et de la logique métier. Mon travail consiste à rendre le système sécurisé, performant et capable de communiquer avec le front-end. J'utilise des langages comme Python, Node.js ou PHP, et je mets en place des bases de données comme MySQL ou MongoDB.",
        href: "/"
    },
     
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: {delay:2.4, duration:0.4, ease:"easeIn"} 
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full" />
                            </div>
                        )
                    })}

                </motion.div>
            </div>
        </section>
    );
};

export default Services;