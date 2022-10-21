baseURL = "http://localhost:4000/api/"

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune-cookie")

const form = document.getElementById('signin-form')


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
} 

const printSiteLog = (event) => {
    axios.get(`${baseURL}signlog`)
    .then(res => {
        const data = res.data
        
    })
}

//event listeners
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', signLog)


