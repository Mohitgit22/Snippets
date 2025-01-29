// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };



// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      // Remove '@prisma/client' from this list if it's there
      // You can keep other packages here, if necessary
    ],
  },
  // You can add any other config options you need here
};

export default nextConfig;