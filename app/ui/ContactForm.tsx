export default function ContactForm() {
  return (
    <div className="bg-Sky_Whisper border-x-8 border-b-8 p-8 md:border-r-0 md:border-b-0 md:w-8/12 md:flex md:flex-col md:justify-center">
      <h1 className="text-xl font-bold mb-6 md:text-4xl">Talk to us.</h1>
      <form className="flex flex-col gap-6 justify-center md:gap-14 ">
        <div>
            <label htmlFor="name" className="text-base font-semibold">Name</label>
            <input type="text" name="name" id="name" className="border-4 w-full mt-2 md:h-12" />
        </div>

        <div>
            <label htmlFor="email" className="text-base font-semibold">Email Address</label>
            <input type="text" name="name" id="email" className="border-4 w-full mt-2 md:h-12" />
        </div>

        <div>
            <label htmlFor="message" className="text-base font-semibold">Message</label>
            <textarea name="message" id="message" className="border-4 w-full mt-2 md:h-60" />
        </div>

        <button className="button-style w-full" style={{alignSelf: "center"}}>Send</button>
      </form>
    </div>
  );
}
