$(window).on('load', function () {
  var I = 10;
  var O = 10;

  var getT = function (str) {
    var res = 10;
    switch (str) {
      case '二进制':
        res = 2;
        break;
      case '八进制':
        res = 8;
        break;
      case '十进制':
        res = 10;
        break;
      case '十六进制':
        res = 16;
        break;
    }
    return res;
  }

  $('.input_list li a').on('click', function () {
    var inputType = $(this).html();
    $('.input_btn').html(inputType);
    I = getT(inputType);
  });
  $('.output_list li a').on('click', function () {
    var outputType = $(this).html();
    $('.output_btn').html(outputType);
    O = getT(outputType);
  });

  $('.conversion_btn').on('click', function () {
    var inputValue = $('.input_text')[0].value;
    if (inputValue === 0 || inputValue) {
      var iv = parseInt(inputValue, I);
      $('.output_text')[0].value = iv.toString(O);
    }
  });
});
