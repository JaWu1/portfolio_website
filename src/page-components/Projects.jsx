
export default function Projects() {
  return (
    <section className="py-10 px-6 bg-[213547] text-white flex flex-col items-center justify-center">
      
      {/* Header with blue rectangle behind text */}
      <div className="relative mb-16">
        <div className="absolute bottom-2 left-3 w-32 h-4 bg-blue-600 translate-x-2 translate-y-2 z-0"></div>
        <h2 className="relative text-4xl font-semibold text-white text-center z-10">Projects</h2>
      </div>

      <div className="space-y-16 w-full max-w-5xl">
        {/* Project: Campus Collab */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Campus Collab</h3>
            <p className="mb-4">
              A collaboration platform that helps university students connect, solve questions, and share ideas. Built using Next.js, MongoDB, and Google OAuth.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">
              Learn More
            </button>
          </div>
          <img
            src="/images/campus_collab.jpg"
            alt="Campus Collab"
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Project: Discord Bot */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Discord Bot</h3>
            <p className="mb-4">
              A multifunctional bot with commands for moderation, currency, and utility. Developed using Node.js, Discord.js, and MongoDB.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">
              Learn More
            </button>
          </div>
          <img
            src="/images/discord_bot.png"
            alt="Discord bot"
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Project: 2D Platformer Game */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">2D Platformer Game</h3>
            <p className="mb-4">
              A fun 2D platformer game built using Unity and C#. Includes movement physics, collectibles, and custom level design.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition">
              Learn More
            </button>
          </div>
          <img
            src="/images/2d_game.png"
            alt="2d game"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}