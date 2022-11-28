import Axios, {AxiosPromise} from "axios";
import {Endpoints} from "@/plugins/endpoints";

export class Controller{
    GetPages(): AxiosPromise<any> {
        return Axios.get(Endpoints.Page_GetList());
    }

    GetMenus(): AxiosPromise<any> {
        return Axios.get(Endpoints.Menu_GetList());
    }

    GetNews(): AxiosPromise<any>{
        return Axios.get(Endpoints.News_GetList());
    }

    GetReviews(): AxiosPromise<any>{
        return Axios.get(Endpoints.Reviews_GetList());
    }

    GetClients(): AxiosPromise<any>{
        return Axios.get(Endpoints.Clients_GetList());
    }

    GetBanner(): AxiosPromise<any>{
        return Axios.get(Endpoints.Banner_GetList());
    }

    GetEntry(id: string){
        return Axios.get(Endpoints.GetEntry(id));
    }

    GetPageByName(name: string){
        return Axios.get(Endpoints.GetEntryById(name));
    }
}