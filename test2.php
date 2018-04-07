<html>
<head>
<title>Font Awesome Icons</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<table class="table-shopping-cart">
  <tr class="table-head">
    <th class="column-1 notranslate">S.N.</th>
    <th class="column-2">Commodity Name</th>
    <th class="column-3">Vendor Name</th>
    <th class="column-4">Rate (₹ per KG/Entity)</th>
    <th class="column-5 p-l-70">Quantity (KG/Entity)</th>
    <th class="column-6">Price</th>
    <th class="column-7"></th>
  </tr>
  <tr class="table-row">
    <td class="column-1">1</td>
    <td class="column-2">apple</td>
    <td class="column-3 notranslate">P</td>
    <td class="column-4">
      <strong class="price" id="0-price">
        120											</strong>
    </td>
    <td class="column-5">
      <i name="" class="fa fa-plus-square" style="font-size:36px;"></i>
      <input type="text" name="cartid[]" value="2" hidden="hidden" />
      <input type="number" name="quantity[]" class="quantity size8 m-text18 t-center num-product" min="1" max="250" value="60" />
      <i name="" class="fa fa-minus-square" style="font-size:36px;"></i>
    </td>
    <td class="column-6">
      <strong class="total" id="0-total">
        7200											</strong>
    </td>
    <td class="column-7">
      <a href="cart.php?remove=1">
        <i class="fa fa-trash-o" style="font-size:36px"></i>
      </a>
    </td>
  </tr>
  <tr class="table-row">
    <td class="column-1">2</td>
    <td class="column-2">cucumber</td>
    <td class="column-3 notranslate">v</td>
    <td class="column-4">
      <strong class="price" id="1-price">
        33											</strong>
    </td>
    <td class="column-5">
      <i name="" class="minus fa fa-minus-square" style="font-size:36px;"></i>
      <input type="text" name="cartid[]" value="1" hidden="hidden" />
      <input type="number" name="quantity[]" class="quantity size8 m-text18 t-center num-product" min="1" max="100" value="70" />
      <i name="" class="plus fa fa-plus-square" style="font-size:36px;"></i>
    </td>
    <td class="column-6">
      <strong class="total" id="1-total">
        2310											</strong>
    </td>
    <td class="column-7">
      <a href="cart.php?remove=2">
        <i class="fa fa-trash-o" style="font-size:36px"></i>
      </a>
    </td>
  </tr>
</table>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js "></script>
<script type="text/javascript">
      // we used jQuery 'keyup' to trigger the computation as the user type
    $('.quantity').keyup(function () {
      setTimeout(function() {   //calls click event after a certain time
          cartUpdate();
      }, 1000);
    });

    $('.minus').click(function(){
      var quantity = $(this).next().val();
      if(--quantity < 1)
        $(this).next().val("1");
      else
        $(this).next().val(quantity);
        cartUpdate();
    });
    $('.plus').click(function(){
      var quantity = $(this).next().val();
      var max = $(this).next().attr("max");
      if(quantity < max) {
        $(this).next().val(quantity-1);
        cartUpdate();
      }
    });

    var cartUpdate = function() {
      // initialize the sum (total price) to zero
      var total = 0;
      var sum = 0;
      // we use jQuery each() to loop through all the textbox with 'price' class
      // and compute the sum for each loop
      $('.quantity').each(function(index) {
        quantity=$(this).val();
        sum = Number($("#"+index+"-price").html())*Number(quantity);
        $("#"+index+"-total").html(sum.toString());
      }); 

      $('.total').each(function(index) {
        total += Number($(this).html());
        // set the computed value to 'totalPrice' textbox
        $('#totalPrice').html(total.toString());
      });
    }
</script>
</body>
</html>