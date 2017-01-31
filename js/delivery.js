var subTotal = 0;
$('.card .button').on('click', function(event) {
  var button = event.target;
  var card = $(button).closest('.card');
  var name = $(card).find('.card-title').text();
  var priceString = $(card).find('.card-content p').text();
  var price = Number.parseFloat(priceString.substring(1));
  var newRow = $(`<tr><td>${name}</td><td>${priceString}</td></tr>`);
  $('#order-details').append(newRow);
  subTotal += price;
  let tax = subTotal * 0.09;
  let total = subTotal + tax;
  $('#subtotal').text("$" + subTotal.toFixed(2));
  $('#tax').text("$" + tax.toFixed(2));
  $('#total').text("$" + total.toFixed(2));
});

$('#order-btn').on('click', function(event) {
  let name = $('#name').val();
  let address = $('#address').val();
  let telephone = $('#telephone').val();
  if (name === "" || address === "" || telephone === "") {
    Materialize.toast("Please enter your name, address and telephone", 4000);
  } else {
    Materialize.toast("Your order has been submitted", 4000);
  }
  event.preventDefault();
});
