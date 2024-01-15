module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit", // Community providers need to have the full package name
      providerOptions: {
        publicKey: env("IMAGEKIT_PUBLIC_KEY"),
        privateKey: env("IMAGEKIT_PRIVATE_KEY"),
        urlEndpoint: env("IMAGEKIT_URL_ENDPOINT"), // Example: https://ik.imagekit.io/username

        // Optional
        params: {
          folder: "/strapi-railway-imagekit", // Defaults to "/" if value is not supplied
        },
      },
    },
  },
});
