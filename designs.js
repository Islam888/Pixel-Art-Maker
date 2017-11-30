
/* User select size of canvas.
*Then click submit.
*and this call makeGrid()
*/
$('#sizePicker').submit(function () {     
    makeGrid();
    return false;   
});
 
// Select color input
$('#pixel_canvas').on('click' ,'td' ,function () { 
    const color = $('#colorPicker').val();
    $(this).attr('bgcolor', color);    
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
    $('#colorPicker').val("#000000");
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    for(let x = 1; x <= height; x++){
        $('#pixel_canvas').append('<tr></tr>');
        for(let y = 1; y <= width; y++){
            $("#pixel_canvas").children().last().append('<td></td>');
        }
    }
}
