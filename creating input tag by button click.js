// HTML code 

<div class="form-group">
		<button type="button" id="btn" class="btn btn-primary">Add Ticket Details</button>
    <div id="form" ></div>
 </div>


// Core javascript functions

(function() {
  var counter = 0;
  var btn = document.getElementById('btn');
  var form = document.getElementById('form');
  var addInput = function() {
    counter++;
    var input = document.createElement("div");
    input.className ='form-control';



    var input = document.createElement("input");
    input.id = 'input-' + counter;
    input.className ='form-control';
    input.type = 'text';
    input.name = 'name';
    form.appendChild(input);
  };
  btn.addEventListener('click', function() {
    addInput();
  }.bind(this));
})();
