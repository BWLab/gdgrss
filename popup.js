$(document).ready(function() {

    var storage = $.localStorage;
    if (storage.isSet('rssurl')) {

        var rssurl = storage.get('rssurl');
        $.get(
            rssurl,
            function(data) {

                var $_xml = $(data);

                if ($('#title').text() == '')
                    $('#title').text(
                        $_xml.find('title:first').text()
                    );

                $_xml.find("item").each(function() {
                    var $this = $(this),
                        item = {
                            title: $this.find("title").text(),
                            link: $this.find("link").text(),
                            description: $this.find("description").text(),
                            pubDate: $this.find("pubDate").text(),
                            author: $this.find("author").text()
                        };
                    var $ul = $('<ul>'),
                        $li = $('<li>'),
                        $a = $('<a>'),
                        $h3 = $('<h3>'),
                        $span = $('<span>');

                    $a.attr('href', item.link)
                        .attr('target', '_blank')
                        .text(item.title);
                    $h3.append($a);

                    $li.append($h3)
                        .append($span);

                    $span.html(item.description);

                    $('#items').append($li);

                });
            }
        ).fail(function() {
            alert('error');
        });
    } else {
        $('div.span8').html('<h1>aggiungere RSS FEED in opzioni</h1>');
    };

});
