import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { BiodataData, LanguageCode, TemplateId } from "@/types/biodata";
import { SAMPLE_MARATHI_BIODATA, SAMPLE_ENGLISH_BIODATA } from "@/data/sampleBiodata";

export const INITIAL_BIODATA: BiodataData = {
  profile: {
    language: "mr",
    biodataTitle: "बायोडाटा",
    deitySymbol: "ganesh",
    deityName: "॥ श्री गणेशाय नमः ॥",
    photoUrl: "",
    photoShape: "rounded",
    photoPosition: "top-right",
  },
  personal: {
    fullName: "",
    gender: "male",
    dob: "",
    birthTime: "",
    birthPlace: "",
    height: "",
    weight: "",
    bloodGroup: "",
    complexion: "",
    religion: "हिंदू",
    caste: "",
    subCaste: "",
    gotra: "",
    rashi: "",
    nakshatra: "",
    charan: "",
    nadi: "",
    gan: "",
    manglik: "No",
    maritalStatus: "Never Married",
  },
  education: {
    highestEducation: "",
    degreeDetails: "",
    college: "",
    occupation: "",
    designation: "",
    companyName: "",
    workLocation: "",
    annualIncome: "",
    experienceYears: "",
    skills: "",
    languagesKnown: "मराठी, English",
  },
  family: {
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    brotherCount: "०",
    marriedBrothers: "०",
    sisterCount: "०",
    marriedSisters: "०",
    familyType: "Nuclear",
    familyValues: "Moderate",
    familyLocation: "",
    nativePlace: "",
    maternalUncleName: "",
    maternalUnclePlace: "",
    relativeSurnames: "",
  },
  expectations: {
    preferredAgeMin: "२२",
    preferredAgeMax: "२८",
    preferredHeightMin: "",
    preferredEducation: "",
    preferredOccupation: "",
    preferredLocation: "",
    maritalStatusExpected: "Never Married",
    diet: "Vegetarian",
    smoking: "No",
    drinking: "No",
    hobbies: "",
    interests: "",
    partnerExpectations: "",
    otherInformation: "",
  },
  contact: {
    contactPerson: "",
    phone1: "",
    phone2: "",
    email: "",
    residentialAddress: "",
  },
  design: {
    templateId: "royal-maroon",
    primaryAccent: "#722F37",
    fontPair: "traditional",
    photoBorder: "gold",
    showAstrology: true,
    showExpectations: true,
    showPhoto: true,
    showWatermark: false,
  },
};

interface BiodataStoreState {
  currentStep: number;
  data: BiodataData;
  isHydrated: boolean;
  selectedFormatForCheckout: "image" | "pdf" | "word" | null;
  
  // Actions
  setField: <K extends keyof BiodataData, F extends keyof BiodataData[K]>(
    section: K,
    field: F,
    value: BiodataData[K][F]
  ) => void;
  setSection: <K extends keyof BiodataData>(
    section: K,
    values: Partial<BiodataData[K]>
  ) => void;
  setTemplate: (templateId: TemplateId) => void;
  setPhoto: (photoUrl: string) => void;
  setLanguage: (lang: LanguageCode) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  loadSampleData: (lang?: "mr" | "en") => void;
  reset: () => void;
  setSelectedFormatForCheckout: (format: "image" | "pdf" | "word" | null) => void;
  setHydrated: (hydrated: boolean) => void;
}

export const useBiodataStore = create<BiodataStoreState>()(
  persist(
    (set) => ({
      currentStep: 1,
      data: SAMPLE_MARATHI_BIODATA, // Pre-populated with realistic Marathi sample so preview is immediately gorgeous!
      isHydrated: false,
      selectedFormatForCheckout: null,

      setField: (section, field, value) =>
        set((state) => ({
          data: {
            ...state.data,
            [section]: {
              ...state.data[section],
              [field]: value,
            },
          },
        })),

      setSection: (section, values) =>
        set((state) => ({
          data: {
            ...state.data,
            [section]: {
              ...state.data[section],
              ...values,
            },
          },
        })),

      setTemplate: (templateId) =>
        set((state) => ({
          data: {
            ...state.data,
            design: {
              ...state.data.design,
              templateId,
            },
          },
        })),

      setPhoto: (photoUrl) =>
        set((state) => ({
          data: {
            ...state.data,
            profile: {
              ...state.data.profile,
              photoUrl,
            },
          },
        })),

      setLanguage: (lang) =>
        set((state) => ({
          data: {
            ...state.data,
            profile: {
              ...state.data.profile,
              language: lang,
              biodataTitle: lang === "mr" ? "बायोडाटा" : "MARRIAGE BIODATA",
              deityName:
                lang === "mr"
                  ? "॥ श्री गणेशाय नमः ॥"
                  : "|| Shree Ganeshaya Namaha ||",
            },
          },
        })),

      setCurrentStep: (step) =>
        set(() => ({
          currentStep: Math.min(Math.max(step, 1), 7),
        })),

      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 7),
        })),

      previousStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),

      loadSampleData: (lang = "mr") =>
        set(() => ({
          data: lang === "en" ? SAMPLE_ENGLISH_BIODATA : SAMPLE_MARATHI_BIODATA,
        })),

      reset: () =>
        set(() => ({
          currentStep: 1,
          data: INITIAL_BIODATA,
        })),

      setSelectedFormatForCheckout: (format) =>
        set(() => ({
          selectedFormatForCheckout: format,
        })),

      setHydrated: (hydrated) =>
        set(() => ({
          isHydrated: hydrated,
        })),
    }),
    {
      name: "vivah_biodata_storage_v1",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
