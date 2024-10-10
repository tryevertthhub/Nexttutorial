// next.config.mjs
export default {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply these headers to all routes
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevent MIME-type sniffing
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; object-src 'none';", // Adjust to your needs
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer', // Control the Referer header
          },
        ],
      },
    ];
  },
};
