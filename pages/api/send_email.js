import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, phone, message } = req.body;

    // Création du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // adresse mail
        pass: process.env.EMAIL_PASS, // mot de passe d'application
      },
    });

    try {
      // Envoi de l'e-mail
      await transporter.sendMail({
        from: email, 
        to: "contact.florianlesaint@gmail.com", 
        subject: "Portfolio", 
        text: `Nom: ${firstname} ${lastname}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Erreur lors de l'envoi de l'email" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
