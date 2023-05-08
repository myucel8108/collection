import { defineStore } from "pinia";

export const useUserDetailsStore = defineStore("userDetails",{
    state:()=>({
        id:0,
        username:null,
        email:null,
        role:null
    }),
    getters:{
        isAuthenticated:(state)=> state.username==null?false:true
        
    },
    actions:{
        logout(){
                this.userDetails.username=null;
                this.userDetails.email=null;
                this.userDetails.id=0;
        }

    }
});
