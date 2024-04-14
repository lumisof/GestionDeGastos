export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Gasto = {
    id:string
    gastoName: string
    amount: number
    categoria:string
    date: Value
}

//copia temporal que no tiene id todavia: 
export type GastoSinId = Omit<Gasto, 'id'>

export type Categoria = {
    id: string
    name: string
    icon: string
    color: string
}