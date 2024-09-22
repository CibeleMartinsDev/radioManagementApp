export default interface Advertisement {
    id?: number;
    name: string;
    customer: string;
    frenquencyDivulgation: string; 
    advertisingSchedules: string[];
    amount: string;
    datePayement: number | string | undefined; 
    active: boolean;
    dateRegister?: string; 
    observation: string;
    dateActivation?: string | null; 
    dateDeactivation?: string | null; 
}