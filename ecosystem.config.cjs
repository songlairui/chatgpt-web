module.exports = {
  apps: [{
    name: 'chatgpt-web',
    script: 'serve -L -s -p 3457 dist '
    // watch: '.'
  }],

  deploy: {
    production: {
      user: 'root',
      host: 'bwh',
      ref: 'origin/main',
      repo: 'git@github.com:songlairui/chatgpt-web.git',
      path: '/root/pm2-deploy/chatgpt-web',
      'pre-deploy-local': 'pwd && ls',
      'post-deploy': 'pnpm i && pnpm build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
