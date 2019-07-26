import axios from 'axios';
export default {
    check(){
        axios.get('Login/GetSession?userName=admin')
                .then(response => {
                    let res = response.data;
                    this;
                    if (res.code) {
                        
                        let a = res.token;
                        let b = res.msg;
                    } else {
                        window.location.href= "/Login" 
                    }
                })
                .catch(response => {
                    console.log(response.data)
                });
    } 
}

