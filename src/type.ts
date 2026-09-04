export interface CountriesType {
    name:{
        common:string,
        official:string
    },
    ccn3:{
        ccn3: string
    },
    capital:{
        capital:string[]
    },
    population:{
        population:number,
    }
    flags:{
        flags:{
            png:string,
            alt:string
        }
    },
}