import { MysqlDBDataSource, dataSourceStart } from "./db";
import {Boletim} from "./boletim"

export class Service{    
    start(){
        dataSourceStart();
    }
    insert(boletim: Boletim){
        MysqlDBDataSource.manager.save(boletim);
        return boletim;
    }
    async listagem(){
        let list = await MysqlDBDataSource.manager.find(Boletim);
        return list;
    }
}