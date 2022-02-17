

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
    var gt = document.getElementsByName('rd_gender1')
    if(gt.values == checked)
    {
        gt += "Nam"
    }else
    {
        gt += "Nữ"
    }
}
