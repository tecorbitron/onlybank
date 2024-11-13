
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const faqs1 = [
    {
        question: 'What services does Tecorbitron offer?',
        answer: 'Tecorbitron provides comprehensive IT solutions, including web development, app development, software development, cloud computing, AI, and data analytics, tailored to meet your specific business needs.',
    },
    {
        question: 'Do you offer custom solutions for specific industries?',
        answer: 'Yes, we deliver tailored solutions for various industries like e-commerce, retail, healthcare, education, and more to address their unique challenges and goals.',
    },
    {
        question: 'Do you provide post-launch support and maintenance?',
        answer: 'Absolutely. We offer continuous support, updates, and maintenance to ensure that your digital assets stay secure, optimized, and up-to-date.',
    },

];
const faqs2 = [
    {
        question: 'What services does Tecorbitron offer?',
        answer: 'Tecorbitron provides comprehensive IT solutions, including web development, app development, software development, cloud computing, AI, and data analytics, tailored to meet your specific business needs.',
    },
    {
        question: 'Do you offer custom solutions for specific industries?',
        answer: 'Yes, we deliver tailored solutions for various industries like e-commerce, retail, healthcare, education, and more to address their unique challenges and goals.',
    },
    {
        question: 'Do you provide post-launch support and maintenance?',
        answer: 'Absolutely. We offer continuous support, updates, and maintenance to ensure that your digital assets stay secure, optimized, and up-to-date.',
    },

];

const FAQ = () => {

    return (
        <div className=" bg-white">
            <div className="flex flex-col items-center py-20 p-6 max-w-screen-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-medium mb-2 ">Frequently Asked Quetions</h2>
                <p className="text-uicore-body">Explore the answers to your most pressing questions with our comprehensive FAQ section.</p>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full mt-16 px-4">
                        <Accordion type="single" collapsible>
                            {faqs1.map((faq, index) => (
                                <div key={index} className="mb-4">
                                    <AccordionItem value={"item" + index}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                    <div className="w-full md:mt-16 px-4">
                        <Accordion type="single" collapsible>
                            {faqs2.map((faq, index) => (
                                <div key={index} className="mb-4">
                                    <AccordionItem value={"item" + index}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;