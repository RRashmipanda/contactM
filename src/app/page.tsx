"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-gray-500 via-green-600 to-gray-800 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Manage Your Contacts <br /> Smarter & Faster
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-white/90">
          Organize, search, and access your contacts from anywhere — with
          powerful tools built for professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#features"
            className="px-8 py-4 bg-white text-gray-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Explore Features
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-gray-50 text-gray-800">
        <div className="grid md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-24">
          <div className="text-center">
            <Image
              src="/globe.svg"
              alt="Cloud sync"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">
              Cloud Sync
            </h3>
            <p className="text-teal-600">
              Access your contacts from any device, anywhere in the world.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/window.svg"
              alt="Intuitive Dashboard"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">
              Intuitive Dashboard
            </h3>
            <p className="text-teal-600">
              Easily view, edit, and organize your contacts with a clean UI.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/file.svg"
              alt="Secure Storage"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">
              Secure Storage
            </h3>
            <p className="text-gray-600">
              Your data is encrypted and protected for complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Contact Manager. All rights reserved.
      </footer>
    </div>
  );
}
