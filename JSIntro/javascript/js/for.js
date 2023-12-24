function counter(){
    let limit = document.getElementById("inLimit")
    limit = Number(limit.value)

    for (let i = 1; i <= limit; i++){
        console.log(" " + i)
    }
}

let count = document.getElementById("btCounter")
count.addEventListener("click", counter)