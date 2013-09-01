$(document).ready(function() {
    var storage = $.localStorage;

    if (chrome.extension.getBackgroundPage().isOption('rssurl')) {
        var _rssurl = chrome.extension.getBackgroundPage().getOption('rssurl');
        $('#rssurl').val(_rssurl);
    }

    $('#save').on('click', function() {
        var _rssurl = $('#rssurl').val();
       chrome.extension
             .getBackgroundPage()
            .saveOption(
              [{
                'value': _rssurl,
                'key': 'rssurl'
              }]);
        $('#status').html('opzione salvata');
    })
});

