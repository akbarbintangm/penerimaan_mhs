// Init for Jquery
(function($) {
    "use strict"; // Start of use strict  
    // Back to Top or Scroll to() Script
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });
    
})(jQuery); // End of use strict

document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');
    btn_height = document.querySelector('.btnnext').offsetHeight;
    document.body.style.paddingTop = btn_height + 'px';
    if(el_autohide){
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top > last_scroll_top) {
                el_autohide.classList.remove('d-inline', 'animate__fadeIn');
                el_autohide.classList.add('d-none', 'animate__fadeOut');
            }
            else {
                el_autohide.classList.remove('d-none', 'animate__fadeOut');
                el_autohide.classList.add('d-inline', 'animate__fadeIn');
            }
            last_scroll_top = scroll_top;
        }); 
        // window.addEventListener
    }
    
    el_autohide2 = document.querySelector('.scrollto');
    btn_height2 = document.querySelector('.btnup').offsetHeight;
    document.body.style.paddingTop = btn_height + 'px';
    if(el_autohide2){
        var last_scroll_top3 = 600;
        window.addEventListener('scroll', function() {
            let scroll_top3 = window.scrollY;
            if(scroll_top3 > last_scroll_top3) {
                el_autohide2.classList.remove('d-none', 'animate__fadeOut');
                el_autohide2.classList.add('d-inline', 'animate__fadeIn');
            }
            else {
                el_autohide2.classList.remove('d-inline', 'animate__fadeIn');
                el_autohide2.classList.add('d-none', 'animate__fadeOut');
            }
            last_scroll_top3 = scroll_top3
        }); 
        // window.addEventListener
    }
    
    el_autocolor = document.querySelector('.select-navbar');
    navbar_height = document.querySelector('.btnnext').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
    if(el_autocolor){
        var last_scroll_top2 = 600;
        window.addEventListener('scroll', function() {
            let scroll_top2 = window.scrollY;
            if(scroll_top2 > last_scroll_top2) {
                el_autocolor.classList.remove('navbar-light', 'bg-light', 'text-dark');
                el_autocolor.classList.add('navbar-dark', 'bg-dark', 'text-light');
            }
            else {
                el_autocolor.classList.add('navbar-light', 'bg-light', 'text-dark');
                el_autocolor.classList.remove('navbar-dark', 'bg-dark', 'text-light');
            }
            last_scroll_top = scroll_top;
        }); 
        // window.addEventListener
    }
    
    
}); 
// DOMContentLoaded  end

// verify password
$(document).ready(function(){
    $("#inputPassword2").keyup(function () {
        if ($("#inputPassword1").val() == $("#inputPassword2").val()) {
            $("#inputPassword1").removeClass("is-invalid");
            $("#inputPassword2").removeClass("is-invalid");
            
            $("#inputPassword1").addClass("is-valid");
            $("#inputPassword2").addClass("is-valid");
        }
        else if ($("#inputPassword1").val() != $("#inputPassword2").val()) {
            $("#inputPassword1").removeClass("is-valid");
            $("#inputPassword2").removeClass("is-valid");
            
            $("#inputPassword1").addClass("is-invalid");
            $("#inputPassword2").addClass("is-invalid");
        }
    });
});

// Checkbox
function clickCheckbox() {
    enabledCheck = document.getElementById('customCheck1').checked;
    if(enabledCheck){
        document.getElementById('submit_all').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit_all').setAttribute('disabled');
    }; 
}

$(function () {
    // Add Modal
    $('#addData').on('click', function () {
        $('#formModalLabel').html('Tambah Data Mahasiswa Baru');
        $('#buttonData').html('Tambah Data');
        
        $('#inputName1').val('');
        $('#inputEmail1').val('');
        $('#inputPhone1').val('');
        $('#inputAddress1').val('');
        $('#inputDepartment1').val('Pilih Jurusan');
        $('#inputRegistType').val('Pilih Tipe');
        $('#inputGenderType').val('Pilih Kelamin');
        $('#inputPassword1').val('');
        $('#inputReligion1').val('Piih Agama');
    });
    
    // Edit Modal
    $('#editData').on('click', function () {
        $('#formModalLabel').html('Edit Data Mahasiswa');
        $('#buttonData').html('Edit Data');
        $('#formMHS').attr('action', 'http://localhost:8080/penerimaan_mhs/public/home/updateData')
        
        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost:8080/penerimaan_mhs/public/home/getInfoData',
            data: {ID_MAHASISWA : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#hiddenID').val(data.ID_MAHASISWA);
                $('#inputName1').val(data.NAMA_MAHASISWA);
                $('#inputEmail1').val(data.EMAIL_MAHASISWA);
                $('#inputPhone1').val(data.NHP_MAHASISWA);
                $('#inputAddress1').val(data.ALAMAT_MAHASISWA);
                $('#inputDepartment1').val(data.JURUSAN_MAHASISWA);
                $('#inputRegistType').val(data.TIPE_MAHASISWA);
                $('#inputGenderType').val(data.JK_MAHASISWA);
                $('#inputReligion1').val(data.AGAMA_MAHASISWA);
                $('#inputPassword1').val(data.PASSWORD_MAHASISWA);
            }
        });
    });
});

// Waves
Waves.init();
Waves.attach('.btn', ['waves-float']); 
Waves.attach('.card', ['waves-float']); 
Waves.attach('.img-fluid', ['waves-float']); 
Waves.attach('.toast', ['waves-float']); 

// Toasts
$(document).ready(function(){
    if($('.toast')) {
        $('.toast').toast('show');
    }
    else {
        $('.toast').toast('hide');
    }
});

// Wow
new WOW().init();