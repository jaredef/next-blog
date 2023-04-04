import ContactForm from 'app/contact/page';


export default function ContactLayout() {
    return (
        <div className='bg-slate-50'>
        <div className='mt-8 ml-8'>
            <h1>Get in touch with me</h1>
            <div className='mt-8 ml-8'>
            <p>Chances are I want to chat with you to!
                <br />Let's do it, send me a message below or find me online.
            </p>
            </div>
            </div>
        <ContactForm />
        </div>
    )
}