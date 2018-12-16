
module.exports = function(grunt) {
    grunt.initConfig({
        shell: {
          page: {
              command: [
                'asciidoctor -b html5 -o docs/index.html index.asciidoc',
                'asciidoctor -b html5 -o docs/Rack.html Rack.asciidoc',
              ].join('&&')
          },
            pdf: {
                command: [
                  'asciidoctor-pdf -o docs/pdf/index.pdf ./index.asciidoc',
                  'asciidoctor-pdf -o docs/pdf/Asciidoc.pdf ./Asciidoc.asciidoc'
                ].join('&&')
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell:page','shell:pdf']);
};
