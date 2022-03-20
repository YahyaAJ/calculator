// insert angka ke text
function insert(num){
    document.form.textarea.value += num
}
// fungsi hitung
function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}
// fungsi clean
function clean(){
    document.form.textarea.value = ""
}
// fungsi delete
function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.length-1)
}