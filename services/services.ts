import api from "./axios"

export const getDolarsInfo = async (): Promise<Dolar[]> => {
    const { data } = await api.get<Dolar[]>('/dolares');
    return data;
};

export const getDolarInfo = async (casa: Casas): Promise<Dolar> =>{
    const { data } = await api.get<Dolar>(`/dolares/${casa}`);
    return data;
}
export const  getDolarByTime = async (tipo: Casas, fecha: Date): Promise<Dolar> => {
    const { data } = await api.get(`/cotizaciones/dolares/${tipo}/${fecha}`)
    return data
}