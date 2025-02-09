function clicar(){
    var num = document.getElementById('txtt')
    var res = document.getElementById('tabx')

    if(num.value.length == 0){
        window.alert('ERROR')
    }else{
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ''
        while( c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }

    


}