var esp_cost = 5.25;
var colum_cost = 5.50;
var haze_cost = 5.15;
var vanilla_cost = 5.35;
var house_blend = 4.95;
var select_blend = document.getElementById("choose_coffee");
var number_bags = document.getElementById("numbag");
var calculate = document.getElementById("caculate");
var prediscount = document.getElementById("prediscount");
var discount_text = document.getElementById("discount");
calculate.addEventListener("click", function () {
    var input_bag = parseFloat(number_bags.value);
    var blend = select_blend.value;
    var Blend_cost = 0;
    if (blend == "Espresso") {
        Blend_cost = esp_cost;
    }
    else if (blend == "Columbia") {
        Blend_cost = colum_cost;
    }
    else if (blend == "Vanilla") {
        Blend_cost = vanilla_cost;
    }
    else if (blend == "Hazelnut") {
        Blend_cost = haze_cost;
    }
    else {
        Blend_cost = house_blend;
    }
    if (!isNaN(input_bag) && input_bag > 0) {
        var cost = (Blend_cost * input_bag).toFixed(2);
        display_test(blend, cost, input_bag, Blend_cost);
        calculate_discount(cost, input_bag);
    }
});
function display_test(blend, cost, input_bag, Blend_cost) {
    prediscount.innerHTML = "\n    <h1>Pre-Discount</h1>\n    <h3>Blend :".concat(blend, "</h3>\n    <h3>Number of Bags ordered: ").concat(input_bag, "</h3>\n    <h3>Bag price :$").concat(Blend_cost, "</h3>\n    <h3>Total cost :$").concat(cost, "</h3>");
}
function calculate_discount(cost, input_bag) {
    var discount = 0;
    if (input_bag > 300) {
        discount = 0.3;
    }
    else if (input_bag > 100) {
        discount = 0.15;
    }
    else if (input_bag > 50) {
        discount = 0.1;
    }
    else if (input_bag > 25) {
        discount = 0.05;
    }
    var saving = (cost * discount).toFixed(2);
    var discounted_cost = (cost - cost * discount).toFixed(2);
    discount_text.innerHTML = "\n        <h1>Discount</h1>\n        <h3>Discound :".concat(discount * 100, "%</h3>\n        <h3>Savings :$").concat(saving, "</h3>\n        <h3>Discounted Cost:$").concat(discounted_cost, "</h3>");
}
