module.exports = function(grunt) {

  grunt.config.set('watch', {
    api: {
      files: ['api/**/*', '!**/node_modules/**']
    },
    assets: {
      files: ['assets/**/*', '!**/node_modules/**'],
      tasks: ['syncAssets']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
