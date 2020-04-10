$(document).ready(function () {
    $("i.fa-exchange-alt").click(function () {
        $("div.default").addClass('show');
    });
    $("#remove").click(function () {
        $("div.default").removeClass('show');
    });
    $("svg.bi-x").click(function () {
        $(this).closest("div.r1").remove()
    });
    $(".btn.dropdown-toggle").click(function () {
        $(".dropdown-menu").toggleClass("show");
    });
});