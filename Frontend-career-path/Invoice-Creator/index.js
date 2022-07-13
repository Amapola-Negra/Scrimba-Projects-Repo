const wash = document.getElementById("wash")
const mow = document.getElementById("mow")
const pull = document.getElementById("pull")
const tasksList = document.getElementById("tasks-list")
const washTask = document.getElementById("wash-task")
const mowTask = document.getElementById("mow-task")
const pullTask = document.getElementById("pull-task")
const totalAmount = document.getElementById("total-amount")
const send = document. getElementById("send")
const message = document.getElementById("message")
let taskArr=[]
let total=0
let tasks=[]
message.innerHTML = "Choose some tasks."
totalAmount.innerHTML= `$ ${total}`
/*__________Buttons functions___________*/

wash.addEventListener("click", function (){
    message.innerHTML=""
    if (taskArr.indexOf("wash")=== -1){
        taskArr.push("wash")
        washTask.innerHTML=`<div class="task-item"><div class="name-btn"><p class="task-name">Wash Car</p><button id=${"wash-btn"} class="remove">Remove</button></div> <p><span class="grey">$</span> ${10}</p></div>`
        const washBtn = document.getElementById("wash-btn")
        total += 10
        totalAmount.innerHTML= `$ ${total}`
        washBtn.addEventListener("click", function(){
        
            for (let i=0; i < taskArr.length; i++){
                if (taskArr[i]==="wash"){
                    taskArr.splice(i, 1)
                    console.log(taskArr)
                    washTask.innerHTML=""
                    total -= 10
                    totalAmount.innerHTML= `$ ${total}`
                   
                }
            }
            
        })
        
    }
    
})

mow.addEventListener("click", function (){
    message.innerHTML=""
    if (taskArr.indexOf("mow")=== -1){
        taskArr.push("mow")
        mowTask.innerHTML = `<div class="task-item"><div class="name-btn" id=${"mow-task"}><p class="task-name">Mow Lawn</p> <button id=${"mow-btn"} class="remove">Remove</button></div> <p><span class="grey">$</span> ${20}</p></div>`
        const mowBtn = document.getElementById("mow-btn")
        total += 20
        totalAmount.innerHTML= `$ ${total}`
        mowBtn.addEventListener("click", function(){
            for (let j=0; j < taskArr.length; j++){
                if (taskArr[j]==="mow"){
                    taskArr.splice(j, 1)
                    mowTask.innerHTML=""
                    total -= 20
                    totalAmount.innerHTML= `$ ${total}`
                }
            }
        })
    }
})
pull.addEventListener("click", function (){
    message.innerHTML=""
    if (taskArr.indexOf("pull")=== -1){
        taskArr.push("pull")
        pullTask.innerHTML=`<div class="task-item"><div class="name-btn"><p class="task-name">Pull Weeds</p><button id=${"pull-btn"} class="remove">Remove</button></div> <p><span class="grey">$</span> ${30}</p></div>`
        const pullBtn = document.getElementById("pull-btn")
        total += 30
        totalAmount.innerHTML= `$ ${total}`
        pullBtn.addEventListener("click", function(){
            for (let i=0; i < taskArr.length; i++){
                if (taskArr[i]==="pull"){
                    taskArr.splice(i, 1)
                   pullTask.innerHTML=""
                   total -= 30
                totalAmount.innerHTML= `$ ${total}`
                   
                }
            }
            
        })
         
    }
})
send.addEventListener("click", function(){
    if (taskArr.length===0){
        message.innerHTML= "There is nothing to send. Choose some tasks!"
    }
    taskArr=[]
    mowTask.innerHTML=""
    washTask.innerHTML=""
    pullTask.innerHTML=""
    total=0;
    totalAmount.innerHTML= `$ ${total}`
    
})
