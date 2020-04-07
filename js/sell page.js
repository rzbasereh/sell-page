$(document).ready(function () {
    $("div.col-9").mouseenter(function () {
        $(this).css("cursor","pointer");
    });
    $("svg.bi-x").mouseenter(function () {
        $(this).css("cursor", "pointer");
    });
    $("i.fa-exchange-alt").click(function () {
        $("div.default").addClass('show');
    });
    $("i.fa-exchange-alt").mouseenter(function () {
        $(this).css("cursor", "pointer");
    });
    $("#remove").click(function () {
        $("div.default").remove('.show');
    });
    $("svg.bi-x").click(function () {
        $(this).closest("div.r1").remove()
    });
});