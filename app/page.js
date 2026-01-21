import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">TailwindDemo</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#buttons" className="text-gray-700 hover:text-indigo-600 transition">Buttons</a>
              <a href="#colors" className="text-gray-700 hover:text-indigo-600 transition">Colors</a>
              <a href="#layouts" className="text-gray-700 hover:text-indigo-600 transition">Layouts</a>
              <a href="#text" className="text-gray-700 hover:text-indigo-600 transition">Typography</a>
              <a href="#images" className="text-gray-700 hover:text-indigo-600 transition">Images</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Tailwind CSS Components
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A showcase of beautiful, responsive components built with Tailwind CSS, with live examples and code snippets.
          </p>
        </div>

        {/* Description Section */}
        <section id="description" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Tailwind CSS?</h2>
          <p className="text-lg text-gray-700">
            Tailwind CSS is a utility-first CSS framework that lets you design modern websites quickly and efficiently without writing a lot of custom CSS.
            Instead of creating custom classes, you compose designs directly in your HTML using utility classes.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            <code className="text-sm text-gray-800">
{`<div class="bg-blue-100 p-4 rounded-lg shadow">Hello Tailwind!</div>`}
            </code>
          </pre>
        </section>

        {/* Why Section */}
        <section id="why" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Tailwind CSS?</h2>
          <p className="text-lg text-gray-700">
            Tailwind helps you rapidly prototype websites, maintain consistent design, and eliminate long CSS files by using utility classes.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            <code className="text-sm text-gray-800">
{`<button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
  Click Me
</button>`}
            </code>
          </pre>
        </section>

        {/* Buttons Intro */}
        <section id="buttons-intro" className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Using Tailwind CSS Buttons</h2>
          <p className="text-lg text-gray-700">
            Buttons in Tailwind CSS are created using utility classes for background, text, padding, border, and hover effects.
            You can also apply gradients, shadows, and rounded corners for more visual impact.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            <code className="text-sm text-gray-800">
{`<button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
  Success Button
</button>`}
            </code>
          </pre>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Buttons</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
                Primary Button
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
                Success Button
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition">
                Danger Button
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition">
                Secondary Button
              </button>
              <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition">
                Outline Button
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition">
                Gradient Button
              </button>
            </div>
          </div>
        </section>

        {/* Colors Intro */}
        <section id="colors-intro" className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Color Palette</h2>
          <p className="text-lg text-gray-700">
            Tailwind provides hundreds of predefined colors for backgrounds, text, borders, and more. You can also add custom colors via the config file.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            <code className="text-sm text-gray-800">
{`<div class="w-24 h-24 bg-red-500 rounded-lg"></div>
<div class="w-24 h-24 bg-blue-500 rounded-lg"></div>`}
            </code>
          </pre>
        </section>

        {/* Colors Section */}
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Palette</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["red", "blue", "green", "yellow", "purple", "pink"].map((color) => (
                <div className="text-center" key={color}>
                  <div className={`w-full h-24 bg-${color}-500 rounded-lg mb-2`}></div>
                  <p className="text-sm font-medium capitalize">{color}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Intro */}
        <section id="text-intro" className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Working with Text</h2>
          <p className="text-lg text-gray-700">
            Tailwind offers utilities for font size, weight, style, line-height, and color. Combine them to quickly create headings, paragraphs, and emphasized text.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            <code className="text-sm text-gray-800">
{`<h1 class="text-5xl font-bold text-gray-900">Heading 1</h1>
<p class="text-base text-gray-600">This is a paragraph.</p>`}
            </code>
          </pre>
        </section>

        {/* Typography Section */}
        <section id="text" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typography</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Heading 1 - Extra Large</h1>
            <h2 className="text-4xl font-bold text-gray-900">Heading 2 - Large</h2>
            <h3 className="text-3xl font-bold text-gray-900">Heading 3 - Medium</h3>
            <p className="text-xl text-gray-700">This is a large paragraph with text-xl class.</p>
            <p className="text-base text-gray-600">This is a regular paragraph with text-base class.</p>
            <p className="text-sm text-gray-500">This is small text with text-sm class.</p>
            <p className="font-bold text-gray-900">This is bold text.</p>
            <p className="italic text-gray-700">This is italic text.</p>
            <p className="underline text-blue-600">This is underlined text.</p>
          </div>
        </section>

        {/* Layouts Intro */}
        <section id="layouts-intro" className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layout Utilities</h2>
          <p className="text-lg text-gray-700">
            Tailwind provides utilities for flexbox, grid, spacing, alignment, and responsive layouts. Combine classes to quickly structure your content.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
            <code className="text-sm text-gray-800">
{`<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-red-500 p-4">Item 3</div>
</div>`}
            </code>
          </pre>
        </section>

        {/* Layouts Section */}
        <section id="layouts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Examples</h2>
          {/* Grid Layout */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>Responsive grid adjusts automatically.</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Works across devices.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Three columns on large screens, stacked on mobile.</p>
              </div>
            </div>
          </div>

          {/* Flex Layout */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Flex Layout</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section id="images" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Images</h2>
          <p className="text-lg text-gray-700 mb-4">
            Tailwind makes it easy to style images with rounding, shadows, and responsive sizing.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto mb-6">
            <code className="text-sm text-gray-800">
{`<img class="w-full rounded-lg shadow-md" src="image.jpg" alt="Example"/>
<img class="w-full rounded-full shadow-md" src="image.jpg" alt="Example"/>`}
            </code>
          </pre>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img 
                  src="https://media.istockphoto.com/id/1142665470/photo/a-lilac-british-cat-with-a-blue-coat-looking-up-the-cat-opened-his-mouth-with-a-mad-look-the.jpg?s=612x612&w=0&k=20&c=taxLHL2AxrFzmSaGUqIk1jYNQ19LXvg3fxxFly0RHyY=" 
                  alt="Placeholder" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-center font-medium">Rounded Image</p>
              </div>
              <div>
                <img 
                  src="https://media.istockphoto.com/id/1142665470/photo/a-lilac-british-cat-with-a-blue-coat-looking-up-the-cat-opened-his-mouth-with-a-mad-look-the.jpg?s=612x612&w=0&k=20&c=taxLHL2AxrFzmSaGUqIk1jYNQ19LXvg3fxxFly0RHyY=" 
                  alt="Placeholder" 
                  className="w-full rounded-full shadow-md"
                />
                <p className="mt-2 text-center font-medium">Circular Image</p>
              </div>
              <div>
                <img 
                  src="https://media.istockphoto.com/id/1142665470/photo/a-lilac-british-cat-with-a-blue-coat-looking-up-the-cat-opened-his-mouth-with-a-mad-look-the.jpg?s=612x612&w=0&k=20&c=taxLHL2AxrFzmSaGUqIk1jYNQ19LXvg3fxxFly0RHyY=" 
                  alt="Placeholder" 
                  className="w-full shadow-2xl"
                />
                <p className="mt-2 text-center font-medium">Shadow Image</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">Built with Next.js and Tailwind CSS</p>
          <p className="text-sm text-gray-400 mt-2">A beginner-friendly tutorial project</p>
        </div>
      </footer>
    </div>
  );
}
