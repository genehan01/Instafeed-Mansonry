$(function(){
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'goldenretriever',
        accessToken: '1468636867.1fb234f.51050569350a42aba49ba4d4ec5ff08f',
        target: 'ig-masonry-con',
        resolution: 'standard_resolution',
        template: '<div class="ig-masonry-brick"><a href="{{link}}"><img src="{{image}}"></a></div>',
        after: setupMasonry,
        limit: 50
    });

    feed.run();
    
    function setupMasonry(){
        $('#ig-masonry-con').imagesLoaded(function(){
            $('#ig-masonry-con').masonry();
        });
    }
});
