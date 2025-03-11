"use client"; // This ensures the component supports interactivity

import React, { useState } from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetch("https://formspree.io/f/xwkjjvkk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then(() => {
        alert("Thank you for the message! I will get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(`Failed to send message: ${error}`));
  }

  return (
    <section id="contact" className="relative py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link
                href={DATA.contact.social.Telegram.url}
                className="text-blue-500 hover:underline"
              >
                with a direct question on Telegram
              </Link>{" "}
              and I&apos;ll respond whenever I can.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6 mx-auto max-w-7xl">
          <div className="relative rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              style={{ filter: "opacity(0.7)", borderRadius: "0.5rem" }}
              src="https://www.google.com/maps/embed/v1/place?q=Seattle,+WA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md text-gray-100 border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md text-gray-100 border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-md text-gray-100 border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </BlurFade>
    </section>
  );
}
