import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const CustomInput = () => {
  const [form, setForm] = useState({ email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", form.email);
    setForm({ email: "" });
    setSubmitted(true);
  };

  return (
    <section className="flex flex-col justify-center items-center mt-[3rem] pb-5 bg-gray-50 w-[90%] sm:w-[30rem] h-auto sm:h-[12rem] shadow-2xl rounded-2xl">
      {/* Formulaire */}
      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={handleSubmit}
      >
        {/* Champ Email */}
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:w-[25rem] h-[3rem] mt-3 text-center rounded-lg placeholder-[#394150]"
          value={form.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ email: e.target.value })
          }
        />
        
        {/* Bouton d'envoi */}
        <Button
          className="mt-[1rem] w-full sm:w-[25rem] h-[3rem] text-white text-sm rounded-lg bg-[#284BCE]"
          type="submit"
        >
          Subscribe now
        </Button>
      </form>

      {/* Message de confirmation */}
      {submitted && (
        <p className="mt-3 text-xs text-green-500">
          Thanks for subscribing! We'll keep you updated.
        </p>
      )}

      {/* Message de confidentialité */}
      {!submitted && (
        <p className="mt-3 text-xs text-[#6C727F]">
          Your email is 100% confidential and won't send you any spam.
        </p>
      )}
    </section>
  );
};

export default CustomInput;
