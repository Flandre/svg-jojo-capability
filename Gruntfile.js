module.exports = function(grunt) {
  'use strict';
  // Force use of Unix newlines
  grunt.util.linefeed = '\n';
  // Set default file encoding utf-8.
  grunt.file.defaultEncoding = 'utf-8';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      files: ['.tmp','dist']
    },
    copy: {
      bootstrapcss: {
        src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        dest: 'dist/css/bootstrap.min.css'
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.',
          keepalive:true
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('default', ['clean', 'copy']);
};