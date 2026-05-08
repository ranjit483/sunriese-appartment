import Link from 'next/link';
import { ArrowRight, Building2, ShieldCheck, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Sunrise</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Overview
              </Link>
              <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="/dashboard" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6">
            <Zap className="w-4 h-4 fill-blue-700/20" />
            V2.0 is now live
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Modernize your society management
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
            Sunrise is a comprehensive ERP for modern apartment complexes. Manage residents, billing, maintenance, and security in one unified platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Access Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#features" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Everything you need</h2>
            <p className="mt-4 text-lg text-gray-500">A complete suite of tools built specifically for properties in Nepal.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Property Management</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Track units, blocks, and occupancy rates in real-time. Manage leases and resident information securely.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gate Security</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Monitor visitors, staff attendance, and deliveries with our live security check-in feed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Engagement</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Send notices, manage complaints, and keep residents updated right from their phones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
