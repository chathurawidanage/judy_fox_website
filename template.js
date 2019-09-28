$(document).ready(function () {
    $('body').prepend("<div data-load=\"header.html\"></div>");
    $('body').append("<div data-load=\"footer.html\"></div>");

    $("[data-load]").each(function () {
        $(this).load($(this).data("load"), function () {
        });
    });
});