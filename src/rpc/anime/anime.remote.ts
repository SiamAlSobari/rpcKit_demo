import { query } from "$app/server";
import { AllAnimes } from "./anime.server";

export const qAllAnimes = query(()=>{
    return AllAnimes();
})