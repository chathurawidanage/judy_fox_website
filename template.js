$(document).ready(function () {
    var loc = window.ov_loc ? window.ov_loc : ".";
    $('body').prepend('<div data-load="' + loc + '/header.html"></div>');
    $('body').append('<div data-load="' + loc + '/footer.html"></div>');

    $("[data-load]").each(function () {
        console.log(this);
        $(this).load($(this).data("load"), function () {
        });
    });
});