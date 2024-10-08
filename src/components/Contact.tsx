import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xyzgjwry");
  if (state.succeeded) {
    return (
      <p className="text-opacity-40 py-4 text-center">
        Thank you for contacting me !
      </p>
    );
  }

  return (
    <div id="contact" className="my-32">
      <p className="font-bold text-2xl lg:text-4xl mb-8">Contact</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex lg:flex-row flex-col justify-between gap-4">
            <div className="flex-1">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="border border-none focus:outline-[#139B43] outline-none px-4 py-4 w-full rounded-lg bg-[#1F1F1F] text-white mt-1"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              className="border border-none focus:outline-[#139B43] outline-none px-4 py-4 w-full rounded-lg bg-[#1F1F1F] text-white mt-1"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="mt-4 flex flex-row justify-end">
            <button
              type="submit"
              disabled={state.submitting}
              className="py-4 px-8 rounded-lg hover:cursor-pointer bg-gradient-to-r from-[#139B43] to-[#139b43] hover:from-[#139B43] hover:to-[#31ad5d] "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
