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
});
