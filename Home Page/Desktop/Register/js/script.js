function myFunction() {
    var x = document.getElementById("myInput")
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var ValidateModule = (function() {
    //set module vars
    var result = $('result');
    var btn = $('demo');

    return {
        bindUiActions: function() {
            btn.click(function() {
                var input = $('#number').val();
                ValidateModule.validatePhoneNumber(number);
            });
        },
        validatePhoneNumber: function(number) {
            var regex = /1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/;

            //result.html(regex.test(input));
            if(number.match(regex)) {
                result.html("<p> Correct </p>");
            }   else {
                result.html("<p> Incorrect </p>");
            }
        }
    }
})();
ValidateModule.bindUiActions();