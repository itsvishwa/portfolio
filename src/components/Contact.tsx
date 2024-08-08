function Contact() {
  return (
    <div id="contact" className="my-32">
      <p className="font-bold text-2xl lg:text-4xl mb-8">Contact</p>
      <div>
        <form action="">
          <div className="flex lg:flex-row flex-col justify-between gap-4">
            <div className="flex-1">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border border-none focus:outline-[#ff006a] outline-none px-4 py-4 w-full rounded-lg bg-[#1F1F1F] text-white mt-1"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border border-none focus:outline-[#ff006a] outline-none px-4 py-4 w-full rounded-lg bg-[#1F1F1F] text-white mt-1"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              rows={5}
              placeholder="Enter your message"
              className="border border-none focus:outline-[#ff006a] outline-none px-4 py-4 w-full rounded-lg bg-[#1F1F1F] text-white mt-1"
            />
          </div>
          <div className="mt-4 flex flex-row justify-end">
            <button className="py-4 px-8 rounded-lg hover:cursor-pointer bg-gradient-to-r from-[#79033C] to-[#bc035c] hover:from-[#79033C] hover:to-[#b42f6f]">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
