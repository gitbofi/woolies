import React from "react";
import FaqItem from "./FaqItem";

const FaqList = () => {
  const faqs = [
    {
      question: "Was bedeutet „umwelt-positive Produktion“ bei Woolies?",
      answer:
        "„Umwelt-positive Produktion“ bedeutet, dass wir bei Woolies nicht nur nachhaltig, sondern überaus ressourcenschonend arbeiten. Wir achten darauf, dass unsere Produktionsprozesse mehr CO₂ binden als freisetzen, und setzen auf erneuerbare Energien in unseren Betrieben. Zudem fördern wir Aufforstungsprojekte und unterstützen Schafhalter, die ihre Weiden regenerativ bewirtschaften. Jedes unserer Produkte trägt so aktiv zur Verbesserung der Umwelt bei – weit über die reine Schadensvermeidung hinaus.",
    },
    {
      question: "Warum ist Schafwolle ein umweltfreundliches Material?",
      answer:
        "Schafwolle ist ein vollständig natürliches und biologisch abbaubares Material, das sich in kurzer Zeit ohne schädliche Rückstände zersetzt. Im Gegensatz zu synthetischen Fasern entstehen bei der Produktion keine Mikroplastikpartikel, die die Umwelt belasten. Außerdem ist Wolle extrem langlebig, atmungsaktiv und temperaturregulierend, was die Nutzung von künstlichen Fasern überflüssig macht. Mit Schafwolle setzt Woolies auf einen Rohstoff, der regelmäßig nachwächst und somit nachhaltig verfügbar ist.",
    },
    {
      question:
        "Wie sorgt Woolies dafür, dass die Tiere artgerecht gehalten werden?",
      answer:
        "Bei Woolies arbeiten wir ausschließlich mit Schafhaltern zusammen, die höchsten Standards für artgerechte Tierhaltung entsprechen. Unsere Schafe haben Zugang zu weitläufigen, natürlichen Weideflächen und werden regelmäßig tierärztlich betreut. Zudem verzichten wir konsequent auf schmerzhafte Praktiken wie Mulesing. Durch regelmäßige Kontrollen stellen wir sicher, dass das Wohl der Tiere stets im Mittelpunkt steht – denn nur gesunde Schafe liefern die beste Wolle.",
    },
  ];

  return (
    <div className="mx-auto lg:mr-12">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
