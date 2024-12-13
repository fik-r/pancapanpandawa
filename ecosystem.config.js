module.exports = {
    apps: [
      {
        name: 'pandawa',
        script: 'npm',
        args: 'start',
        instances: 1, // Adjust instances (use 1 if you're low on resources)
        exec_mode: 'fork', // Use 'cluster' for multi-core, 'fork' for single-core
        env: {
          NODE_ENV: 'production',
        },
        node_args: '--max-old-space-size=1024', // Allocate 1GB memory for Node.js
        max_memory_restart: '512M', // Restart process if memory exceeds 512MB
      },
    ],
  };