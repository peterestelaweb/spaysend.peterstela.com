export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  highlight?: string[]; // Keys to highlight in the mockup
  type: 'intro' | 'step' | 'success';
  mockupType: 'none' | 'pdf' | 'form' | 'success';
}

export interface FormState {
  recipientName: string;
  swift: string;
  accountNumber: string;
  routingNumber: string;
  city: string;
  state: string;
  zip: string;
  address: string;
  reference: string;
  feeOption: string;
  accountType: string;
}