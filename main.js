let input = document.querySelector('input')
let button = document.querySelector('button')
let BoxItem = document.querySelectorAll('.box-item')
let drag = null


button.onclick = function(){
    if (input.value != 0){
        BoxItem[0].innerHTML += `<p class= "item" draggable = "true">${input.value}</p>`

        input.value = ''

        dragDrop()
    }
}

function dragDrop(){
    let allP = document.querySelectorAll('p')

    allP.forEach( p  => {
        

        p.addEventListener('dragstart', function(){
            drag = p
            p.style.opacity = '0.5'
        })
        
        p.addEventListener('dragend', function(){
            drag = null
            p.style.opacity = '1'
        })

        BoxItem.forEach(box => {
            box.addEventListener('dragover',function(e){
                e.preventDefault()
                box.style.backgroundColor = '#090'
                this.style.color = '#fff'
            })

            
            box.addEventListener('dragleave',function(){
                box.style.backgroundColor = '#fff'
                this.style.color = '#000'

            })
            
            box.addEventListener('drop',function(){
                box.append(drag)
                box.style.backgroundColor = '#fff'
                this.style.color = '#000'

            })

            

            
            



        })

    });

}