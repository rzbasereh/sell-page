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
    $(".bi-plus").click(function () {
        let a=$(this).closest("td").find("p").text();
        $(this).closest("td").find("p").html(parseInt(a)+1);
        console.log(c);
    })
});