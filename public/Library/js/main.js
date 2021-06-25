// Init for Jquery
$(document).ready(function() {
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
}); 

$(document).ready(function() {    
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
}); 

$(document).ready(function() {    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });
}); 

$(document).ready(function() {    
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
}); 

$(document).ready(function() {        
    // Modal Add & Edit 
    // Add Modal
    $('.addData').on('click', function () {
        $('#modal-type').removeClass("modal-xl").addClass("modal-lg");
        $('#formModalLabel').html('Tambah Data Mahasiswa Baru');
        $('#formMHS').attr('action', 'http://localhost:8080/penerimaan_mhs/public/home/addData');
        $('#buttonData').addClass("btn-primary").removeClass("btn-danger").html('Tambah Data').attr('disabled', 'disabled');
        $('#extendedData').removeClass("d").addClass("d-none");
        $('#standardData').removeClass("d-none").addClass("d");
        
        $('#hiddenID').attr('required', 'required');

        $('#inputName1').attr('required', 'required');
        $('#inputDepartment1').attr('required', 'required');
        $('#inputRegistType').attr('required', 'required');
        $('#inputGenderType').attr('required', 'required');
        $('#inputReligion1').attr('required', 'required');
        $('#inputAddress1').attr('required', 'required');
        $('#inputPhone1').attr('required', 'required');
        $('#inputEmail1').attr('required', 'required');
        $('#inputPassword1').attr('required', 'required');
        $('#inputPassword2').removeAttr('disabled', 'disabled').attr('required', 'required');
        
        $('#inputCheckRePassword1').attr('disabled', 'disabled');
        $('#formCheckRePassword1').addClass('d-none').removeClass('d');
        
        $('#inputSemester1').removeAttr('required', 'required');
        $('#inputNPM1').removeAttr('required', 'required');
        $('#inputDate1').removeAttr('required', 'required');
        $('#inputUsername1').removeAttr('required', 'required');
        //$('#inputPhoto1').removeAttr('required', 'required');
        $('.checkStatues').removeAttr('required', 'required');
        $('#inputDO1').removeAttr('required', 'required');
        $('#inputDO2').removeAttr('required', 'required');
        $('#forValidate').removeClass("d-block").addClass("d-none");
        $('#hiddenID').addClass("d");
        
        $('#hiddenID').val('');
        $('#inputNPM1').val('');
        $('#inputName1').val('');
        $('#inputDepartment1').val('Pilih Jurusan');
        $('#inputRegistType').val('Pilih Tipe');
        $('#inputDate1').val('');
        $('#inputGenderType').val('Pilih Kelamin');
        $('#inputReligion1').val('Pilih Agama');
        $('#inputAddress1').val('');
        $('#inputPhone1').val('');
        $('#inputEmail1').val('');
        //$('#inputPhoto1').val('');
        $('#inputUsername1').val('');
        $('#inputPassword1').val('');
        $('#inputPassword2').val('');
        $('#inputSemester1').val('');

        $('#inputCheckAgreement1').change(function() {
            if ($('#inputCheckAgreement1:checked').length > 0) {
                $('#buttonData').removeAttr('disabled', 'disabled');
            } else {
                $('#buttonData').attr('disabled', 'disabled');
            }
        });
    });
}); 

$(document).ready(function() {        
    // Edit Modal
    $('.editData').on('click', function () {
        $('#modal-type').removeClass("modal-lg").addClass("modal-xl");
        $('#formModalLabel').html('Edit Mahasiswa - ');
        $('#buttonData').addClass("btn-primary").removeClass("btn-danger").html('Edit Data').attr('disabled', 'disabled');
        $('#formMHS').attr('action', 'http://localhost:8080/penerimaan_mhs/public/home/updateData')
        $('#extendedData').removeClass("d-none").addClass("d");
        $('#standardData').removeClass("d-none").addClass("d");
        $('#forValidate').removeClass("d-block").addClass("d-none");
        $('#hiddenID').addClass("d");
        $('#inputCheckRePassword1').removeAttr('disabled', 'disabled');
        $('#formCheckRePassword1').addClass('d').removeClass('d-none');
        
        $('#hiddenID').attr('required', 'required');
        $('#inputNPM1').attr('required', 'required');
        $('#inputName1').attr('required', 'required');
        $('#inputDepartment1').attr('required', 'required');
        $('#inputRegistType').attr('required', 'required');
        $('#inputDate1').attr('required', 'required');
        $('#inputGenderType').attr('required', 'required');
        $('#inputReligion1').attr('required', 'required');
        $('#inputAddress1').attr('required', 'required');
        $('#inputPhone1').attr('required', 'required');
        $('#inputEmail1').attr('required', 'required');
        //$('#inputPhoto1').attr('required', 'required');
        $('#inputUsername1').attr('required', 'required');
        $('#inputPassword1').attr('required', 'required');
        $('#inputPassword2').attr('disabled', 'disabled').removeAttr('required', 'required');
        $('#inputSemester1').attr('required', 'required');
        $('#inputDO1').attr('required', 'required');
        $('#inputDO2').attr('required', 'required');
        //$('.checkStatues').val('');
        
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
                $('#inputSemester1').val(data.SEMESTER_MAHASISWA);
                $('#inputDate1').val(data.TTL_MAHASISWA);
                $('#inputGenderType').val(data.JK_MAHASISWA);
                $('#inputReligion1').val(data.AGAMA_MAHASISWA);
                $('#inputAddress1').val(data.ALAMAT_MAHASISWA);
                $('#inputPhone1').val(data.NHP_MAHASISWA);
                $('#inputEmail1').val(data.EMAIL_MAHASISWA);
                //$('#inputPhoto1').val(data.FOTO_MAHASISWA);
                $('#inputUsername1').val(data.USERNAME_MAHASISWA);
                $('#inputPassword1').val(data.PASSWORD_MAHASISWA);
                //$('#inputDO1').val(data.DO_MAHASISWA);
                //$('#inputDO2').val(data.DO_MAHASISWA);
                $('.checkStatues').checked().val(data.STATUS_MAHASISWA);
                
                /* var checkStatues = data.STATUS_MAHASISWA;
                var splittedStatues = checkStatues.split(",");
                
                for (var i = 0; i < splittedStatues.length; i++) {
                    $('.checkStatues').filter(function () {
                        $('.checkStatues').attr("value") === splittedStatues;
                    }).attr('checked', 'checked');
                    
                } */
                // Bug for this version. please add the array splittedStatues[$var].
            }
        });
        
        $('#inputCheckRePassword1').change(function() {
            if ($('#inputCheckRePassword1:checked').length > 0) {
                $('#inputPassword2').removeAttr('disabled', 'disabled').attr('required', 'required');
            } else {
                $('#inputPassword2').removeAttr('required', 'required').attr('disabled', 'disabled');
            }
        });
        
        $('#inputSemester1').on('input', function () {
            $('#detailSemester1').html('Semester Mahasiswa: ' + $('#inputSemester1').val());
        });
        
        $('#inputCheckAgreement1').change(function() {
            if ($('#inputCheckAgreement1:checked').length > 0) {
                $('#buttonData').removeAttr('disabled', 'disabled');
            } else {
                $('#buttonData').attr('disabled', 'disabled');
            }
        });
    });
}); 

$(document).ready(function() {       
    // Delete Modal
    $('.deleteData').on('click', function () {
        $('#modal-type').removeClass("modal-lg").removeClass("modal-xl");
        $('#formModalLabel').html('Hapus Mahasiswa - ');
        $('#buttonData').addClass("btn-danger").removeClass("btn-primary").html('Hapus Data').attr('disabled', 'disabled');
        $('#formMHS').attr('action', 'http://localhost:8080/penerimaan_mhs/public/home/deleteData')
        $('#extendedData').removeClass("d").addClass("d-none");
        $('#standardData').removeClass("d").addClass("d-none");
        $('#hiddenID').addClass("d").attr('required', 'required');
        
        $('#inputNPM1').removeAttr('required', 'required');
        $('#inputName1').removeAttr('required', 'required');
        $('#inputDepartment1').removeAttr('required', 'required');
        $('#inputRegistType').removeAttr('required', 'required');
        $('#inputDate1').removeAttr('required', 'required');
        $('#inputGenderType').removeAttr('required', 'required');
        $('#inputReligion1').removeAttr('required', 'required');
        $('#inputAddress1').removeAttr('required', 'required');
        $('#inputPhone1').removeAttr('required', 'required');
        $('#inputEmail1').removeAttr('required', 'required');
        //$('#inputPhoto1').removeAttr('required', 'required');
        $('#inputUsername1').removeAttr('required', 'required');
        $('#inputPassword1').removeAttr('required', 'required');
        $('#inputPassword2').removeAttr('required', 'required');
        $('.checkStatues').removeAttr('required', 'required');
        
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
                $('#forValidate').addClass("d-block").html('Hapus data ').append(data.NAMA_MAHASISWA).append('?');
                
                $('#inputCheckAgreement1').change(function() {
                    if ($('#inputCheckAgreement1:checked').length > 0) {
                        $('#buttonData').removeAttr('disabled', 'disabled');
                    } else {
                        $('#buttonData').attr('disabled', 'disabled');
                    }
                });
            }
        });
    });
}); 

$(document).ready(function() {       
    // Verify Inputs
    $("#inputNPM1").keyup(function () {
        if ($("#inputNPM1").val()) {
            $("#inputNPM1").removeClass("is-invalid");
            $("#inputNPM1").addClass("is-valid");
        }
        else {
            $("#inputNPM1").removeClass("is-valid");
            $("#inputNPM1").addClass("is-invalid");
        }
    });
    $("#inputName1").keyup(function () {
        if ($("#inputName1").val()) {
            $("#inputName1").removeClass("is-invalid");
            $("#inputName1").addClass("is-valid");
        }
        else {
            $("#inputName1").removeClass("is-valid");
            $("#inputName1").addClass("is-invalid");
        }
    });
    $("#inputDepartment1").keyup(function () {
        if ($("#inputDepartment1").val()) {
            $("#inputDepartment1").removeClass("is-invalid");
            $("#inputDepartment1").addClass("is-valid");
        }
        else {
            $("#inputDepartment1").removeClass("is-valid");
            $("#inputDepartment1").addClass("is-invalid");
        }
    }); 
    $("#inputRegistType").keyup(function () {
        if ($("#inputRegistType").val()) {
            $("#inputRegistType").removeClass("is-invalid");
            $("#inputRegistType").addClass("is-valid");
        }
        else {
            $("#inputRegistType").removeClass("is-valid");
            $("#inputRegistType").addClass("is-invalid");
        }
    });
    $("#inputDate1").keyup(function () {
        if ($("#inputDate1").val()) {
            $("#inputDate1").removeClass("is-invalid");
            $("#inputDate1").addClass("is-valid");
        }
        else {
            $("#inputDate1").removeClass("is-valid");
            $("#inputDate1").addClass("is-invalid");
        }
    });
    $("#inputGenderType").keyup(function () {
        if ($("#inputGenderType").val()) {
            $("#inputGenderType").removeClass("is-invalid");
            $("#inputGenderType").addClass("is-valid");
        }
        else {
            $("#inputGenderType").removeClass("is-valid");
            $("#inputGenderType").addClass("is-invalid");
        }
    });
    $("#inputReligion1").keyup(function () {
        if ($("#inputReligion1").val()) {
            $("#inputReligion1").removeClass("is-invalid");
            $("#inputReligion1").addClass("is-valid");
        }
        else {
            $("#inputReligion1").removeClass("is-valid");
            $("#inputReligion1").addClass("is-invalid");
        }
    });
    $("#inputAddress1").keyup(function () {
        if ($("#inputAddress1").val()) {
            $("#inputAddress1").removeClass("is-invalid");
            $("#inputAddress1").addClass("is-valid");
        }
        else {
            $("#inputAddress1").removeClass("is-valid");
            $("#inputAddress1").addClass("is-invalid");
        }
    });
    $("#inputPhone1").keyup(function () {
        if ($("#inputPhone1").val()) {
            $("#inputPhone1").removeClass("is-invalid");
            $("#inputPhone1").addClass("is-valid");
        }
        else {
            $("#inputPhone1").removeClass("is-valid");
            $("#inputPhone1").addClass("is-invalid");
        }
    });
    $("#inputEmail1").keyup(function () {
        if ($("#inputEmail1").val()) {
            $("#inputEmail1").removeClass("is-invalid");
            $("#inputEmail1").addClass("is-valid");
        }
        else {
            $("#inputEmail1").removeClass("is-valid");
            $("#inputEmail1").addClass("is-invalid");
        }
    });
    $("#inputPhoto1").keyup(function () {
        if ($("#inputPhoto1").val()) {
            $("#inputPhoto1").removeClass("is-invalid");
            $("#inputPhoto1").addClass("is-valid");
        }
        else {
            $("#inputPhoto1").removeClass("is-valid");
            $("#inputPhoto1").addClass("is-invalid");
        }
    });
    $("#inputUsername1").keyup(function () {
        if ($("#inputUsername1").val()) {
            $("#inputUsername1").removeClass("is-invalid");
            $("#inputUsername1").addClass("is-valid");
        }
        else {
            $("#inputUsername1").removeClass("is-valid");
            $("#inputUsername1").addClass("is-invalid");
        }
    });

    // checkStatues1
}); 

$(document).ready(function() {    
    // Agreement Checkbox
    enabledCheck = document.getElementById('customCheck1').checked;
    if(enabledCheck){
        document.getElementById('submit_all').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit_all').setAttribute('disabled');
    }; 
}); 

$(document).ready(function() {        
    // Library Module
    // Waves
    Waves.init();
    Waves.attach('.btn', ['waves-float']);
    Waves.attach('.card', ['waves-float']);
    Waves.attach('.img-fluid', ['waves-float']);
    Waves.attach('.toast', ['waves-float']);
}); 

$(document).ready(function() {    
    // Toats
    if($('.toast')) {
        $('.toast').toast('show');
    }
    else {
        $('.toast').toast('hide');
    }
}); 

$(document).ready(function() {    
    // Wow
    new WOW().init();
}); // End of use strict

$(document).ready(function() {
    // dataTables
    $('#dataTable').DataTable();
}); 

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

