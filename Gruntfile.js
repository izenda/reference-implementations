module.exports=function(grunt) {
  //Project configuration for client release

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      static_mappings: {
        files: [
          {src: 'Resources/css/main.css', dest: 'Resources/build/main.min.css'}
        ],
      },
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'Resources/',
            src: ['**/*.css'],
            dest: 'build/',
            ext: '.min.js',
            extDot: 'first'
          },
        ],
      },
    },
  });

  grunt.LoadNpmTasks('uglifycss');
  grunt.registerTask('default', ['uglifycss']);
};

