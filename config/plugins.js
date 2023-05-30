module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'centralcharmazores@gmail.com',
          defaultReplyTo: 'centralcharmazores@gmail.com',
        },
      },
    },
    // ...
  });