/** @type {import('next').NextConfig} */
const nextConfig = {
redirects: async () => [
     {
        source: '/',
        destination: 'https://ru.vishnyaproperties.com',
        permanent: true,
      },
  ],
};

export default nextConfig;

