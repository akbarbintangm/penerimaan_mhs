<body class="animate__animated animate__fadeIn bg-light text-dark" id="top">     
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-lg text-left">
                <h3 class="font-weight-light" id="infoTable">Data Mahasiswa</h3>
                <label class="text-secondary" for="infoTable">Klik <i class="font-weight-bold">Edit</i> atau <i class="font-weight-bold">Hapus</i> jika ingin mengubahnya.</label>
                <a href="" class="btn btn btn-primary rounded shadow">Refresh Data</a>
                <a data-toggle="modal" data-target="#formModal" class="btn btn btn-warning rounded shadow addData" id="addData">Tambah Data</a>
                <br>
                <div class="row justify-content-end mt-5">
                    <div class="col-lg-6">
                        <form>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <input type="name" name="inputSearch1" class="form-control shadow" id="inputSearch1" placeholder="Cari Nama Mahasiswa atau NPM Mahasiswa" aria-label="Cari Nama Mahasiswa atau NPM Mahasiswa" aria-describedby="searchData">
                                    <div class="input-group-append">
                                        <button type="button" name="searchData" class="btn btn-primary shadow" id="searchData">Button</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="text-left table table-hover table-responsive-xl">
                            <thead class="bg-dark text-light text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">NPM</th>
                                    <th scope="col">Nama Mahasiswa</th>
                                    <th scope="col">Jurusan</th>
                                    <th scope="col" colspan="3">Aksi</th>
                                </tr>
                            </thead>
                                
                            <tbody>
                                <?php $no=1; foreach( $data['mahasiswa'] as $rowMahasiswa) : ?>
                                    <tr>
                                        <td scope="row"><?= $no++ ?></td>
                                        <td><?php if($rowMahasiswa['NPM_MAHASISWA'] == '') { echo 'Tidak ada Data';} else { echo $rowMahasiswa['NPM_MAHASISWA'];} ?></td>
                                        <td><?= $rowMahasiswa['NAMA_MAHASISWA']; ?></td>
                                        <td><?= $rowMahasiswa['JURUSAN_MAHASISWA']; ?></td>
                                        <td class="text-center"><a href="<?= BASEURL; ?>/home/viewData/<?= $rowMahasiswa['ID_MAHASISWA']; ?>" class="btn btn-success shadow rounded btn-block d-block">LIHAT</a></td>
                                        <td class="text-center"><a href="<?= BASEURL; ?>/home/updateData/<?= $rowMahasiswa['ID_MAHASISWA']; ?>" data-toggle="modal" data-target="#formModal" class="btn btn-primary shadow rounded btn-block d-block editData" id="editData" data-id="<?= $rowMahasiswa['ID_MAHASISWA']; ?>">EDIT</a></td>
                                        <td class="text-center"><a href="<?= BASEURL; ?>/home/deleteData/<?= $rowMahasiswa['ID_MAHASISWA']; ?>" onclick="confirm();" class="btn btn-danger shadow rounded btn-block d-block">HAPUS</a></td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    
    <!-- Login Modal -->
    <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" id="modal-type">
            <div class="modal-content shadow-lg">
                <div class="modal-header bg-light text-dark">
                    <h5 class="modal-title" id="formModalLabel">...</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="<?= BASEURL; ?>/home/addData/" method="POST" enctype="multipart/form-data" id="formMHS">
                    <input type="hidden" name="hiddenID" id="hiddenID">
                    <div class="modal-body bg-light text-dark">
                        <div class="row">
                            <div class="col-lg">
                                <div class="form-group">
                                    <label for="inputName1">Nama Mahasiswa</label>
                                    <input type="name" name="inputName1" class="form-control shadow" id="inputName1" placeholder="Masukkan Nama" aria-describedby="nameHelp" required="required">
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail1">Email Mahasiswa</label>
                                    <input type="email" name="inputEmail1" class="form-control shadow" id="inputEmail1" placeholder="Masukkan Email" aria-describedby="emailHelp" required="required">
                                </div>
                                <div class="form-group">
                                    <label for="inputPhone1">Nomor HP Mahasiswa</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">+62</span>
                                        </div>
                                        <input type="number" name="inputPhone1" id="inputPhone1" class="form-control shadow" placeholder="Masukkan Nomor HP" aria-label="Number Phone" aria-describedby="basic-addon1" required="required">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress1">Alamat Mahasiswa</label>
                                    <textarea type="address" name="inputAddress1" class="form-control shadow" id="inputAddress1" placeholder="Masukkan Alamat" aria-describedby="addressHelp" required="required" style="height: 125px;"></textarea>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group">
                                    <label for="inputReligion1">Agama Mahasiswa</label>
                                    <select class="custom-select shadow" name="inputReligion1" id="inputReligion1" required="required">
                                        <option selected>Pilih Agama</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Protestan">Protestan</option>
                                        <option value="Katolik">Katolik</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Buddha">Buddha</option>
                                        <option value="Khonghucu">Khonghucu</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="inputDepartment1">Jurusan Mahasiswa</label>
                                    <select class="custom-select shadow" name="inputDepartment1" id="inputDepartment1" required="required">
                                        <option selected>Pilih Jurusan</option>
                                        <option value="Sistem Informasi">Sistem Informasi</option>
                                        <option value="Sistem Komputer">Sistem Komputer</option>
                                        <option value="Teknik Informatika">Teknik Informatika</option>
                                        
                                    </select>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="inputRegistType">Jalur Pendaftaran</label>
                                            <select class="custom-select shadow" name="inputRegistType" id="inputRegistType" required="required">
                                                <option selected>Pilih Tipe</option>
                                                <option value="Reguler">Reguler</option>
                                                <option value="Undangan">Undangan</option>
                                                <option value="Prestasi">Prestasi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="inputGenderType">Jenis Kelamin</label>
                                            <select class="custom-select shadow" name="inputGenderType" id="inputGenderType" required="required">
                                                <option selected>Pilih Kelamin</option>
                                                <option value="Pria">Pria</option>
                                                <option value="Wanita">Wanita</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword1">Password Mahasiswa</label>
                                    <input type="password" name="inputPassword1" class="form-control shadow" id="inputPassword1" placeholder="Masukkan Password" aria-describedby="passwordHelp" required="required">
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword2">Password Ulang</label>
                                    <input type="password" name="inputPassword2" class="form-control shadow" id="inputPassword2" placeholder="Masukkan Password" aria-describedby="repasswordHelp" required="required">
                                </div>
                            </div>
                            <div class="col-lg" id="extendedData">
                                <div class="form-group">
                                    <label for="inputNPM1">NPM Mahasiswa</label>
                                    <input type="number" name="inputNPM1" class="form-control shadow" id="inputNPM1" placeholder="Masukkan NPM Mahasiswa" aria-describedby="npmHelp" required="required">
                                </div>
                                <div class="form-group">
                                    <label for="inputDate1">TTL Mahasiswa</label>
                                    <input type="date" name="inputDate1" class="form-control shadow" id="inputDate1" placeholder="Masukkan TTL Mahasisa" aria-describedby="dateHelp" required="required">
                                </div>
                                <div class="form-group">
                                    <label for="inputUsername1">Username Mahasiswa</label>
                                    <input type="name" name="inputUsername1" class="form-control shadow" id="inputUsername1" placeholder="Masukkan Username Mahasiswa" aria-describedby="usernameHelp" required="required">
                                </div>
                                <p class="mb-2">Foto Mahasiswa</p>
                                <div class="custom-file">
                                    <input type="file" name="inputPhoto1" class="custom-file-input shadow" id="inputPhoto1" placeholder="Pilih File..." aria-describedby="photoHelp" required="required">
                                    <label class="custom-file-label shadow" for="inputPhoto1" id="inputPhoto">Pilih file...</label>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="inputDate1">Status Mahasiswa (Pilih Salah Satu)</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input checkStatues" id="inputCheckData1" name="checkStatues1[]" value="Mahasiswa Baru">
                                        <label class="custom-control-label" for="inputCheckData1">Mahasiswa Baru</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-1">
                                        <input type="checkbox" class="custom-control-input checkStatues" id="inputCheckData2" name="checkStatues1[]" value="Mahasiswa Tetap">
                                        <label class="custom-control-label" for="inputCheckData2">Mahasiswa Tetap</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mt-1">
                                        <input type="checkbox" class="custom-control-input checkStatues" id="inputCheckData3" name="checkStatues1[]" value="Mahasiswa Drop Out">
                                        <label class="custom-control-label" for="inputCheckData3">Mahasiswa Drop Out</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer bg-light text-dark">
                        <button type="button" class="btn btn-secondary shadow" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary shadow" name="buttonData" id="buttonData">Input Data</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
        <div style="position: fixed; right: 20px; bottom: 20px;" class="animate__animated animate__slideInRight">
            <?php FlashMessage::flashmessage(); ?>
        </div>
    </div>
    
</body>