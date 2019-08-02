const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withSass({
  distDir: 'build_dir',

  assetPrefix: './',

  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // '/about.md': { page: '/about' },
      // '/team.md': { page: '/team' },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    }
  },
}))
