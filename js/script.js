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


    $(".bi-tag").click(function () {
        let product_name = $(this).closest(".row.a.r1").find(".ab .dis:first-child p:first-child").text();
        let product_cost = $(this).closest(".row.a.r1").find(".ab .dis:last-child span:first-child").text();

        if ($("td:contains(" + product_name + ")").length > 0) {
        let add = $("td:contains(" + product_name + ")").closest("tr").find(".plus p").text();
            $("td:contains(" + product_name + ")").closest("tr").find(".plus p").html(parseInt(add) + 1);
            console.log(add);
        } else {
            let new_row = "<tr>\n" +
                "                                    <td>\n" +
                "                                        <p>\n" +
                product_name +
                "                                            <span>1-558</span>\n" +
                "                                        </p>\n" +
                "                                    </td>\n" +
                "                                    <td>\n" +
                "                                        <p>\n" +
                product_cost +
                "                                        </p>\n" +
                "                                    </td>\n" +
                "                                    <td class=\"plus\">\n" +
                "                                        <svg class=\"bi bi-plus\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "                                            <path fill-rule=\"evenodd\" d=\"M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n" +
                "                                            <path fill-rule=\"evenodd\" d=\"M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z\" clip-rule=\"evenodd\"/>\n" +
                "                                        </svg>\n" +
                "                                            <p>\n" +
                "                                                1\n" +
                "                                            </p>\n" +
                "                                        <svg class=\"bi bi-dash\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "                                            <path fill-rule=\"evenodd\" d=\"M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z\" clip-rule=\"evenodd\"/>\n" +
                "                                        </svg>\n" +
                "                                    </td>\n" +
                "                                </tr>";

            $(".dropdown-menu tbody").append(new_row);
            $(".dropdown-menu .table tbody .plus .bi-plus").click(function () {
                let plus = $(this).closest("td").find("p").text();
                $(this).closest("td").find("p").html(parseInt(plus) + 1);
            });
            $(".dropdown-menu .table tbody .plus .bi-dash").click(function () {
                if ($(this).closest("td").find("p").text() > 1){
                    let minus = $(this).closest("td").find("p").text();
                    $(this).closest("td").find("p").html(parseInt(minus) - 1);
                }
                else {
                    $(this).closest("tr").remove();
                }
            });
        }

    })

});