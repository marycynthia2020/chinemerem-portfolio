import Designer from "@/components/Designer";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  return (
    <section className=" w-full bg-[url('/bg.png')] min-h-screen bg-no-repeat bg-cover">
      <div className="h-full flex flex-col items-center justify-center px-5">
        <h2 className="text-3xl md:text-[3.375rem] font-semibold capitalize text-white  mb-10  mt-30">
          Contact
        </h2>
       <ContactForm />
        <Designer />
      </div>
    </section>
  );
}
