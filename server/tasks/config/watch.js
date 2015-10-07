module.exports = function(grunt) {

  grunt.config.set('watch', {
    api: {

      // API files to watch:
      files: ['api/**/*', '!**/node_modules/**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
