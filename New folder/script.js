var arr=[
    {
        dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330", 
    story:"https://images.unsplash.com/photo-1706797060168-2996c1372bc7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
        dp:"https://images.unsplash.com/photo-1597586124394-fbd6ef244026?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1528916451049-e5d097b61db2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://unsplash.com/photos/woman-in-black-framed-eyeglasses-HEvQ8P4eqlg"
    },
    {
        dp:"https://images.unsplash.com/photo-1626818590138-c1e906bf29be?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1628587259985-03b11f920826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1533461502717-83546f485d24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1529810106969-29cc261b3789?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

]

var st =document.querySelector("#story")
var clutter=""
arr.forEach(function(elem,idx){
    clutter +=` <div class="s1">
    <img id=${idx}
      src="${elem.dp}"
      alt=""
      srcset=""
    />
  </div>`

})
st.innerHTML=clutter

story.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    console.log()

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
})




