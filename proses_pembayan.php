<?php
// Periksa apakah ada data yang dikirim melalui POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Ambil data dari request
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $nomor_hp = htmlspecialchars($_POST['nomor_hp']);

    // Lakukan tindakan, misalnya simpan ke database atau kirim email
    $response = [
        "status" => "success",
        "message" => "Pesanan berhasil diterima.",
        "data" => [
            "nama" => $nama,
            "email" => $email,
            "nomor_hp" => $nomor_hp,
        ]
    ];

    // Mengirimkan respons JSON ke JavaScript
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>