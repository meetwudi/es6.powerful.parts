var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    less: {
      dist: {
        files: [{
          expand: true,
          cwd: 'source/_less',
          src: ['index.less'],
          dest: 'source/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      style: {
        files: ['source/_less/**/*.less'],
        tasks: ['less:dist'],
        options: {
          livereload: true
        }
      }
    },
    shell: {
      server: {
        command: 'hexo server',
        options: { async: true }
      }
    }
  });

  grunt.registerTask('dev', ['shell:server', 'watch']);
};