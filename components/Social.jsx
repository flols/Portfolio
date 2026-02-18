import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub aria-label="GitHub" />, path: "https://github.com/flols/", label: "GitHub" },
  {
    icon: <FaLinkedin aria-label="LinkedIn" />,
    path: "https://www.linkedin.com/in/florian-le-saint-b0a5251a3/",
    label: "LinkedIn"
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
