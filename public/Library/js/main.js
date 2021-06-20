// Init for Jquery
$(document).ready(function($) {
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
    
    // Verify Password
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
    
    // Modal Add & Edit Data
    // Add Modal
    $('.addData').on('click', function () {
        $('#modal-type').removeClass("modal-xl");
        $('#modal-type').addClass("modal-lg");
        $('#formModalLabel').html('Tambah Data Mahasiswa Baru');
        $('#formMHS').attr('action', 'http://localhost:8080/penerimaan_mhs/public/home/addData')
        $('#buttonData').html('Tambah Data');
        $('#extendedData').removeClass("d-block");
        $('#extendedData').addClass("d-none");
        $('#standardData').removeClass("d-none");
        $('#inputNPM1').removeAttr('required', 'required');
        $('#inputDate1').removeAttr('required', 'required');
        $('#inputUsername1').removeAttr('required', 'required');
        $('#inputPhoto1').removeAttr('required', 'required');
        $('.checkStatues').removeAttr('required', 'required');
        
        
        $('#inputName1').val('');
        $('#inputEmail1').val('');
        $('#inputPhone1').val('');
        $('#inputAddress1').val('');
        $('#inputDepartment1').val('Pilih Jurusan');
        $('#inputRegistType').val('Pilih Tipe');
        $('#inputGenderType').val('Pilih Kelamin');
        $('#inputPassword1').val('');
        $('#inputReligion1').val('Pilih Agama');
    });
    
    // Edit Modal
    $('.editData').on('click', function () {
        $('#modal-type').removeClass("modal-lg");
        $('#modal-type').addClass("modal-xl");
        $('#formModalLabel').html('Edit Mahasiswa - ');
        $('#buttonData').html('Edit Data');
        $('#formMHS').attr('action', 'http://localhost:8080/penerimaan_mhs/public/home/updateData')
        $('#extendedData').removeClass("d-none");
        $('#extendedData').addClass("d-block");
        $('#standardData').removeClass("d-none");
        $('#inputNPM1').Attr('required', 'required');
        $('#inputDate1').Attr('required', 'required');
        $('#inputUsername1').Attr('required', 'required');
        $('#inputPhoto1').Attr('required', 'required');
        $('.checkStatues').Attr('required', 'required');
        
        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost:8080/penerimaan_mhs/public/home/getInfoData',
            data: {ID_MAHASISWA : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                if(data.NPM_MAHASISWA == null) {
                    $('#formModalLabel').append('Tidak Ada NPM');
                }
                else {
                    $('#formModalLabel').append(data.NPM_MAHASISWA);
                }
                
                $('#formModalLabel').append(' / ');
                $('#formModalLabel').append(data.NAMA_MAHASISWA);
                
                $('#hiddenID').val(data.ID_MAHASISWA);
                $('#inputNPM1').val(data.NPM_MAHASISWA);
                $('#inputName1').val(data.NAMA_MAHASISWA);
                $('#inputDepartment1').val(data.JURUSAN_MAHASISWA);
                $('#inputRegistType').val(data.TIPE_MAHASISWA);
                $('#inputDate1').val(data.TTL_MAHASISWA);
                $('#inputGenderType').val(data.JK_MAHASISWA);
                $('#inputReligion1').val(data.AGAMA_MAHASISWA);
                $('#inputAddress1').val(data.ALAMAT_MAHASISWA);
                $('#inputPhone1').val(data.NHP_MAHASISWA);
                $('#inputEmail1').val(data.EMAIL_MAHASISWA);
                $('#inputPhoto1').val(data.FOTO_MAHASISWA);
                $('#inputUsername1').val(data.USERNAME_MAHASISWA);
                $('#inputPassword1').val(data.PASSWORD_MAHASISWA);
                
                var checkStatues = data.STATUS_MAHASISWA;
                var splittedStatues = checkStatues.split(",");
                
                for (var i = 0; i < splittedStatues.length; i++) {
                    $('.checkStatues').filter(function () {
                        $('.checkStatues').attr("value") === splittedStatues;
                    }).attr('checked', 'checked');
                    
                }
                // Bug for this version.
            }
        });
    });
    
    // Delete Modal
    $('.deleteData').on('click', function () {
        $('#modal-type').removeClass("modal-lg").removeClass("modal-xl");
        $('#formModalLabel').html('Hapus Mahasiswa - ');
        $('#buttonData').addClass("btn-danger").removeClass("btn-primary").html('Hapus Data');
        $('#formMHS').attr('action', 'http://localhost:8080/penerimaan_mhs/public/home/deleteData')
        $('#extendedData').removeClass("d-none");
        $('#standardData').addClass("d-none");
        $('#hiddenID').addClass("d-block");
        
        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost:8080/penerimaan_mhs/public/home/getInfoData',
            data: {ID_MAHASISWA : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                if(data.NPM_MAHASISWA == null) {
                    $('#formModalLabel').append('Tidak Ada NPM');
                }
                else {
                    $('#formModalLabel').append(data.NPM_MAHASISWA);
                }
                
                $('#hiddenID').val(data.ID_MAHASISWA);
                $('.modal-body').html('Hapus data ').append(data.NAMA_MAHASISWA).append('?');
            }
        });
    });
    
    // Agreement Checkbox
    enabledCheck = document.getElementById('customCheck1').checked;
    if(enabledCheck){
        document.getElementById('submit_all').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit_all').setAttribute('disabled');
    }; 
    
    // Library Module
    // Waves
    Waves.init();
    Waves.attach('.btn', ['waves-float']);
    Waves.attach('.card', ['waves-float']);
    Waves.attach('.img-fluid', ['waves-float']);
    Waves.attach('.toast', ['waves-float']);
    // Toats
    if($('.toast')) {
        $('.toast').toast('show');
    }
    else {
        $('.toast').toast('hide');
    }
    // Wow
    new WOW().init();
}); // End of use strict

// AutoHide DOM
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
    }
}); 