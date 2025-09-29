module.exports = () => ({
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        username: "highwayburger.noreply@gmail.com",
        password: "slwlqtyotbljokho"
      },
      settings: {
        defaultFrom: "highwayburger.noreply@gmail.com",
        defaultReplyTo: "highwayburger.noreply@gmail.com"
      }
    }
  },
  "users-permissions": {
    config: {
      email: {
        emailConfirmation: true
      }
    }
  }
});