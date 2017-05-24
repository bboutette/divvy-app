$(function(){
        var bal;
          console.log("hi")
          getDays();
        $('input').each(function() {
            $(this).keyup(function(){
                calculateTotal($(this));
            });
        });
    });

    function calculateTotal(src) {
        var sum = 0;
        var sumtable = src.closest('.sumtable');

        sumtable.find('input').each(function() {
            if(!isNaN(this.value) && this.value.length!=0) {
                sum += parseFloat(this.value);
            }
        });

        sumtable.find(".total").html(sum.toFixed(2));

        bal = $('input[name="amount"]').val();
        bal = bal - sum
        sumtable.find(".balance").html(bal.toFixed(2));
    }

    function getDays(){
    $( "#datepicker" ).datepicker({
     onSelect: function(date) {
       console.log(date)
       var goalDate = new Date(date);
       var today = new Date();
       var days = Math.round((goalDate-today)/(24*60*60*1000))
       console.log('days: ', days)

       var result = (bal / days)

       console.log('result: ', result)
    $(".finalResults").append("<p>You will need to save $"+result.toFixed(2)+" each day for " + days + " days to reach your goal!</p>");

    }
  })
}

 // console.log('result: ', result)
 // $(".finalResults").append("<p>You will need to save $"+result.toFixed(2)+" each day for " + days + " days to reach your goal!</p>");

