export class Entrevista {
    private _idEmpresa:string;
    private _idEmpregado:string;
    private _idEntrevista:string;
    private _nomeEmpregado: string;
    private _nomeEmpresa: string;
    private _dataEntrevista: Date;

    constructor(
        idEmpresa:string,
        idEmpregado:string,
        dataEntrevista:Date
    ){
        this._idEmpresa=idEmpresa;
        this._idEmpregado=idEmpregado;
        this._dataEntrevista=dataEntrevista;
    }

    public get idEmpresa(){
        return this._idEmpresa;
    }

    public get idEmpregado(){
        return this._idEmpregado;
    }

    public get idEntrevista(){
        return this._idEntrevista;
    }

    public get dataEntrevista(): Date {
        return this._dataEntrevista;
    }
    public set dataEntrevista(value: Date) {
        this._dataEntrevista = value;
    }
    public get nomeEmpregado(): string {
        return this._nomeEmpregado;
    }
    public set nomeEmpregado(value: string) {
        this._nomeEmpregado = value;
    }
    public get nomeEmpresa(): string {
        return this._nomeEmpresa;
    }
    public set nomeEmpresa(value: string) {
        this._nomeEmpresa = value;
    }
}
