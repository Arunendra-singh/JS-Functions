// HTML structure here 


<div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="btn btn-sm" id="minus-btn"><i class="fa fa-minus"></i></div>
    </div>
    <input type="number" id="qty_input" class="form-control form-control-sm" value="1" min="1">
    <div class="input-group-prepend">
       <div class="btn btn-sm" id="plus-btn"><i class="fa fa-plus"></i></div>
    </div>
</div>



// Javascript function

<script type="text/javascript">
	jQuery(document).ready(function(){
    jQuery('#qty_input').prop('disabled', true);
    jQuery('#plus-btn').click(function(){
    	jQuery('#qty_input').val(parseInt(jQuery('#qty_input').val()) + 1 );
    	    });
        jQuery('#minus-btn').click(function(){
    	jQuery('#qty_input').val(parseInt(jQuery('#qty_input').val()) - 1 );
    	if (jQuery('#qty_input').val() == 0) {
			jQuery('#qty_input').val(1);
		}

    	    });
 });
</script>
