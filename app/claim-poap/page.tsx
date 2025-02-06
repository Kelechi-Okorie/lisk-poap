import Link from "next/link";

export default function ClaimPoap() {
    return (
        <div id="webcrumbs">
            <div className="w-full max-w-[1440px] mx-auto bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen px-4 sm:px-6 lg:px-8">
                <header className="p-4 sm:p-6 lg:p-8">
                    <Link href="/events" className="mb-4 flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Back to Events
                    </Link>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                            <div className="w-full lg:w-2/3">
                                <div className="aspect-video bg-purple-400/20 rounded-xl overflow-hidden mb-4">
                                    <div className="w-full h-full bg-gradient-to-br from-purple-600/50 to-purple-800/50" />
                                </div>

                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Web3 Conference #1</h1>

                                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-purple-200">
                                        <span className="material-symbols-outlined">calendar_month</span>
                                        <span>2023-06-15</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-200">
                                        <span className="material-symbols-outlined">location_on</span>
                                        <span>Virtual Event</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-200">
                                        <span className="material-symbols-outlined">group</span>
                                        <span><strong className="text-white">250</strong> Attendees</span>
                                    </div>
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <h2 className="text-xl font-semibold mb-3">Event Description</h2>
                                    <p className="text-purple-200">Join us for an exciting Web3 conference featuring industry leaders, innovative projects, and networking opportunities. Claim your POAP to commemorate your participation in this groundbreaking event.</p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3">
                                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sticky top-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Claim Your POAP</h3>

                                    <div className="space-y-4">
                                        <div className="p-4 border border-purple-400/30 rounded-lg bg-purple-500/10">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-purple-200">Status</span>
                                                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Available</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-purple-200">Remaining</span>
                                                <span className="text-white font-semibold">42/250</span>
                                            </div>
                                        </div>

                                        <input type="text" placeholder="Enter your wallet address" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 outline-none focus:ring-2 focus:ring-purple-400 transition-all" />

                                        <button className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 active:bg-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                                            Claim POAP
                                        </button>

                                        <p className="text-sm text-purple-300">Make sure you&apos;re connected to the correct network before claiming.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}