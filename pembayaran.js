document.querySelector("form").addEventListener("submit", function(event) {
    const nomorHP = document.getElementById("nomor_hp").value.trim();

    // Validasi: Pastikan nomor HP hanya angka dan panjangnya 10-12 karakter
    const isValid = /^[0-9]{10,12}$/.test(nomorHP);

    if (!isValid) {
        alert("Nomor HP harus terdiri dari 10-12 digit angka saja.");
        event.preventDefault(); // Mencegah formulir dikirim jika tidak valid
    }
});