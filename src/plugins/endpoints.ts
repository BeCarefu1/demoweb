import {Settings} from "@/plugins/settings";

export class Endpoints{

    static GetEntry(id: string){
        return Settings.baseUrl() + `entries/${id}`;
    }

    static GetEntryById(id: string){
        return Settings.baseUrl() + `entries/byName/${id}`;
    }

    static Page_GetList(){
        return Settings.baseUrl() + `entries?apiId=page`;
    }

    static Menu_GetList(){
        return Settings.baseUrl() + `entries?apiId=Menu`;
    }

    static News_GetList(){
        return Settings.baseUrl() + `entries?apiId=News`;
    }

    static Reviews_GetList(){
        return Settings.baseUrl() + `entries?apiId=Review`;
    }

    static Clients_GetList(){
        return Settings.baseUrl() + `entries?apiId=Client`;
    }

    static Banner_GetList(){
        return Settings.baseUrl() + `entries?apiId=Banner`;
    }

    static Vacancy_GetList(){
        return Settings.baseUrl() + `entries?apiId=Vacancy`;
    }

    static File_Download(id: string){
        return Settings.baseUrl() + `files/${id}`;
    }


}