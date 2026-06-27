// Card Hover Effect
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 20px #00e5ff";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

// Password Strength Checker
function checkPassword() {

    let password = document.getElementById("password");

    if(!password) return;

    let value = password.value;

    let score = 0;

    let tips = [];

    if(value.length >= 8){
        score++;
    }else{
        tips.push("✔ Use at least 8 characters");
    }

    if(/[A-Z]/.test(value)){
        score++;
    }else{
        tips.push("✔ Add an uppercase letter");
    }

    if(/[a-z]/.test(value)){
        score++;
    }else{
        tips.push("✔ Add a lowercase letter");
    }

    if(/[0-9]/.test(value)){
        score++;
    }else{
        tips.push("✔ Add a number");
    }

    if(/[!@#$%^&*(),.?\":{}|<>]/.test(value)){
        score++;
    }else{
        tips.push("✔ Add a special character");
    }

    let progress = document.getElementById("progress");
    let result = document.getElementById("result");
    let suggestion = document.getElementById("tips");

    progress.style.width = (score * 20) + "%";

    if(score <= 2){

        progress.style.background = "red";
        result.innerHTML = "❌ Weak Password";

    }
    else if(score == 3 || score == 4){

        progress.style.background = "orange";
        result.innerHTML = "⚠ Medium Password";

    }
    else{

        progress.style.background = "limegreen";
        result.innerHTML = "✅ Strong Password";

    }

    suggestion.innerHTML = "";

    if(tips.length > 0){

        suggestion.innerHTML =
        "<b>Suggestions:</b><br>" +
        tips.join("<br>");

    }
    else{

        suggestion.innerHTML =
        "🎉 Excellent! Your password follows good security practices.";

    }

}
// ===============================
// Fraud Link Detector
// ===============================

function detectLink(){

let urlInput = document.getElementById("url");

if(!urlInput) return;

let url = urlInput.value.trim().toLowerCase();

let risk = 0;

let reasons = [];

// Empty Input
if(url===""){
document.getElementById("output").innerHTML="❌ Please enter a URL.";
document.getElementById("reason").innerHTML="";
return;
}

// HTTPS Check
if(!url.startsWith("https://")){
risk+=30;
reasons.push("❌ Website is not using HTTPS.");
}
else{
reasons.push("✅ Secure HTTPS connection detected.");
}

// Long URL
if(url.length>50){
risk+=20;
reasons.push("⚠️ URL is unusually long.");
}

// IP Address Check
if(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/.test(url)){
risk+=30;
reasons.push("⚠️ URL contains an IP address.");
}

// Suspicious Keywords
const suspiciousWords=[
"login",
"verify",
"secure",
"update",
"bank",
"account",
"paypal",
"free",
"gift",
"win",
"bonus",
"confirm"
];

suspiciousWords.forEach(word=>{
if(url.includes(word)){
risk+=8;
reasons.push("⚠️ Suspicious keyword found: "+word);
}
});

// Result
let output=document.getElementById("output");
let reason=document.getElementById("reason");
let bar=document.getElementById("riskBar");

bar.style.width=risk+"%";

if(risk<=20){

output.innerHTML="🟢 Low Risk ("+risk+"%)";

output.style.color="limegreen";

bar.style.background="limegreen";

}

else if(risk<=50){

output.innerHTML="🟡 Medium Risk ("+risk+"%)";

output.style.color="orange";

bar.style.background="orange";

}

else{

output.innerHTML="🔴 High Risk ("+risk+"%)";

output.style.color="red";

bar.style.background="red";

}

reason.innerHTML=
"<br><b>Analysis Report</b><br><br>"+
reasons.join("<br>");
}

// ===============================
// Cyber Security Quiz
// ===============================

function calculateQuiz(){

let score = 0;

let answers = document.querySelectorAll('input[type="radio"]:checked');

answers.forEach(answer=>{
score += Number(answer.value);
});

let result = document.getElementById("score");

if(score==3){

result.innerHTML="🏆 Excellent! 3/3<br>You have strong cybersecurity knowledge.";

result.style.color="limegreen";

}

else if(score==2){

result.innerHTML="👍 Good! 2/3<br>You know the basics.";

result.style.color="orange";

}

else{

result.innerHTML="📚 Keep Learning! "+score+"/3<br>Review cybersecurity tips and try again.";

result.style.color="red";

}

}

// Loading Screen

window.onload=function(){

let loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.display="none";

},1500);

}

}

// ===== Theme Toggle =====

function toggleTheme(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

document.getElementById("themeBtn").innerHTML="☀️";

}
else{

localStorage.setItem("theme","dark");

document.getElementById("themeBtn").innerHTML="🌙";

}

}

window.addEventListener("load",()=>{

let savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

let btn=document.getElementById("themeBtn");

if(btn){

btn.innerHTML="☀️";

}

}

});

window.onscroll=function(){

let btn=document.getElementById("topBtn");

if(btn){

if(document.documentElement.scrollTop>200){

btn.style.display="block";

}

else{

btn.style.display="none";

}

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
