module.exports = {
  apps : [{
    name   : "Tulsio client",
    script : "yarn start",
    env_production: {}
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/tulsio.git',
      path : '/var/www/tulsio/client',
      'post-deploy' : 'yarn && yarn build && yarn populate && pm2 reload ecosystem.config.js --env production',
    }
  }
};
