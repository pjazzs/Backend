function passwordStrenght(password){
    if(password.length <8){
        return 'Weak'
    } else if(password.length >=8 && password.length < 15){
        return 'Moderate'
    } else if(password.length >=15){
        return 'Strong'
    }
    return password;
}



console.log(passwordStrenght('DFa'));