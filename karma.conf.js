module.exports = function(config) {
  var configuration = {
    basePath: '',

    frameworks: ['jspm', 'jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],

    preprocessors: {
      'app/**/!(*.spec)+(.js)': ['sourcemap', 'coverage'],
      'app/**/*.js': ['sourcemap']
    },

    // Generate json used for remap-istanbul
    coverageReporter: {
      dir: 'report/',
      reporters: [
        { type: 'json', subdir: 'report-json' }
      ]
    },

    jspm: {
      loadFiles: ['test/test-helpers/setup.js', 'app/**/*.spec.js'],
      serveFiles: ['app/**/*!(*.spec).js']
    },

    files: [
      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'app/**/*.html', included: false, watched: true},
      {pattern: 'app/**/*.css', included: false, watched: true},

      // // paths to support debugging with source maps in dev tools
      {pattern: 'app/**/*.ts', included: false, watched: false},
      {pattern: 'app/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/app/",
      "/test/": "/base/test/",
      '/jspm_packages/': "/base/jspm_packages/"
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
  };

  if (process.env.APPVEYOR) {
    configuration.browsers = ['IE'];
    configuration.singleRun = true;
    configuration.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
  }

  config.set(configuration);
}
