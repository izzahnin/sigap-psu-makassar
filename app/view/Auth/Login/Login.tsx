// pages/login.tsx
"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";

export const Login = () => {
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
      <div className="flex w-full items-center justify-center bg-white md:w-1/2">
        <div className="w-full max-w-md space-y-8 p-8">
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
            <div className="-space-y-px rounded-md shadow-sm">
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
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              SIGAP SPU MAKASSAR
            </a>{" "}
            {new Date().getFullYear()}
            {"."}
          </div>
        </div>
      </div>
    </div>
  );
};
