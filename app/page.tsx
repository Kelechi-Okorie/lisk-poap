// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <div id="webcrumbs">
      <div className="w-full max-w-[1440px] mx-auto bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen px-4 sm:px-6 lg:px-8">

        <main className="px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Collect Proof of Attendance Tokens</h2>
            <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto mb-8">Commemorate your participation in virtual and real-world events with unique, collectible badges on the blockchain</p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <input type="text" placeholder="Enter your token or code" className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-purple-400/30 text-white placeholder-purple-200 outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-1.5 rounded-full hover:bg-purple-400 transition-colors">
                  Claim POAP
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-white mb-4">event_available</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Discover Events</h3>
              <p className="text-purple-200">Find upcoming events and collect unique POAPs from your favorite communities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-white mb-4">collections_bookmark</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Build Collection</h3>
              <p className="text-purple-200">Create your digital memory box with POAPs from events you&apos;ve attended</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-white mb-4">groups</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Join Community</h3>
              <p className="text-purple-200">Connect with others who share your interests and experiences</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Featured POAPs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-full aspect-square sm:h-40 lg:h-48 bg-purple-400/20 rounded-lg mb-4" />
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Event #{i}</h4>
                  <p className="text-purple-200 text-sm">Date: 2023-{i}-01</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
