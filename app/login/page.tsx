import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-Sky_Whisper flex items-center justify-center h-screen">
      <form className="h-full flex flex-col justify-center items-center">
        <h1>Welcome To Cupcaked</h1>

        <div>
          <label htmlFor="email" className="text-base font-semibold">
            Email
          </label>
          <input type="text" name="name" id="email" className="border-4" />
        </div>

        <div>
          <label htmlFor="password" className="text-base font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-4"
          />
        </div>

        <Link href="/signup">Don't have an account? Sign up</Link>

        <button className="button-style w-full" style={{ alignSelf: "center" }}>
          Send
        </button>
      </form>
    </section>
  );
}
