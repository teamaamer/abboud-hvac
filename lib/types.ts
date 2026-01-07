import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface WhyChooseUsItem {
  icon: LucideIcon;
  text: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Review {
  name: string;
  location: string;
  review: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  message: string;
  contactMethod: 'call' | 'text';
}

export interface EstimateFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

export interface MobileBottomBarProps {
  onEstimateClick: () => void;
}
