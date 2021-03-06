
module.exports = function(grunt) {
    grunt.initConfig({
        shell: {
          page: {
              command: [
                'asciidoctor -b html5 -o docs/index.html index.asciidoc',
                'asciidoctor -b html5 -o docs/RubyForDummies.html RubyForDummies.asciidoc',
                'asciidoctor -b html5 -o docs/Gem.html Gem.asciidoc',
                'asciidoctor -b html5 -o docs/Grape.html Grape.asciidoc',
                'asciidoctor -b html5 -o docs/RubyApplication.html RubyApplication.asciidoc',
                'asciidoctor -b html5 -o docs/HerokuRoR.html HerokuRoR.asciidoc',
                'asciidoctor -b html5 -o docs/Rack.html Rack.asciidoc',
                'asciidoctor -b html5 -o docs/Asciidoc.html Asciidoc.asciidoc',
              ].join('&&')
          },
            pdf: {
                command: [
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./index.asciidoc -o docs/pdf/index.pdf',
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./RubyForDummies.asciidoc -o docs/pdf/RubyForDummies.pdf',
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./Gem.asciidoc -o docs/pdf/Gem.pdf',
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./Grape.asciidoc -o docs/pdf/Grape.pdf',
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./RubyApplication.asciidoc -o docs/pdf/RubyApplication.pdf',
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./HerokuRoR.asciidoc -o docs/pdf/HerokuRoR.pdf',
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./Rack.asciidoc -o docs/pdf/Rack.pdf',
                  'asciidoctor-pdf -r asciidoctor-pdf-cjk ./Asciidoc.asciidoc -o docs/pdf/Asciidoc.pdf',
                ].join('&&')
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell:page','shell:pdf']);
    grunt.registerTask('pdf', ['shell:pdf']);
    grunt.registerTask('html', ['shell:page']);
};
