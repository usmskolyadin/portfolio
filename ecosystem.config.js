module.exports = {
  apps: [
    {
      name: 'spacycookinghere',
      script: 'node_modules/next/dist/bin/next',
      args: '-p 3000',
      exec_mode: 'cluster',
      instances: 'max'
    }
  ]
}
