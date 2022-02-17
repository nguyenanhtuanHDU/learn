

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
    var nam = document.getElementById('rdgd_nam')
    var nam = document.getElementById('rdgd_nam')

    var gt = 'Giới tính: '
    
    if(nam.checked == true)
    {
        gt  += "Nam"
    }
    else if(nam.checked == false)
    {
        alert('Bạn chưa chọn giới tính ^^')
    }
    else
    {
        gt += "Nữ"
    }

    alert('Họ tên: Nguyễn Anh Tuấn \n'
           + gt)
}
