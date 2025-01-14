import nodemailer from "nodemailer"

// type ResponseData = {
//   message: string
// }

export async function POST(req: Request) {
  try {
    const { email, message, subject} = await req.json()
    return new Response("Le SMTP n'est pas encore configuré, il faut se procurer le nom de domaine Lez Arts Aki.fr", { status : 500 })
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "",
        pass: "",
      },
    });
  
    try {
      await transporter.sendMail({
        from: `"${email}" <${email}>`, // L'expéditeur
        to: "thibaut.alvoet.pro@gmail.com", // Le destinataire
        subject, // Sujet
        text: message, // Contenu texte brut
      });
      
      return new Response('Email sent with success !', { status: 200 })
    } 
    catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      return new Response("Erreur lors de l'envoi de l'email.", { status : 500});
    }
  }
  catch (e) {
    console.log(e);
    return new Response("An error occured", { status: 500 })
  }

}
