export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-4xl font-bold">CL</span>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Charles Edisonom
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full Stack Developer
          </h2>

          {/* Brief Description */}
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications. 
            Currently learning React and building modern user experiences 
            with cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View My Work
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats/Skills Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Frontend</div>
              <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Backend</div>
              <p className="text-gray-600">Node.js, Express, Databases</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Tools</div>
              <p className="text-gray-600">Git, VS Code, Figma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Portfolio Website
                </h4>
                <p className="text-gray-600 mb-4">
                  A modern portfolio built with Next.js and Tailwind CSS
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Coming Soon</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Next Project
                </h4>
                <p className="text-gray-600 mb-4">
                  Exciting new project in development
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}