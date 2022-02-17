

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
    var nu = document.getElementById('rdgd_nu')

    var gt = 'Giới tính: '
    
    if(nam.checked == true && nu.checked == false)
    {
        gt  += "Nam"
    }
    else if(nam.checked == true && nu.checked == false)
    else if(nam.checked == false || nu.checked == false)
    {
        alert('Bạn chưa chọn giới tính ^^')
        gt += 'Chưa chọn !!!!'
    }
    else
    {
        gt += "Nữ"
    }

    alert('Họ tên: Nguyễn Anh Tuấn \n'
           + gt)
}
