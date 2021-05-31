module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      app: ['dist']
    },
    copy: {
      app: {
        files: [
          {flatten: true, expand: true, src: ['src/app/index.html'], dest: 'dist/public'},
          {flatten: false, expand: true, cwd: 'src/app/lib', src: ['*/**'], dest: 'dist/public/lib'}
        ]
      }
    },
    uglify: {
      app: {
        src: 'dist/public/js/app.js'
      }
    },
    browserify: {
      app: {
        options: {
          transform: [[
            'babelify', {
              sourceMap: false,
              presets: ['react', 'es2015', 'stage-2']
            }]
          ]
        },
        files: {
          'dist/public/js/app.js': 'src/app/main.jsx'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/public/css/app.min.css': 'src/app/scss/main.scss'
        }
      }
    },
    watch: {
      app: {
        files: ['src/app/**/*'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      },
      sass: {
        files: ['src/app/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    },
    concurrent: {
      watchAll: {
        tasks: ['watch:sass', 'watch:app']
      }
    }
  });

  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['clean:app', 'browserify', 'sass', 'copy:app']);
}
