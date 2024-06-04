if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
module.exports = {

  env: {
    WORDPRESS_API_URL: 'https://nidish.com/graphql/',
  },

swcMinify: true,
optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,

      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "nidish.com",
      },      
    ],
    minimumCacheTTL: 15000000,
  },
};
