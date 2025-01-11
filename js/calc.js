/* Source: https://codepen.io/SharpDesignCo/pen/eYPENvL */
$(document).ready(function () {
    $("#calculateButton").click(function () {
      const loanAmount = parseFloat($("#loanAmount").val());
      const loanTerm = parseInt($("#loanTerm").val());
      const incomeMonthly = parseInt($("#incomeMonthly").val());
      const interestRate =  0.045 /12 ;
  
      // Input validation
      if (isNaN(loanAmount) || loanAmount <= 0) {
        alert("Please enter a valid loan amount.");
        return;
      }
      if (isNaN(loanTerm) || loanTerm <= 0) {
        alert("Please enter a valid loan term in years.");
        return;
      }
      if (isNaN(incomeMonthly) || incomeMonthly <= 0) {
        alert("Please enter a valid monthly income.");
        return;
      }
  
      const loanTermMonths = loanTerm * 12;
      const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTermMonths)) / (Math.pow(1 + interestRate, loanTermMonths)-1);
      const payment = monthlyPayment *loanTermMonths
      const interest =  payment - loanAmount;
      const postIncome = incomeMonthly - payment;
      const eligible = monthlyPayment <= incomeMonthly * 0.3;
  
        $('#result').html(`
          <h2>Calculation Results</h2>
          <div style="font-weight:bold;">Loan ${eligible ? "Accepted" : "Denied"}!</div>
          <p>Monthly Payment: £${payment.toFixed(2)}</p>
          <p>Interest: £${interest.toFixed(2)}</p>
          <p>Post-Expense Income: £${postIncome.toFixed(2)}</p>
  
        `).addClass('show');
});
});
  