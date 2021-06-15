<body class="animate__animated animate__fadeIn bg-light text-dark" id="top">     
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-lg text-left">
                <h3 class="font-weight-light" id="infoTable">Data Mahasiswa</h3>
                <label class="text-secondary" for="infoTable">Klik <i class="font-weight-bold">Edit</i> atau <i class="font-weight-bold">Hapus</i> jika ingin mengubahnya.</label>
                <a href="" class="btn btn btn-primary rounded shadow">Refresh Data</a>
                <a data-toggle="modal" data-target="#addModal" class="btn btn btn-warning rounded shadow">Tambah Data</a>
                <br><br>
                <br>
                <div class="row">
                    <div class="col">
                        <table class="text-left table table-hover table-responsive-xl">
                            <thead class="bg-dark text-light text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">NPM</th>
                                    <th scope="col">Nama Mahasiswa</th>
                                    <th scope="col">Jurusan</th>
                                    <th scope="col" colspan="2">Aksi</th>
                                </tr>
                            </thead>
                                
                            <tbody>
                                <?php $no=1; foreach( $data['mahasiswa'] as $rowMahasiswa) : ?>
                                    <tr>
                                        <td scope="row"><?= $no++ ?></td>
                                        <td><?= $rowMahasiswa['NPM_MAHASISWA']; ?></td>
                                        <td><?= $rowMahasiswa['NAMA_MAHASISWA']; ?></td>
                                        <td><?= $rowMahasiswa['JURUSAN_MAHASISWA']; ?></td>
                                        <td class="text-center"><a href="<?= BASEURL; ?>/home/viewData/<?= $rowMahasiswa['ID_MAHASISWA']; ?>" class="btn btn-primary shadow rounded btn-block d-block">EDIT</a></td>
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
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content shadow-lg">
                <div class="modal-header bg-light text-dark">
                    <h5 class="modal-title" id="addModalLabel">Tambah Data Mahasiswa Baru</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="" method="POST">
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
                                        <input type="number" name="inputPhone1" class="form-control shadow" placeholder="Masukkan Nomor HP" aria-label="Number Phone" aria-describedby="basic-addon1" required="required">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress1">Alamat Mahasiswa</label>
                                    <textarea type="address" name="inputAddress1" class="form-control shadow" id="inputAddress1" placeholder="Masukkan Alamat" aria-describedby="addressHelp" required="required"></textarea>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group">
                                    <label for="inputDepartment1">Jurusan Mahasiswa</label>
                                    <select class="custom-select shadow" name="inputDepartment1" required="required">
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
                                            <select class="custom-select shadow" name="inputRegistType" required="required">
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
                                            <select class="custom-select shadow" name="inputGenderType">
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
                        </div>
                    </div>
                    <div class="modal-footer bg-light text-dark">
                        <button type="button" class="btn btn-secondary shadow" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary shadow" name="addData">Input Data</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>