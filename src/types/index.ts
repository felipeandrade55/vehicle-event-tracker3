export type UserRole = "admin" | "associate";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  chassisNumber: string;
  color: string;
  associateId: string;
}

export interface Associate extends User {
  cpf: string;
  phone: string;
  plan: Plan;
  contractId: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  vehicles: Vehicle[];
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  coverage: string[];
  type: "basic" | "intermediate" | "premium";
  price: number;
  features: string[];
  assistanceDetails: string[];
}

export interface Occurrence {
  id: string;
  type: "collision" | "theft" | "robbery";
  date: string;
  description: string;
  status: "pending" | "in_progress" | "completed" | "rejected";
  documents: string[];
  associateId: string;
}