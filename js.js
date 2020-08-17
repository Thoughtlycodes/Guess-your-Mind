var firstN;
console.log();
function main()
{
    var val=document.getElementById("value").value;
    firstN = document.getElementById("value").value;
    var sum=0;
    
        for(var i=0;val!=0;i++)
        {
            var digit=val%10;
            var sum=sum+digit;
            val=(val-digit)/10;
        }
        var num=sum%9;
        num=9-num;
        if(num==0 || num==9)
        {
            num=9;
        }
        document.getElementById('result').style.display="unset";
        document.getElementById("predic").innerHTML=num;
        document.getElementById('work').style.display="none";

       
}
function copy()
{
    document.getElementById("value").value=calculator.answer.value;
}




function reloadAndSubmit(){
    document.getElementById("hideValue").value = firstN;
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyTNkUfGSaQ8LNsyJZkfraEdECNeJwUJWJ3sxvg5terAkfq0q4/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            // alert("Form submitted successfully");
            window.location.reload();
        },
        error:function (err){
          window.location.href="failure.html";

        }
    })
}