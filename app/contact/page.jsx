
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
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
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-4xl text-accent mb-8">Contact</h2>
          <ul className="flex flex-col gap-10 break-words w-full max-w-xl">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60 whitespace-nowrap">{item.title}</p>
                  <h3 className="text-xl break-all">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
