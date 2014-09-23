module.exports=function(grunt) {
  //Project configuration for client release

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'dest/Resources/css/*.min.css': ['src/Resources/FromDLL/Resources/Styles/ModernStyles/*.css'],
        filter: 'isFile'
        };
        };
        });
        }
