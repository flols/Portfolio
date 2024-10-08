"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "+33 6 68 46 13 07",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contact.florianlesaint@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adresse",
    description: "Rennes, 35000, France",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Gère le changement dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Envoi du formulaire à l'API /api/send-email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch('/api/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        // Réinitialise le formulaire après succès
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setError('Erreur lors de l\'envoi du message.');
      }
    } catch (err) {
      console.error(err);
      setError('Erreur lors de l\'envoi du message.');
    }

    setIsLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Travaillons ensemble !</h3>
              <p className="text-white/60">
                Si vous pensez que je pourrais bien m'intégrer à votre équipe ou
                si vous souhaitez obtenir davantage d'informations me
                concernant, n'hésitez pas à m'envoyer un e-mail. Je serai
                heureux de vous répondre !{" "}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Prénom"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Nom"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Envoi en cours..." : "Envoyer"}
              </Button>
              {success && (
                <p className="text-green-500">Message envoyé avec succès !</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 break-words">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 whitespace-nowrap">
                        {item.title}
                      </p>
                      <h3 className="text-xl break-all">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
