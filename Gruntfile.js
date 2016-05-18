module.exports = function(grunt) {
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	nodemon: {
	  dev: {
	    script: 'server.js'
	  }
	},

  // jshint: {
  //   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
  //   options: {
  //     globals: {
  //       jQuery: true
  //     }
  //   }
  // },

  // watch: {
  //   files: ['<%= jshint.files %>'],
  //   tasks: ['jshint']
  // }
  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  // grunt.registerTask('default', ['jshint']);

};
