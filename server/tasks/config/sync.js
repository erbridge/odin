module.exports = function(grunt) {

  grunt.config.set('sync', {
    dev: {
      files: [{
        cwd: './assets',
        src: ['**/*'],
        dest: '.tmp/public'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sync');

};
