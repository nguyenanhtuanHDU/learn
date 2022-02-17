

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
    //Họ tên
    var name = document.getElementById('tb_name1').value
    if(name == '')
    {
        alert('Bạn chưa nhập họ tên :))\n')
        name += 'Nhập họ tên dùm :))'
    }

    //Giới tính
    var nam = document.getElementById('rdgd_nam')
    var nu = document.getElementById('rdgd_nu')

    var gt = ''
    
    if(nam.checked == true && nu.checked == false)
    {
        gt  += "Nam"
    }
    else if(nam.checked == false && nu.checked == true)
    {
        gt += 'Nữ'
    }
    else if(nam.checked == false || nu.checked == false)
    {
        alert('Bạn chưa chọn giới tính ^^')
        gt += 'Chưa chọn !!!!'
    }
    else
    {
        gt += "Nữ"
    }
    //Sở thích
    var st = document.getElementById('tb_hobby1')
    //Hiển thị
    alert('Họ tên: ' + name +'\nGiới tính: ' + gt)
}
