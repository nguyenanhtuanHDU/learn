

function showTable(){
    var tb = document.getElementById('tb_cha');

    if(tb.style.display == "block")
    {
        tb.style.display = 'none'
    }else
    {
        tb.style.display = 'block'
    }
}

function showData(){
    var a = document.getElementsByName('rd_gender1')
    var gt = 'Giới tính: '
    if(a.checked == true)
    {
        gt  += "Nam"
    }else
    {
        a = "Nữ"
    }

    alert(gt)
}
