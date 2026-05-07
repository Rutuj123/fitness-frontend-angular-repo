export function getRoleFromToken():string | null{
    const token =localStorage.getItem('token');
    if(!token)
        return null;
    console.log('token in guard  '+token);
    const payload=JSON.parse(atob(token.split('.')[1]));
    console.log('payload:',payload);
    return payload.role;
}

export function isTokenExpired():boolean{
    const token = localStorage.getItem('token');
    if(!token)return true;
    try{
        const payload=JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp*1000;
        return Date.now() >exp

    }catch{
        return true;
    }

}