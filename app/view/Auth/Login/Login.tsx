// pages/login.tsx
"use client"
import React from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  // const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("username") != null && data.get("password") != null) {
      // Implement your logIn function here
      // logIn({
      //   username: data.get("username")!.toString(),
      //   password: data.get("password")!.toString()
      // })
      console.log({
        username: data.get("username"),
        password: data.get("password"),
      });
    }
  };

  return (
    <div className="flex h-screen">
      <div
        // className="hidden md:block md:w-1/2 bg-cover bg-center"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1667664885297-8e180a9bc667?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        // }}
      ></div>
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="flex justify-center">
            <Image
              src="/images/sigap.jpg"
              alt="landingpage"
              width={160}
              height={100}
              className="h-auto w-[120px]"
            />
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {`Don't have an account? Sign Up`}
                </a>
              </div>
            </div>
          </form>
          <div className="text-center text-sm text-gray-500">
            {"Copyright © "}
            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
              SIGAP SPU MAKASSAR
            </a>{" "}
            {new Date().getFullYear()}
            {"."}
          </div>
        </div>
      </div>
    </div>
  );
}
