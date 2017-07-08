function buildTocLevel(query, level) {
    if (!query.length) {
        return "";
    }
    var ToC ="<ul>";
    var el, title, link, newLine;

    query.each(function() {
        el = $(this);
        title = el.text();
        link = "#" + el.attr("id");
        newLine =
            "<li>" +
            "<a href='" + link + "'>" +
            title +
            "</a>" +
                buildTocLevel($(this).nextUntil("h" + level).filter("h" + (level + 1)), level + 1)
            +
            "</li>";

        ToC += newLine;
    })


    ToC += "</ul>"
    return ToC;
}

function scrollButtons() {
        if (window.innerWidth > document.documentElement.clientWidth) {
            $("#go-to-top").click(function(event){
                event.preventDefault();
                $("html, body").animate({"scrollTop": "0px"}, "slow");
            })
            $("#go-to-top").show("slow");

            $("#go-to-bottom").click(function(event){
                event.preventDefault();
                $("html, body").animate({"scrollTop": $(document).height()}, "slow");
            })
            $("#go-to-bottom").show("slow");
        }
    else {
            $("#go-to-top").hide('slow');
            $("#go-to-bottom").hide('slow');
    }
}

$(function() {
    $( window ).resize(function() {
        scrollButtons();
    })
    scrollButtons();

    var tocDiv = $("#toc");

    if (!tocDiv.length) {
        return;
    }

    var ToC =
        "<nav role='navigation' class='table-of-contents'>" +
        "<h2>Table of contents:</h2>"


    var el, title, link, newLine;
    var headerList = $("article h2");

    if (!headerList.length) {
        return;
    }

    ToC += buildTocLevel(headerList, 2);

    ToC += "</nav>";

    tocDiv.html(ToC);
    tocDiv.show("slow");
});
