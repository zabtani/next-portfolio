const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.node$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    });

    return config;
  },

  images: {
    domains: ['res.cloudinary.com', 'flowbite.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
