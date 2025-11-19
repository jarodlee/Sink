export default defineAppConfig({
  title: 'aLink',
  email: 'alink@lxj.ai',
  github: 'https://github.com/jarodlee/sink',
  twitter: 'https://lxj.ai/t',
  telegram: 'https://lxj.ai/telegram',
  mastodon: 'https://lxj.ai/mastodon',
  blog: 'https://lxj.ai/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://lxj.ai/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
