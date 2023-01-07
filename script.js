const missionName = document.getElementById('missionName')
const missionDescription = document.getElementById('missionDescription')
const hour = document.getElementById('day')
const minute = document.getElementById('hour')
const mNameError = document.getElementById('mNameError')
const mDescriptionError = document.getElementById('mDescriptionError')
const timeError = document.getElementById('timeError')
const resultTitle = document.getElementById('resultTitle')
const missionList = document.getElementById('missionList')
//more things are left to be selected
const submitButton = document.getElementById('submit')
const clearButton = document.getElementById('ClearButton')
const lenth = []

//main submit event
document.addEventListener('DOMContentLoaded', getTodos);

submitButton.addEventListener('click', ()=>{
    mNameError.innerText=""
    mDescriptionError.innerText=""
    timeError.innerText=""
    missionName.style.borderColor ='#A5FFAF'
    missionDescription.style.borderColor ='#A5FFAF'
    minute.style.borderColor ='#A5FFAF'
    hour.style.borderColor ='#A5FFAF'
    if(missionName.value===""){
        mNameError.innerText ="Please enter a name of your mission"
        missionName.style.borderColor ='red'
    }
    if(missionDescription.value===""){
        mDescriptionError.innerText ="Please enter a Description"
        missionDescription.style.borderColor ='red'
    }
    if(minute.value === "" || hour.value===""){
        timeError.innerText ="Enter a a date to regiser the mission"
         minute.style.borderColor ='red'
         hour.style.borderColor ='red'
    }
    if(missionName.value===""||missionDescription.value==="" || minute.value === "" || hour.value===""){
        console.log('Form Error')
    }
    else{
    
    mNameError.innerText=""
    clearButton.style.display = 'block'
    document.getElementById('defaultDiv').style.display="none";
        const todoDiv = document.createElement('div');
        const timeDiv = document.createElement('div');
        const countDownSection = document.createElement('div');
        countDownSection.classList.add('countDownSection')
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('dataDiv')
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv')
        todoDiv.classList.add('missions')
        const todo = document.createElement('li');
        todo.innerHTML ="Tittle: " + missionName.value;
        const stupitIdeaP = document.createElement('p')
        stupitIdeaP.classList.add('stupitIdeaP')
        stupitIdeaP.innerText=missionName.value;
        const todoDes = document.createElement('p');
        todoDes.innerHTML="Description: " + missionDescription.value;
        const timeTitle = document.createElement('h3')
        const hourCount = document.createElement('p')
        const divider = document.createElement('p')
        const minuteCount = document.createElement('p')
        const SecoundCount = document.createElement('p')
        timeTitle.innerHTML ="Initiate at:"
        hourCount.innerHTML = hour.value 
        hourCount.classList.add('hourCount')
        divider.innerText = '/'
        minuteCount.innerHTML =  minute.value
        minuteCount.classList.add('minuteCount')
        // Buttons 
        const complete = document.createElement('button');
        const trashCan = document.createElement('button');
        complete.innerHTML= '<i class="fa-solid fa-circle-check"></i>'
        trashCan.innerHTML= '<i class="fa-solid fa-trash-can"></i>'
        complete.classList.add('completeButton')
        trashCan.classList.add('trashButton')
        //adding items on subDiv
        dataDiv.appendChild(todo);
        dataDiv.appendChild(todoDes);
        buttonDiv.appendChild(complete);
        buttonDiv.appendChild(trashCan);
        trashCan.appendChild(stupitIdeaP);
        timeDiv.appendChild(timeTitle);
        countDownSection.appendChild(hourCount);
        countDownSection.appendChild(divider);
        countDownSection.appendChild(minuteCount);
        countDownSection.appendChild(SecoundCount);
        timeDiv.appendChild(countDownSection)
        //adding items on main div
        todoDiv.appendChild(dataDiv);
        todoDiv.appendChild(timeDiv);
        todoDiv.appendChild(buttonDiv);
        missionList.appendChild(todoDiv);

        //adding items in the local storage
        
        saveLocalTodos(missionName.value , missionDescription.value, hour.value, minute.value);
        


        //clean the input Fields
        missionName.value=''
        missionDescription.value=''
        minute.value=''
        hour.value='No month'

        const missions = document.querySelectorAll('.missions')
    resultTitle.innerText= "Tasks: "+ missions.length;

        //big Clear button function
        clearButton.addEventListener('click',()=>{
            lenth.pop(missions.length)
            resultTitle.innerText= "Tasks: "+ lenth.length;
            console.log(lenth)
            document.getElementById('defaultDiv').style.display="block";
            clearButton.style.display='none'
            todoDiv.remove();
            localStorage.clear();
         })

            //ADD SINGLE DELETE  BUtton option
            missionList.addEventListener('click',(e)=>{
                const item = (e.target)
                const parenttodo= item.parentElement.parentElement;
                if(item.classList[0]==='trashButton'){
                    parenttodo.classList.add('delanimation')
                    parenttodo.addEventListener('transitionend',()=>{
                        parenttodo.remove();
                        const missions = document.querySelectorAll('.missions')
                        // console.log(missions.length)
                        resultTitle.innerText= "Tasks: "+ (missions.length);
                        if(missions.length===0){
                            clearButton.style.display="none"
                            defaultDiv.style.display="block"
                        }
                    })
                }
                // Add single complete buttion Style
                if(item.classList[0]==='completeButton'){
                    parenttodo.classList.add('completeMission')
                }
            })
            
}
})

function saveLocalTodos(todo, description, month, date) {
    let toNames;
    let todescription;
    let tomonth;
    let todate;
    if (localStorage.getItem('toNames') === null) {
        toNames = [];
        todescription = [];
        tomonth = [];
        todate = [];
    } 
    else {
        toNames = JSON.parse(localStorage.getItem('toNames'));
        todescription = JSON.parse(localStorage.getItem('todescription'));
        tomonth = JSON.parse(localStorage.getItem('tomonth'));
        todate = JSON.parse(localStorage.getItem('todate'));
    }
    toNames.push(todo);
    localStorage.setItem('toNames', JSON.stringify(toNames));
    todescription.push(description);
    localStorage.setItem('todescription', JSON.stringify(todescription));
    tomonth.push(month);
    localStorage.setItem('tomonth', JSON.stringify(tomonth));
    todate.push(date);
    localStorage.setItem('todate', JSON.stringify(todate));
}

function getTodos() {
    let toNames;
    let todescription;
    let tomonth;
    let todate;
    if (localStorage.getItem('toNames') === null) {
        toNames = [];
        todescription = [];
        tomonth = [];
        todate = [];
    }
    else {
        toNames = JSON.parse(localStorage.getItem('toNames'));
        todescription = JSON.parse(localStorage.getItem('todescription'));
        tomonth = JSON.parse(localStorage.getItem('tomonth'));
        todate = JSON.parse(localStorage.getItem('todate'));
    }
    toNames.forEach(function(toNames){
        clearButton.style.display = 'block'
    document.getElementById('defaultDiv').style.display="none";
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('missions')
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('dataDiv')
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv')
        const todo = document.createElement('li');
        todo.innerHTML ="Tittle: " + toNames;
        missionList.appendChild(todo);
        // Buttons 
        const complete = document.createElement('button');
        const trashCan = document.createElement('button');
        complete.innerHTML= '<i class="fa-solid fa-circle-check"></i>'
        trashCan.innerHTML= '<i class="fa-solid fa-trash-can"></i>'
        complete.classList.add('completeButton')
        trashCan.classList.add('trashButton')
        //adding items on subDiv
        dataDiv.appendChild(todo);
        buttonDiv.appendChild(complete);
        buttonDiv.appendChild(trashCan);
        //adding items on main div
        todoDiv.appendChild(dataDiv);
        todoDiv.appendChild(buttonDiv);
        missionList.appendChild(todoDiv);

        //ADD SINGLE DELETE  BUtton option
        missionList.addEventListener('click',(e)=>{
            const item = (e.target)
            const parenttodo= item.parentElement.parentElement;
            if(item.classList[0]==='trashButton'){
                parenttodo.classList.add('delanimation')
                parenttodo.addEventListener('transitionend',()=>{
                    parenttodo.remove();
                    removeFromeLocal();
                    function removeFromeLocal(){
                        if (localStorage.getItem('toNames') === null) {
                            toNames = [];
                            todescription = [];
                            tomonth = [];
                            todate = [];
                        }
                        else {
                            toNames = JSON.parse(localStorage.getItem('toNames'));
                            todescription = JSON.parse(localStorage.getItem('todescription'));
                            tomonth = JSON.parse(localStorage.getItem('tomonth'));
                            todate = JSON.parse(localStorage.getItem('todate'));
                        }
                        const todoindex = todo.innerText;
                    // console.log(todoindex)
                    toNames.splice(toNames.indexOf(todoindex), 1);
                    localStorage.setItem('toNames', JSON.stringify(toNames));
                }
                const missions = document.querySelectorAll('.missions')
                    console.log(missions.length)
                    resultTitle.innerText= "Tasks: "+ (missions.length);
                    if(missions.length===0){
                        clearButton.style.display="none"
                        defaultDiv.style.display="block"
                    }
                })
            }
            // Add single complete buttion Style
            if(item.classList[0]==='completeButton'){
                parenttodo.classList.add('completeMission')
            }
        })

        const missions = document.querySelectorAll('.missions')
    resultTitle.innerText= "Tasks: "+ missions.length;

    clearButton.addEventListener('click',()=>{
        lenth.pop(missions.length)
        resultTitle.innerText= "Tasks: "+ lenth.length;
        console.log(lenth)
        document.getElementById('defaultDiv').style.display="block";
        clearButton.style.display='none'
        todoDiv.remove();
        localStorage.clear();
     })
    })
}