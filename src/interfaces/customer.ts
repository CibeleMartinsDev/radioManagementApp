import Advertisement from "./advertisement";

export default interface Customer {
    id: number;
    name: string;
    address: string;
    phone_number_1: string;
    phone_number_2: string;
    email: string;
    advertisements: Advertisement[];
}