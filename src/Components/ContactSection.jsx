import ContactInfo from "../Components/ContactInfo"
import ContactForm from "../Components/ContactForm"


export default function ContactSection(){
return(

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-6">

    <ContactInfo />

    <ContactForm />

</div>
    )
}