import Image from 'next/image';

import webcrumbsPlaceholder from '../../public/webcrumbs-placeholder.svg'

export default function Dashboard() {
    return (
        <div id="webcrumbs">
            <div className="w-full max-w-[1440px] mx-auto bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen px-4 sm:px-6 lg:px-8">
                <header className="p-4 sm:p-6 lg:p-8">
                    <nav className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Image
                                width={40}
                                height={40}
                                src={webcrumbsPlaceholder}
                                alt="Profile"
                                className="w-10 h-10 rounded-full ring-2 ring-purple-400 hover:ring-4 transition-all duration-300"
                            />
                            <div>
                                <h2 className="text-white font-semibold">John Doe</h2>
                                <p className="text-purple-200 text-sm">Premium Member</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined text-white">notifications</span>
                            </button>
                            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined text-white">settings</span>
                            </button>
                        </div>
                    </nav>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="material-symbols-outlined text-purple-300">account_balance_wallet</span>
                                    <span className="text-sm text-purple-300">Total Balance</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">$12,345.67</h3>
                                <p className="text-green-400 text-sm mt-2">+15.3% this month</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="material-symbols-outlined text-purple-300">token</span>
                                    <span className="text-sm text-purple-300">POAPs Collected</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">23</h3>
                                <p className="text-purple-200 text-sm mt-2">Latest: Web3 Conference</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="material-symbols-outlined text-purple-300">groups</span>
                                    <span className="text-sm text-purple-300">Communities</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">5</h3>
                                <p className="text-purple-200 text-sm mt-2">3 new messages</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="material-symbols-outlined text-purple-300">upcoming</span>
                                    <span className="text-sm text-purple-300">Upcoming Events</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white">8</h3>
                                <p className="text-purple-200 text-sm mt-2">Next: Tomorrow</p>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-white/5 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-purple-300">event_available</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-white font-medium">Web3 Conference #{item}</h4>
                                                <p className="text-purple-200 text-sm">POAP claimed successfully</p>
                                            </div>
                                            <span className="text-purple-200 text-sm">2h ago</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
                                <div className="space-y-4">
                                    <button className="w-full p-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 active:bg-purple-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                                        View All POAPs
                                    </button>
                                    <button className="w-full p-4 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                                        Join New Event
                                    </button>
                                    <button className="w-full p-4 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                                        Connect Wallet
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}