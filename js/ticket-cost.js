function calculateCost() {
    var movie = document.getElementById("location").value;
    var name = document.getElementById("email").value;
    var Cquantity = document.getElementById("Cquantity").value * 1;
    var Aquantity = document.getElementById("Aquantity").value * 1;
    var total = 0;
    var sentence = "";
    var price = document.getElementById('child').value * Cquantity;

    sentence += name + "<br>purchased " + Cquantity + " Child ticket(s) to \"";
    sentence += movie + "\" for $";
    sentence += price;
    total += price;

    var price = document.getElementById('adult').value * Aquantity;
    sentence += "<br>and " + Aquantity + " Adult ticket(s) to \"";
    sentence += movie + " for $";
    sentence += price + '<br>';
    total += price;

    sentence += "<br>";
    sentence += 'Total cost: $' + total;
    document.getElementById("inserts").innerHTML += sentence;

}