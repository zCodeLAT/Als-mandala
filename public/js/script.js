var obj = $("#uploadForm");

$(document).on('dragenter', function (e)
{
    e.stopPropagation();
    e.preventDefault();
    //alert( e.isDefaultPrevented() ); 
});
$(document).on('dragover', function (e)
{
  e.stopPropagation();
  e.preventDefault();
  obj.css('border', '2px dotted #0B85A1');
});
$(document).on('drop', function (e)
{
    e.stopPropagation();
    e.preventDefault();
});
