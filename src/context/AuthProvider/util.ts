import { ApiAuth } from "../../services/api";
import { IUser } from "./types";

export function SetUserLocalStorage(user: IUser | null)
{
    localStorage.setItem('w3kSistem', JSON.stringify(user));
}

export function GetUserLocalStorage()
{
    const json = localStorage.getItem('w3kSistem');

    if(!json)
    {
        return null
    }

    const user = JSON.parse(json);
    return user ?? null;
}

export async function LoginRequest(email: string, password: string){
    try{
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('client_id', 'resourceownerclient');
        params.append('client_secret', 'greendocs');
        params.append('scope', 'greendocs');
        params.append('username', email);
        params.append('password', password);

        const request = await ApiAuth.post('connect/token',
            params
        )
        
        return request.data;
    }catch(error)
    {
        return null;
    }
}