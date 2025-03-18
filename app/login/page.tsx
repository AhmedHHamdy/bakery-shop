import { redirect } from "next/navigation";
// import { getSession, login } from "@/lib"
import Link from "next/link";


export default function Page() {
  return (
    <section className="bg-Pink_Passion flex items-center justify-center h-screen pt-20 border-8 border-b-0">
      <form className="flex flex-col justify-center items-stretch border-8 p-10 bg-Sky_Whisper">
        <h1 className="text-xl font-bold mb-2">Welcome back To Cupcaked</h1>

        <div className="flex flex-col gap-1 mt-2">
          <label htmlFor="email" className="text-base font-semibold">
            Email
          </label>
          <input type="text" name="name" id="email" className="border-4" />
        </div>

        <div className="flex flex-col gap-1 mt-4">
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

        <Link className="text-base my-2" href="/signup">Don&apos;t have an account? <span className="font-bold underline">Sign up</span></Link>

        <button className="button-style w-full" style={{ alignSelf: "center", padding: "0.4rem" }}>
          Login in
        </button>
      </form>
    </section>
  );
}
