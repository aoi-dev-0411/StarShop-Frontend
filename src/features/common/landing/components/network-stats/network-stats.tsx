import * as React from "react";

interface StatCard {
  value: string;
  label: string;
  icon: React.ReactNode;
  gradient: string;
}

const STATS: StatCard[] = [
  {
    value: "1,547,892",
    label: "Total Transactions",
    gradient: "from-blue-500 to-blue-600",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    value: "89,456",
    label: "NFTs Minted",
    gradient: "from-pink-500 to-purple-600",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    value: "32,589",
    label: "Active Users",
    gradient: "from-green-400 to-green-600",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: "$2,847M",
    label: "Total Volume",
    gradient: "from-orange-400 to-orange-600",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M17 12a5 5 0 01-10 0" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
];

export const NetworkStats = React.memo(function NetworkStats() {
  const headingId = "network-stats-heading";

  return (
    <section
      role="region"
      aria-labelledby={headingId}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
            Real-Time Network Stats
          </span>
          <h2
            id={headingId}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Powering the{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Future
            </span>{" "}
            of Commerce
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base">
            Our blockchain-powered marketplace is processing thousands of
            transactions daily, creating a new standard for transparent and
            secure e-commerce.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-gray-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4`}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl sm:text-4xl font-extrabold text-white mb-1"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
