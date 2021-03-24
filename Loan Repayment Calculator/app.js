document.getElementById("submit").addEventListener("click", calculateResults);

function calculateResults(e){
    const amount = document.getElementById('amount').value
    const interest = document.getElementById('interest').value
    const months = document.getElementById('months').value

    const principal = parseFloat(amount);
    const CalculateInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(months);
  
    //Calculate monthly Payment
  
    const x = Math.pow(1 + CalculateInterest, calculatedPayments);
    const monthly = (principal * x * CalculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);
  
    //Calculate Interest
  
    const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

    //Calculate Total Payment
  
    const totalPayment = (monthly * calculatedPayments).toFixed(2);
   

    document.getElementById("monthlyPayment").innerHTML = "£" + monthlyPayment;

    document.getElementById("totalInterest").innerHTML = "£" + totalInterest;
  
    document.getElementById("finalamount").innerHTML = "£" + totalPayment;

    e.preventDefault();

}