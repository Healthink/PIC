import axios from 'axios';
export default {
    username:'',
    token:'',
    preurl:'http://192.168.0.168:94/api/',
    localurl:'http://localhost:8080/#/',
    localpre:'http://localhost:8080/',
    //preurl:'http://102.102.15.77:92/api/',
    //localurl:'http://102.102.15.77:94/#/',
    //localpre:'http://102.102.15.77:94/',
    post(param1,param2){
        axios.post(this.preurl+param1,param2)
    },
    get(param1){
        axios.get(this.preurl+param1)
    },
    check(){
        
    },
    login(param){
        return axios.get(this.preurl+param)
    },
    setParam(param1,param2){
        this.username = param1;
        this.token = param2;
    }
}