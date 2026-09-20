export type LanguageCode = 'mr' | 'en' | 'hi' | 'gu' | 'te' | 'bn';

export type TemplateId =
  | 'royal-maroon'
  | 'royal-maroon-illustrated'
  | 'maharashtrian-heritage'
  | 'classic-ivory'
  | 'royal-burgundy'
  | 'temple-heritage'
  | 'gold-filigree'
  | 'emerald-heritage'
  | 'lotus-elegance'
  | 'modern-burgundy'
  | 'minimal-editorial'
  | 'navy-silver'
  | 'contemporary-sand'
  | 'rose-minimal'
  | 'rose-gold'
  | 'classic-red';

export type TemplateCategory =
  | 'All'
  | 'Classic'
  | 'Traditional'
  | 'Modern'
  | 'Elegant'
  | 'Minimal'
  | 'Floral'
  | 'Royal'
  | 'Marathi';

export type ReligionType =
  | 'Hindu'
  | 'Buddhist'
  | 'Jain'
  | 'Muslim'
  | 'Christian'
  | 'Sikh'
  | 'Other';

export interface BiodataProfile {
  language: LanguageCode;
  biodataTitle: string;
  deitySymbol: 'ganesh' | 'om' | 'swastik' | 'kalash' | 'lotus' | 'none';
  deityName: string;
  photoUrl: string;
  photoShape: 'rounded' | 'circle' | 'square';
  photoPosition: 'top-right' | 'top-left' | 'center';
}

export interface PersonalDetails {
  fullName: string;
  gender: 'male' | 'female' | 'other';
  dob: string;
  birthTime: string;
  birthPlace: string;
  height: string;
  weight: string;
  bloodGroup: string;
  complexion: string;
  religion: string;
  caste: string;
  subCaste: string;
  gotra: string;
  rashi: string;
  nakshatra: string;
  charan: string;
  nadi: string;
  gan: string;
  manglik: 'No' | 'Yes' | 'Anshik' | 'Don\'t Know';
  maritalStatus: 'Never Married' | 'Divorced' | 'Widowed' | 'Awaiting Divorce';
}

export interface EducationCareer {
  highestEducation: string;
  degreeDetails: string;
  college: string;
  occupation: string;
  designation: string;
  companyName: string;
  workLocation: string;
  annualIncome: string;
  experienceYears: string;
  skills: string;
  languagesKnown: string;
}

export interface FamilyDetails {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brotherCount: string;
  marriedBrothers: string;
  sisterCount: string;
  marriedSisters: string;
  familyType: 'Joint' | 'Nuclear' | 'Extended';
  familyValues: 'Traditional' | 'Moderate' | 'Liberal';
  familyLocation: string;
  nativePlace: string;
  maternalUncleName: string;
  maternalUnclePlace: string;
  relativeSurnames: string;
}

export interface ExpectationsDetails {
  preferredAgeMin: string;
  preferredAgeMax: string;
  preferredHeightMin: string;
  preferredEducation: string;
  preferredOccupation: string;
  preferredLocation: string;
  maritalStatusExpected: string;
  diet: 'Vegetarian' | 'Non-Vegetarian' | 'Eggetarian' | 'Jain' | 'Any';
  smoking: 'No' | 'Occasionally' | 'Doesn\'t Matter';
  drinking: 'No' | 'Socially' | 'Doesn\'t Matter';
  hobbies: string;
  interests: string;
  partnerExpectations: string;
  otherInformation: string;
}

export interface ContactDetails {
  contactPerson: string;
  phone1: string;
  phone2: string;
  email: string;
  residentialAddress: string;
}

export interface DesignSettings {
  templateId: TemplateId;
  primaryAccent: string;
  fontPair: 'traditional' | 'modern' | 'editorial';
  photoBorder: 'gold' | 'burgundy' | 'none' | 'double';
  showAstrology: boolean;
  showExpectations: boolean;
  showPhoto: boolean;
  showWatermark: boolean;
}

export interface BiodataData {
  profile: BiodataProfile;
  personal: PersonalDetails;
  education: EducationCareer;
  family: FamilyDetails;
  expectations: ExpectationsDetails;
  contact: ContactDetails;
  design: DesignSettings;
}

export interface TemplateMeta {
  id: TemplateId;
  name: string;
  marathiName: string;
  category: TemplateCategory;
  description: string;
  tags: string[];
  isPopular?: boolean;
  isNew?: boolean;
  primaryColor: string;
  secondaryColor: string;
  thumbnailPlaceholder: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  marathiTitle?: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  coverGradient: string;
  content: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  role: string;
  rating: number;
  review: string;
  avatarText: string;
  date: string;
  templateUsed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  marathiQuestion?: string;
  answer: string;
  category: 'General' | 'Templates' | 'Photos' | 'Downloads' | 'Privacy';
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: number;
  originalPrice: number;
  description: string;
  format: 'Free' | 'JPG / PNG' | 'High-Res PDF' | 'Editable DOCX';
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}
