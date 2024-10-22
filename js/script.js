// Función para cifrar usando AES
function encryptPassword() {
const password = document.getElementById('password').value;
const key = document.getElementById('key').value;
if (!password || !key) {
    alert("Por favor, ingresa tanto la contraseña como la clave secreta.");
    return;
}
const encryptedPassword = CryptoJS.AES.encrypt(password, key).toString();
document.getElementById('result').innerText = "Contraseña cifrada: " + encryptedPassword;
}

// Función para descifrar usando AES
function decryptPassword() {
    const encryptedPassword = document.getElementById('password').value;
    const key = document.getElementById('key').value;
    if (!encryptedPassword || !key) {
        alert("Por favor, ingresa tanto la contraseña cifrada como la clave secreta.");
        return;
    }
    const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, key).toString(CryptoJS.enc.Utf8);
    document.getElementById('result').innerText = "Contraseña descifrada: " + decryptedPassword;
}