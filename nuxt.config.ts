import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-api-party'],

  runtimeConfig: {
    apiParty: {
      endpoints: {
        jira: {
          url: 'https://apijira.visma.com/rest',
          headers: {
            Authorization: `Basic ${process.env.NUXT_API_PARTY_AUTHORIZATION_BASIC!}`,
          },
        },
      },
    },
  },
})
