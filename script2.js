        const action = document.getElementById('action');
        const result = document.getElementById('result');
        const button = document.getElementById('button');
        const missionDescription = document.getElementById('missionDescription')
        const hour = document.getElementById('day')
        const minute = document.getElementById('hour')
        const mNameError = document.getElementById('mNameError')
        const mDescriptionError = document.getElementById('mDescriptionError')
        const timeError = document.getElementById('timeError')
        const resultTitle = document.getElementById('resultTitle')
        const missionList = document.getElementById('missionList')
        const submitButton = document.getElementById('submit')
        const clearButton = document.getElementById('ClearButton')
        

        document.addEventListener('DOMContentLoaded', getItems());
        button.addEventListener('click', ()=>{

            if(action.value===''|| mDescriptionError.value===''||hour.value===''|| minute.value===''){
                console.log("full form is not submited")
                alert("Please, fill the complete form")
            }
            else if(minute.value>31){
                alert('Please eter valid date')
            }
            else if(hour.value==="Jan" && minute.value>31){
                alert('Please eter valid date')
            }
            else if(hour.value==="Feb" && minute.value>28){
                alert('Please eter valid date')
            }
            else if(hour.value==="Mar" && minute.value>31){
                alert('Please eter valid date')
            }
            else if(hour.value==="Apr" && minute.value>30){
                alert('Please eter valid date')
            }
            else if(hour.value==="May" && minute.value>31){
                alert('Please eter valid date')
            }
            else if(hour.value==="June" && minute.value>30){
                alert('Please eter valid date')
            }
            else if(hour.value==="July" && minute.value>31){
                alert('Please eter valid date')
            }
            else if(hour.value==="Aug" && minute.value>31){
                alert('Please eter valid date')
            }
            else if(hour.value==="Sep" && minute.value>30){
                alert('Please eter valid date')
            }
            else if(hour.value==="Oct" && minute.value>31){
                alert('Please eter valid date')
            }
            else if(hour.value==="Nov" && minute.value>30){
                alert('Please eter valid date')
            }
            else if(hour.value==="dec" && minute.value>31){
                alert('Please eter valid date')
            }
            else{
                // result.innerText =action.value;
            addLocalStorage(action.value);
            //remove default result div
            document.getElementById('defaultDiv').style.display="none";
            clearButton.style.display = 'block'

                const paraDiv = document.createElement('div')
                paraDiv.classList.add('missions')
                const timeDiv = document.createElement('div');
                const countDownSection = document.createElement('div');
                countDownSection.classList.add('countDownSection')
                const dataDiv = document.createElement('div');
                dataDiv.classList.add('dataDiv')
                const buttonDiv = document.createElement('div');
                buttonDiv.classList.add('buttonDiv')
                const para = document.createElement('li');
                para.innerText = action.value;
                const todoDes = document.createElement('p');
                todoDes.innerHTML="Description: " + missionDescription.value;
                const timeTitle = document.createElement('h3')
                const hourCount = document.createElement('p')
                const divider = document.createElement('p')
                const minuteCount = document.createElement('p')
                timeTitle.innerHTML ="Initiate at:"
                hourCount.innerHTML = hour.value 
                hourCount.classList.add('hourCount')
                divider.innerText = '/'
                minuteCount.innerHTML =  minute.value
                minuteCount.classList.add('minuteCount')
                
                dataDiv.appendChild(para);
                dataDiv.appendChild(todoDes);
                //complete Button
                const complete = document.createElement('button');
                complete.innerHTML= '<i class="fa-solid fa-circle-check"></i>'
                complete.classList.add('completeButton')
                paraDiv.appendChild(complete);
                const delButton = document.createElement('button');
                //del Button
                delButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
                delButton.classList.add('delButton')
                delButton.classList.add('trashButton1')
                paraDiv.appendChild(delButton);
                result.appendChild(paraDiv);
                buttonDiv.appendChild(complete)
                buttonDiv.appendChild(delButton)
                timeDiv.appendChild(timeTitle);
                countDownSection.appendChild(hourCount);
                countDownSection.appendChild(divider);
                countDownSection.appendChild(minuteCount);
                timeDiv.appendChild(countDownSection)

                // adding to subMenu
                paraDiv.appendChild(dataDiv)
                paraDiv.appendChild(timeDiv)
                paraDiv.appendChild(buttonDiv)

                //resut input Fields
                action.value ='';
                missionDescription.value=''
                minute.value=''
                hour.value=''
                //clear Button
                clearButton.addEventListener('click',()=>{
                    paraDiv.remove();
                    clearButton.style.display='none'
                    document.getElementById('defaultDiv').style.display="block";
                    const missions = document.querySelectorAll('.missions')
                    resultTitle.innerText= "Tasks: "+ missions.length;
                    localStorage.clear();
                })

                //task counter
                const missions = document.querySelectorAll('.missions')
                resultTitle.innerText= "Tasks: "+ missions.length;
                if(missions.length===0){
                    clearButton.style.display="none"
                    defaultDiv.style.display="block"
                }
            }
        })
        result.addEventListener('click',(e)=>{
            const items= e.target;
            const itemsParent1 = items.parentElement.parentElement;
            const itemsParent = items.parentElement.parentElement.children[0].children[0].innerText;
            if(items.classList[0] ==="delButton"){
                itemsParent1.classList.add('delanimation');
                delFunction(itemsParent);
                itemsParent1.addEventListener('transitionend',()=>{
                    itemsParent1.remove();
                    //task Count
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
                if(items.classList[0]==='completeButton'){
                    itemsParent1.classList.add('completeMission')
                }
        })

        //adding local storage
        function addLocalStorage(data){
            let names;
            if(localStorage.getItem('names')=== null){
                names =[];

            }
            else{
                names = JSON.parse(localStorage.getItem('names'));
            }
            names.push(data);
            localStorage.setItem('names', JSON.stringify(names))
        }

        // getItems Functions
        function getItems(){
            let names;
            if(localStorage.getItem('names')=== null){
                names =[];

            }
            else{
                names = JSON.parse(localStorage.getItem('names'));
            }
            names.forEach(function(names){
                clearButton.style.display="block"
                document.getElementById('defaultDiv').style.display="none";
                const paraDiv = document.createElement('div')
                paraDiv.classList.add('missions')
                const timeDiv = document.createElement('div');
                const countDownSection = document.createElement('div');
                countDownSection.classList.add('countDownSection')
                const dataDiv = document.createElement('div');
                dataDiv.classList.add('dataDiv')
                const buttonDiv = document.createElement('div');
                buttonDiv.classList.add('buttonDiv')
                const para = document.createElement('li');
                const delButton2 = document.createElement('button');
                para.innerText = names;
                delButton2.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
                delButton2.classList.add('delButton2')
                delButton2.classList.add('trashButton1')
                //complete Button
                const complete = document.createElement('button');
                complete.innerHTML= '<i class="fa-solid fa-circle-check"></i>'
                complete.classList.add('completeButton')
                //adding items on subDiv
                dataDiv.appendChild(para);
                buttonDiv.appendChild(complete);
                buttonDiv.appendChild(delButton2);
                //adding itm to main div
                paraDiv.appendChild(dataDiv);
                paraDiv.appendChild(buttonDiv);
                result.appendChild(paraDiv);
                //task Count
                const missions = document.querySelectorAll('.missions')
                console.log(missions.length)
                resultTitle.innerText= "Tasks: "+ (missions.length);
                if(missions.length===0){
                    clearButton.style.display="none"
                    defaultDiv.style.display="block"
                }
                //clear Button
                clearButton.addEventListener('click',()=>{
                    paraDiv.remove();
                    clearButton.style.display='none'
                    document.getElementById('defaultDiv').style.display="block";
                    const missions = document.querySelectorAll('.missions')
                    resultTitle.innerText= "Tasks: "+ missions.length;
                    localStorage.clear();
                })
            })
            result.addEventListener('click',(e)=>{
            const items= e.target;
            // const itemsParent1 = items.parentElement;
            const itemsParent2 = items.parentElement.parentElement;
            const itemsParent = items.parentElement.parentElement.children[0].children[0].innerText;
            if(items.classList[0] ==="delButton2"){
                    itemsParent2.classList.add('delanimation')
                    delFunction(itemsParent);
                    itemsParent2.addEventListener('transitionend',()=>{
                    itemsParent2.remove();
                    //task Count
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
            if(items.classList[0]==='completeButton'){
                itemsParent2.classList.add('completeMission')
            }
        })
        }

        //adding Del Function
        function delFunction(itemsParent){
            let names;
            if(localStorage.getItem('names')=== null){
                names =[];

            }
            else{
                names = JSON.parse(localStorage.getItem('names'));
            }
            console.log(itemsParent)
            names.splice(names.indexOf(itemsParent),1)
            localStorage.setItem('names', JSON.stringify(names))
        }