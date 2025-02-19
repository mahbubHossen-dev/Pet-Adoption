import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Container from "../../components/Container";

const Faq = () => {
    return (
        <div className="pt-24">
            <Container>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is this platform about?</AccordionTrigger>
                        <AccordionContent>
                        This platform is designed to simplify pet adoption and donation processes, connecting animal lovers with pets in need and enabling secure donations for pet care.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How can I adopt a pet through this platform?</AccordionTrigger>
                        <AccordionContent>
                        You can browse the available pets, view detailed information, and submit an adoption request through a secure and user-friendly process.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is there any adoption fee?</AccordionTrigger>
                        <AccordionContent>
                        Adoption fees may vary depending on the pet and the organization managing the adoption. Some pets may have no fee, while others may require a small charge for their care.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>How does the donation system work?</AccordionTrigger>
                        <AccordionContent>
                        Users can create and manage donation campaigns for pets in need. Donations are processed securely via Stripe, and you can track donation progress in real time.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Is my donation secure?</AccordionTrigger>
                        <AccordionContent>
                        Yes, all transactions are securely processed using Stripe, ensuring safe and reliable payments for pet care and support.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Can I list my pet for adoption?</AccordionTrigger>
                        <AccordionContent>
                        Yes, users can add their pets for adoption through the User Dashboard, providing all necessary details to help potential adopters find them.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>What features does the User Dashboard offer?</AccordionTrigger>
                        <AccordionContent>
                        Users can manage added pets, track adoption requests, create donation campaigns, and monitor their personal donations.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>What features does the Admin Dashboard include?</AccordionTrigger>
                        <AccordionContent>
                        Admins can manage users, pets, adoption requests, and donation campaigns, as well as view system logs and generate reports.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Container>
        </div>
    )
};

export default Faq;