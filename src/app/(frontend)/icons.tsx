import {
  Award,
  Building2,
  Clock,
  Container,
  Facebook,
  Globe,
  Handshake,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Ship,
  TrendingUp,
  Twitter,
  Users,
  Wrench,
} from "lucide-react";

export const heroCardIcons = {
  ship: <Ship className="h-10 w-10 text-secondary mb-3" />,
  globe: <Globe className="h-10 w-10 text-secondary mb-3" />,
  growth: <TrendingUp className="h-10 w-10 text-secondary mb-3" />,
};

export const coreValuesIcons = {
  shield: Shield,
  globe: Globe,
  handshake: Handshake,
  award: Award,
};

export const impactIcons = {
  users: Users,
  globe: Globe,
  growth: TrendingUp,
  shield: Shield,
};

export const servicesIcons = {
  ship: Ship,
  container: Container,
  wrench: Wrench,
  building: Building2,
};

export const contactInformationIcons = {
  location: MapPin,
  phone: Phone,
  mail: Mail,
  hours: Clock,
};

export const socialsIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
};
