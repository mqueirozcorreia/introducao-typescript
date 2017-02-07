var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

//Dependências adicionais para o browsify
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['src/*.html'],
    bundlePath : 'dist'
};

//Dependências adicionais para o watchify
var watchify = require("watchify");
var gutil = require("gulp-util");


/********************************************
 * Exemplo de transpilação
 * O código gerado por este não pode ser executado no browser
 * Pois utilizam require por exemplo, que são entendidos por node
 * Para usar no browser precisam de usar um empacotador
 * browserify : http://browserify.org/
 * webpack : https://webpack.github.io/
 * Referência
 * http://stackoverflow.com/a/31931649/3424212
 * 
 * Chamando este método para entender o javascript gerado parcialmente
 *******************************************/
gulp.task("TypescriptTranscript", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(paths.bundlePath));
});

//Gera o javascript e html utilizado no exemplo 03BrowserUsage.html
gulp.task("03BrowserUsage", ["copy-html"], function () {
    return browserify({
            basedir: '.',
            debug: true,
            entries: './src/03BrowserUsage.ts',
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('03BrowserUsageBundle.js'))
        .pipe(gulp.dest("dist"));


});




/****************************************
 * Exemplo de automação para o browser
 ***************************************/
//Copia arquivos de extensão 'html' do src para dist
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest(paths.bundlePath));
});

//Configuração do browsify, para poder ser reutilizada em diferentes tarefas
var browserifyConfigured = browserify({
        basedir: '.',
        debug: true,
        entries: paths.browserInitialTS,
        cache: {},
        packageCache: {}
    });

//Navega a partir do arquivo inicial compilando todas as dependências no único arquivo bundle.js
//Para o browser minimizar o número de arquivo é essencial, já que cada novo arquivo, no http 1 
//é um novo round trip para o servido. No http2 é possível resolver este problema
gulp.task('browserify', function () {
    // Endless stream mode 
    return browserifyConfigured
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});

var watchedBrowserify = watchify(browserifyConfigured
.plugin(tsify));

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", ["copy-html"], bundle);

//Vai executar a função bundle toda vez que houver atualizações dos arquivos do watchedBrowserify
watchedBrowserify.on("update", bundle);
//Para fazer log no console
watchedBrowserify.on("log", gutil.log);