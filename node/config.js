
const config = {
    local: {
        DB:{
            HOST: "127.0.0.1",
            PORT: "27017",
            DATABASE: "Mongoprg",
            MONGOOSE:{
                useUnifinedTopology: true,
                useNewUrlParser: true
            },
            UserName: "",
            Password: ""
        },
        PORTNO : 8989,
       
    },

    staging: {
        DB:{
            HOST: "172.10.1.3",
            PORT: "27017",
            DATABASE: "roshnimanmode",
            MONGOOSE:{
                useUndifinedTopology: true,
                useNewUrlParser: true
            },
            UserName: "",
            Password: ""
        },
        PORTNO : 8989,
        EMAIL : {
            host: "smtp.gmail.com",
            port:  465,
            user: "roshnimanmode07@gmail.com",
            pass: "tffoxotfvzdkbfxq",
        }
    },
}
export const get = function get (env){
    return config[env];
}