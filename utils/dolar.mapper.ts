import { OptionType } from "@/context";

class DolarMapper {
    static mapCurrencyToOption(dolar: Dolar): OptionType {
        return {
            nombre: dolar.nombre,
            casa: dolar.casa,
            moneda: dolar.moneda
        }
    }
}
export { DolarMapper}