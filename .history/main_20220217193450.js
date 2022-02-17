

function showTable(){
    var tb = document.getElementById('tb_cha');

    if(tb.style.display == "none")
    {
        tb.style.display = 'block'
    }else
    {
        tb.style.display = 'none'
    }
}

function showData(){
    var a = document.ge\('rdgd_nam')
    var gt = 'Giới tính: '
    if(a.checked == null)
    {
        alert('Bạn chưa chọn giới tính ^^')
    }
    if(a.checked == true)
    {
        gt  += "Nam"
    }else
    {
        gt += "Nữ"
    }

    alert('Họ tên: Nguyễn Anh Tuấn \n'
           + gt)
}
