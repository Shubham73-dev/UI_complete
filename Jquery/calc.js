$(document).ready(function() {
    $(".btn").click(function() {
        var opr = $(this).html();
        var num_1 = $('#box_1').val();
        var num_2 = $('#box_2').val();
        var expression = parseInt(num_1) + opr + parseInt(num_2);
        var result = eval(expression);
        $('#box_3').val(result);
    });
})