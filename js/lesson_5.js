$('.item-popover').popover();

$('.item-popover').on('shown.bs.popover', function(){
    //console.log(this);
    //var popover = $(this).popover();
    var popover = $('.popover').first();
    console.log(popover);
    console.log(popover.height());
    
    var pos= popover.position()
    console.log(pos);
    //$(this).popover().position({top: po.top - po.height/2, left: pos.left - po.width});
    console.log(popover.attr('style'));
    console.log(popover.height());
    popover.attr("style", "display: block; top:" + (pos.top - popover.height()/2 + 5) + "px; left:"+ (pos.left - popover.width()) + "px");
    console.log(popover.attr('style'));
    console.log(popover.height());
    //popover.hide();
});

//$('.menu-item-price').on('hover', function(){
$('.menu-item-price').hover(function(){
    var temp = $(this).text();
    var price = (temp.split(" "))[1];

    $(this).tooltip({title: "$" + (price/100).toFixed(2), trigger: "hover", placement: "right"});
    $(this).tooltip('show');
}, function() {
    $(this).tooltip('hide');
});