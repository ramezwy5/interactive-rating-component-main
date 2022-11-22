const rate = $(".rate");
const submitBtn = $(".submit");
const selected = $(".rate-select");
const rateStart = $(".rate-start");
const thank = $(".thank");

function submit(event){
    if(!event){
        alert("Please choose how many stars.");
    }else{
        submitBtn.click( function(){
            thank.removeClass("visual");
            rateStart.addClass("visual");
            rateNumber(event);
        })
    }
}

for (let r of rate){
    console.log(r);
    r.addEventListener("click",function(){
        const rateInnerHtml = this.value;
        submit(rateInnerHtml);
    });
}

//get rate select number.

function rateNumber(key){
    selected[0].innerHTML ="You selected " + key + " out of 5";
}