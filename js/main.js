require.config({
    paths: {
        jquery: 'jquery'
    },
});

require(['jquery','public/header','public/footer','page/' + APP_NAME], function($,head,foot,app) {
    
});