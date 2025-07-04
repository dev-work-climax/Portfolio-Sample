import React from "react";
import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Harold Pinter for collaboration opportunities, project inquiries, or just to say hello. Let's build something amazing together!",
  keywords: ["contact", "hire", "collaboration", "freelance", "developer", "consultation"],
  openGraph: {
    title: "Contact Harold Pinter",
    description: "Get in touch for collaboration opportunities and project inquiries.",
    url: `${config.site}/contact`,
  },
  twitter: {
    title: "Contact Harold Pinter",
    description: "Get in touch for collaboration opportunities and project inquiries.",
  },
};

function Page() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event)
  }
      return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            // onClick={handleSubmit}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Page;