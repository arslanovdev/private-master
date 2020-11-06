document.addEventListener("DOMContentLoaded", function() {

    let headerBurger = document.getElementById('burger-head');

    headerBurger.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.links').classList.toggle('active');
    }, false);
});

$(document).ready(function() {
    let input = document.querySelector('#phoneInput');

    Inputmask({
        "mask": "+7 (999) 999-99-99",
        showMaskOnHover: true
    }).mask(input);


    $('#leadForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'send.php',
            data: $(this).serialize(),
            success: function(response)
            {
                $("#leadModal").modal('hide');
                alert('Заявка отправлена!');
            }
        });
    });

    $('.banners').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    focusOnSelect: true,
                    centerMode: true,
                }
            }
        ]
    });
});