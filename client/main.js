baseURL = "http://localhost:4000/api/"

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune-cookie")
const form = document.getElementById('signin-form')
const getNamesBtn = document.getElementById('get-list')
const charContainer = document.querySelector('section')
const clearBtn = document.getElementById('clear-names')
const submitNewNameForm = document.getElementById('replace-name')
const deleteNameForm = document.getElementById('delete-name')


//submit handlers
const getCompliment = (event) => {
    event.preventDefault()
    axios.get(`${baseURL}compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = (event) => {
    event.preventDefault()
    axios.get(`${baseURL}fortune/`)
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const signLog = (event) => {
    let userName = document.getElementById("first-name").value
    console.log(userName)
    event.preventDefault()
   
    axios.post(`${baseURL}signlog`, {name: userName})
    .then( res => {
        console.log(res)
        const data = res.data
            let guestLog = []
            for (i = 0; i < data.length; i++) {
                guestLog.push(` ${data[i]}`)
            }
            alert(`${guestLog} have signed the log.`)
    })
    .catch(err => {console.log(err)
        alert('Uh oh. Your request did not work.')
    })

    printSiteLog()
} 

const printSiteLog = (event) => {
    axios.get(`${baseURL}signlog`)
    .then(res => {
        const data = res.data
        console.log(data)
        cleanedData = Array.from(data)
        clearNames()
        for (let i = 0; i < cleanedData.length; i++) {
            let nameCard = document.createElement('div')
            nameCard.innerHTML = `<p>${cleanedData[i]}</p>`
            charContainer.appendChild(nameCard)
        }
    })
}

function clearNames(event) {
    charContainer.innerHTML = ``
  }

const changeName = (event) => {
    let name1 = document.getElementById("name1").value
    let name2 = document.getElementById("name2").value
    axios.put(`${baseURL}signlog`, {a: name1, b: name2})
    .then(res => {
        printSiteLog()
    })
    
}

const deleteName = (event) => {
    event.preventDefault()
    let name = document.getElementById("name3").value
    console.log(name)
    axios.delete(`${baseURL}signLog/:${name}`)
    .then(res => {
        alert(`${name} was removed from the guest log.`)
    })
}


//event listeners
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', signLog)
getNamesBtn.addEventListener('click', printSiteLog)
clearBtn.addEventListener('click', clearNames)
submitNewNameForm.addEventListener('submit', changeName)
deleteNameForm.addEventListener('submit', deleteName)


