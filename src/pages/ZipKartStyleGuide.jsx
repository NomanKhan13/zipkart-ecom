import React from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

// Sample React Component for ZipKart using Tailwind CSS
const ZipKartStyleGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <header className="text-center mb-16">
        {/* <h1 className="text-4xl font-bold text-primary">zipKart</h1> */}
        <Link to="/store">
          <Logo />
        </Link>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Typography</h2>
        <p className="text-base text-gray-800">
          Use clean, modern sans-serif fonts like{' '}
          <code className="font-mono">Inter</code>,{' '}
          <code className="font-mono">Roboto</code>, or{' '}
          <code className="font-mono">Montserrat</code>. Font weights: Bold for
          headings, Regular for body text.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Color Palette</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="p-6 bg-primary text-white rounded-lg w-80">
            <p className="text-xl font-semibold">
              #FF4500 - Vibrant Orange (Primary)
            </p>
          </div>
          <div className="p-6 bg-background text-gray-800 rounded-lg w-80">
            <p className="text-xl font-semibold">
              #F0F0F0 - Light Gray (Background)
            </p>
          </div>
          <div className="p-6 bg-green-500 text-white rounded-lg w-80">
            <p className="text-xl font-semibold">
              #34C759 - Fresh Green (Accent)
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">UI Elements: Buttons</h2>
        <button className="bg-primary text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105">
          Primary Button
        </button>
        <button className="bg-transparent border-2 border-primary text-primary py-3 px-6 rounded-lg font-semibold text-lg ml-4 transition-transform transform hover:scale-105">
          Secondary Button
        </button>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Product Card</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Product Name</h3>
          <p className="text-base text-gray-700">
            This is a product description.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Animations & Transitions
        </h2>
        <div className="bg-background p-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-primary hover:text-white">
          <p>
            Hover over the section to see transition effects (background color
            change, smooth scale effect).
          </p>
        </div>
      </section>

      <footer className="text-center mt-16 text-sm text-gray-600">
        <p>&copy; 2024 zipKart. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ZipKartStyleGuide;
