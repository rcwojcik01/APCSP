
$(document).ready(function () {
    $('#solarSystem').click(function () {
        
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }
        
        if ($('#planet1').hasClass('daySun')) {
            $('#planet1').removeClass('daySun').addClass('nightSun');
        } else {
            $('#planet1').removeClass('nightSun').addClass('daySun');
        }
        
        if ($('#planet2').hasClass('dayMercury')) {
            $('#planet2').removeClass('dayMercury').addClass('nightMercury');
        } else {
            $('#planet2').removeClass('nightMercury').addClass('dayMercury');
        }
        
        if ($('#planet3').hasClass('dayVenus')) {
            $('#planet3').removeClass('dayVenus').addClass('nightVenus');
        } else {
            $('#planet3').removeClass('nightVenus').addClass('dayVenus');
        }
        
        if ($('#planet4').hasClass('dayEarth')) {
            $('#planet4').removeClass('dayEarth').addClass('nightEarth');
        } else {
            $('#planet4').removeClass('nightEarth').addClass('dayEarth');
        }
        
        if ($('#planet5').hasClass('dayMars')) {
            $('#planet5').removeClass('dayMars').addClass('nightMars');
        } else {
            $('#planet5').removeClass('nightMars').addClass('dayMars');
        }
    });
});