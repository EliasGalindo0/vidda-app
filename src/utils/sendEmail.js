import emailjs from "emailjs-com";

const userID = "tmFlLwf34qyGr8QfU";
const templateID = "template_dane2p7";
const serviceID = "service_jifncoi";

export default function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    serviceID,
    templateID,
    e.target,
    userID
  )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
  );
  e.target.reset();
};
