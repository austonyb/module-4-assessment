baseURL = "http://localhost:4000/api/"

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortune-cookie")

const submit = document.getElementById('submit-name')

//inputs
let userName = document.getElementById("first-name")


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

const signLog = (event, userName) => {
    console.log(userName)
    event.preventDefault()
    axios.post(`${baseURL}signlog`, userName)
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


//event listeners
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submit.addEventListener('click', signLog)

