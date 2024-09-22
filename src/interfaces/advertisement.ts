export default interface Advertisement {
    id: number;
    name: string;
    customer: string;
    frequencyDivulgation: string; 
    advertisingSchedules: string[];
    amount: string;
    datePayment: number; 
    active: boolean;
    dateRegister: string; 
    observation: string;
    dateActivation: string | null; 
    dateDeactivation: string | null; 
}