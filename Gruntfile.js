/**
 * Required packages (in "package.json" file):
 *"devDependencies": {
 *  "grunt": "^1.0.1",
 *  "grunt-contrib-cssmin": "^1.0.2"
 *}
 */
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//Tasks
		cssmin: {
			css: {
				files: [{
					expand: true,
					cwd: 'Resources/css/',
					src: ['*.css', '!*.min.css'],
					dest: 'Resources/css/',
					ext: '.min.css'
				}, {
					expand: true,
					cwd: 'Resources/css/ModernStyles/',
					src: ['*.css', '!*.min.css'],
					dest: 'Resources/css/ModernStyles/',
					ext: '.min.css'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['cssmin']);
};

