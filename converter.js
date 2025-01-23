var fromcurrency = document.getElementById("fcurr");
var tocurrency = document.getElementById("tcurr"); 
var convertbtn = document.getElementById("convertbtn");
fetch("https://v6.exchangerate-api.com/v6/9be2c4580170c30c9849753c/latest/USD")
.then(response => (response.json()))
.then(data =>{
    var rates = Object.entries(data.conversion_rates)
    for(let i=0;i<rates.length;i++){
        var option = document.createElement("option");
        option.value = rates[i][0]
        option.text = rates[i][0]
        fromcurrency.add(option)
    }
    for(let i=0;i<rates.length;i++){
        var option = document.createElement("option");
        option.value = rates[i][0]
        option.text = rates[i][0]
        tocurrency.add(option)
    }
})
var amount = document.getElementById("amount")
var cbtn = document.getElementById("convertbtn");
cbtn.addEventListener("click",convert);
convertBtn.addEventListener("click", () => {
    convertBtn.classList.add("bounce");
    setTimeout(() => {
        convertBtn.classList.remove("bounce");
    }, 300); 
});

function convert(){
    if(fromcurrency.value == tocurrency.value){
        alert("You are choosing same currency!")
    }
    else{
        var Fcurrency = fromcurrency.value
        var Tocurrency = tocurrency.value
        var Amount  = amount.value 
        console.log(Fcurrency+" "+Tocurrency+" "+Amount) 
        fetch(`https://v6.exchangerate-api.com/v6/9be2c4580170c30c9849753c/pair/${Fcurrency}/${Tocurrency}/${Amount}`)
        .then(res => res.json())
        .then(data =>{
            var result = data.conversion_result
            var resamount = document.getElementById("resamount")

            if(resamount.value != result){
                    prevc = resamount.style.backgroundColor = colorchoice()  
            }
            resamount.value = result
            function colorchoice(){
                const color_list = ["#77B254","#D2665A","#A94A4A","#48A6A7","#574964","#FCC6FF","#09122C","#872341","#4635B1","#727D73","#754E1A"]
                var color = Math.floor(Math.random() * 10)
                return color_list[color];
            }
        })
        
    }
    
}


