var myForm = document.getElementById('form');
var input = document.getElementById('inp');
var result = document.getElementById('result');

myForm.addEventListener('submit', function(e){
  e.preventDefault();
  var userInput = input.value;
  result.innerHTML = '<h2 style="color: green">'+ romanize(userInput) + '</h2>';
});

function romanize (input) {
    if (isNaN(input))
        return NaN;
    var digits = String(+input).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}