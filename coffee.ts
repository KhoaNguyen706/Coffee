
const esp_cost:number= 5.25;
const colum_cost:number= 5.50;
const haze_cost:number=5.15;
const vanilla_cost:number=5.35;
const house_blend:number=4.95;
const select_blend = document.getElementById("choose_coffee") as HTMLSelectElement;
const number_bags = document.getElementById("numbag") as HTMLInputElement;
const calculate = document.getElementById("caculate");
const prediscount = document.getElementById("prediscount")
const discount_text = document.getElementById("discount");
calculate!.addEventListener("click",()=>{
    const input_bag=parseFloat(number_bags.value);
    const blend :string= select_blend.value;
    let Blend_cost:number=0
    if(blend=="Espresso"){
        Blend_cost=esp_cost;
    }else if(blend=="Columbia"){
        Blend_cost=colum_cost;
    }else if(blend=="Vanilla"){
        Blend_cost=vanilla_cost;
    }else if(blend=="Hazelnut"){
        Blend_cost=haze_cost;
    }else{
        Blend_cost=house_blend;
    }
    if (!isNaN(input_bag) && input_bag > 0) {
        const cost = (Blend_cost * input_bag).toFixed(2);
        display_test(blend,cost,input_bag,Blend_cost);
        calculate_discount(cost,input_bag);
    }
})
function display_test(blend,cost,input_bag,Blend_cost):void{
    prediscount!.innerHTML=`
    <h1>Pre-Discount</h1>
    <h3>Blend :${blend}</h3>
    <h3>Number of Bags ordered: ${input_bag}</h3>
    <h3>Bag price :$${Blend_cost}</h3>
    <h3>Total cost :$${cost}</h3>`
    
}
function calculate_discount(cost,input_bag):void{
let discount =0;
if(input_bag>300){
    discount=0.3;
}else if(input_bag>100){
    discount=0.15;
}else if(input_bag>50){
    discount=0.1;
}else if(input_bag>25){
    discount=0.05;
}
let saving =  (cost*discount).toFixed(2);
let discounted_cost = (cost-cost*discount).toFixed(2);
discount_text!.innerHTML=`
        <h1>Discount</h1>
        <h3>Discound :${discount*100}%</h3>
        <h3>Savings :$${saving}</h3>
        <h3>Discounted Cost:$${discounted_cost}</h3>`

}
