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
            todoDiv.remove(); })

            //ADD SINGLE DELETE  BUtton option
            missionList.addEventListener('click',(e)=>{
                const item = (e.target)
                const parenttodo= item.parentElement.parentElement;
                if(item.classList[0]==='trashButton'){
                        parenttodo.remove();
                    const missions = document.querySelectorAll('.missions')
                    console.log(missions.length)
                    resultTitle.innerText= "Tasks: "+ (missions.length);
                    if(missions.length===0){
                        clearButton.style.display="none"
                        defaultDiv.style.display="block"
                    }
                }
                // Add single complete buttion Style
                if(item.classList[0]==='completeButton'){
                    parenttodo.classList.add('completeMission')
                }
            })
            
}
})