/* User select size of canvas.
 *Then click submit.
 *and this call makeGrid()
 */
$('.makeButton').click(function() {
    makeGrid();
    return false;
});



//Clear cell by double clicking cell.

$('#pixel_canvas').on('dblclick', 'td', function() {
    $(this).toggleClass('cellColor');
});



// Select color input
$('#pixel_canvas').on('click', 'td', function() {
    var color = $('#colorPicker').val();
    $(this).attr('bgcolor', color);
});




$('#colorPicker').on('change', function() {
    var z = $('#colorPicker').val();
    $('#pickColorText').css('color', z);
});
/*$('#pixel_canvas').on('mousedown', 'td', function(){
  *  var color = $('#colorPicker').val();
  *  $(this).attr('bgcolor', color);
});*/


/*When size is submitted by the user, call makeGrid()
 *This removes the previous colored canvas if present.
 *and returns a new one with the new values of height and width eneterd by the user.
 */

function makeGrid() {
    $('tr').remove();
    $('td').remove();

    var height = $('#input_height').val();
    var width = $('#input_width').val();
    for (let x = 1; x <= height; x++) {
        $('#pixel_canvas').append('<tr></tr>');
        for (let y = 1; y <= width; y++) {
            $("#pixel_canvas").children().last().append('<td></td>');
        }
    }
}
