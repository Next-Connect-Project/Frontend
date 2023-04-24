import { Cookies } from "react-cookie";

export const setCookie = (name: string, value: string, option?: any) => {
    const cookies = new Cookies();
    return cookies.set(name,value,{...option})
}

export const getCookie = (name: string) => {
    const cookies = new Cookies();
    return cookies.get(name);
}

export const removeCookie = (name: string) => {
    const cookies = new Cookies();
    return cookies.remove(name);
}