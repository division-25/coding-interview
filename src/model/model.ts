export interface UserInfo {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  title: string;
  isGlobalAdmin: boolean;
  organizations: UserInfoOrgs[];
}

export interface FluentOption extends HTMLElement {
  value: any;
}

export interface UserInfoOrgs {
  id: number;
  name: string;
  organizationLogoDownloadUrl: {
    url: string;
  };
  isAdmin: boolean;
  isUserAdmin: boolean;
  isManager: boolean;
  isDeveloper: boolean;
  isSalesManager: boolean;
  isSalesPerson: boolean;
  isProjectEngineer: boolean;
  isProjectTechnician: boolean;
  isProjectDeveloper: boolean;
  isProjectCxEngineer: boolean;
}

export interface ProjectInfo {
  id: number;
  organizationId: number;
  organizationName: string;
  name: string;
  number: string;
  organizationProjectNumber: number;
  // description: string; // use the other description
  salesperson: string;
  status: string;
  data: ProjectInfoData;
  estimateUsers: ProjectInfoUser[];
}

export interface ProjectInfoData {
  projectInfo: {
    description: string;
    startDate: string;
    endDate: string;
    totalBuildingSqFt: number;
    address: ProjectInfoAddress
    bidDue: string;
    productTypes: string[];
    tags: string[];
  };
  bidInfo: {
    markets: string[];
    categoryIds: number[];
    categoryNames: string[];
    competingBidders: string[];
  };
  companyInfo: {
    address: ProjectInfoAddress;
    phoneNumber: string;
    faxNumber: string;
  };
  teamInfo: {
    projectManager: string;
    projectSalesperson: string;
    projectEngineer: string;
    projectTechnician: string;
    drawnBy: string;
    approvedBy: string;
  };
  floorsInfo: {
    floors: ProjectInfoFloor[];
  };
  contractingTeam: {
    architect: ProjectInfoTeam;
    consultingEngineer: ProjectInfoTeam;
    primeContractor: ProjectInfoTeam;
    contractWith: ProjectInfoTeam;
  }
  customFields: ProjectInfoCustomField[];
}

export interface ProjectInfoUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ProjectInfoTeam {
  companyName: string;
  contact: string;
  phoneNumber: string;
}

export interface ProjectInfoAddress {
  line: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

export interface ProjectInfoFloor {
  id: string;
  number: string;
  alias: string;
  appoximateSqFt: number;
}

export interface ChangeOrderList {
  id: number;
  order: number;
  name: string;
  description: string;
  finalEstimateid: number;
  status: string;
  reference: ChangeOrderReference;
  clientCONumber: string;
  mechCONumber: string;
  mechCOPNumber: string;
  customValues: CustomColumnChangeOrder[];
  sellPrice: number;
  grossMargin: PercentageValue;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

export interface CustomColumnChangeOrder {
  id: string;
  value: string;
}

export enum ChangeOrderReference {
  Verbal = "Verbal",
  Email = "Email",
  PurchaseOrder = "PurchaseOrder",
  Text = "Text",
  Other = "Other",
}

export interface FinalEstimate extends ModuleSummary {
  baseEstimateId: number;
  alternates: FinalEstimateAlternateEstimates[];
  isAwarded: boolean;
  id: number;
  organizationId: number;
  organizationName: number;
  projectName: string;
  name: string;
  description: string;
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  materialWarranty: PercentageValue;
  materialFreight: PercentageValue;
  materialSalesTax: PercentageValue;
  materialWFS: PercentageValue;
  materialWefs: number;
  grossMargin: PercentageValue;
  sellPrice: number;
  subcontractorModule: subcontractorModuleSummary;
  perDiemModule: ExpensesModuleSummary;
  laborModule: LaborModuleSummary;
  materialModule: materialModuleSummary;
  customModule: CustomModuleSummary;
  totalsModule: totalsModuleSummary;
  pointListModule: PointListModuleSummary;
  serviceTotals: ServiceTotals;
}

// =================================================================
// =================================================================
export interface ServiceTotals {
  moduleSummaries: ServiceModuleSummary;
  serviceSummaries: {
    categories: ServiceCategory[];
    customCategory: ServiceCategory;
    grandTotals: ServiceTermSummary;
  };
}

export interface ServiceModuleSummary {
  subcontractor: ServiceModule;
  expenses: ServiceModule;
  custom: ServiceModule;
  labor: ServiceModule;
  material: ServiceModule;
  grandTotals: {
    terms: ServiceModuleTermSummary[];
    totalTermValues: ModuleSummary;
    averageTermValues: ModuleSummary;
  }
}

export interface ServiceCatalog {
  categories: ServiceCatalogCategory[];
  customCategory: ServiceCatalogService[];
}

export interface ServiceCatalogCategory {
  id: number;
  name: string;
  description: string;
  order: number;
  subCategories: ServiceCatalogSubCategory[];
}


export interface ServiceCatalogSubCategory {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  removedAt: string;
  order: number;
  services: ServiceCatalogService[];
}

export interface ServiceCatalogService {
  id: number;
  subCategoryId: number;
  baseEstimateId: number;
  name: string;
  description: string;
  removedAt: string;
  order: number;
}

// =================================================================
// =================================================================

export interface ServiceCategory {
  id: number;
  name: string;
  subCategories: ServiceOrgSubCategory[];
}

export interface ServiceOrgSubCategory extends ServiceCategory {
  id: number;
} 
export interface ServiceCategory {
  name: string;
  services: ServiceCategoryService[];
  terms: ServiceModuleTermSummary[];
  totalTermValues: ModuleSummary;
  averageTermValues: ModuleSummary;
}

export interface ServiceCategoryService {
  id: number;
  name: string;
  terms: ServiceModuleTermSummary[];
  totalTermValues: ModuleSummary;
  averageTermValues: ModuleSummary;
}

export interface ServiceModule {
  items: ServiceModuleItem[];
  terms: ServiceModuleTermSummary[];
  totalTermValues: ModuleSummary;
  averageTermValues: ModuleSummary;
}

export interface ServiceModuleItem {
  name: string;
  childItems: ServiceModuleItem[];
  terms: ServiceModuleTermSummary[];
  totalTermValues: ModuleSummary;
  averageTermValues: ModuleSummary;
}

export interface ServiceTermSummary {
  terms: ServiceModuleTermSummary[];
  totalTermValues: ModuleTermSummary;
  averageTermValues: ModuleSummary;
}

export interface ServiceModuleTermSummary extends ModuleSummary {
  number: number;
  hasTotalDirectCostOverride: boolean;
  hasGrossMarginOverride: boolean;
}

export interface ModuleSummary {
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  materialWFS: PercentageValue;
  totalDirectCost: number;
  grossMargin: PercentageValue;
  sellPrice: number;
  laborHours: PercentageValue;
  tdcInfo: PercentageValue;
}

export interface ModuleTermSummary {
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  aggregatedWEFS: PercentageValue;
  totalDirectCost: number;
  grossMargin: PercentageValue;
  sellPrice: number;
  laborHours: PercentageValue;
  tdcInfo: PercentageValue;
  materialWFS: PercentageValue;
}

export interface FinalEstimateList {
  metadata: {
    totalCount: number;
  };
  items: FinalEstimateInfo[];
}

export interface PointsListTab {
  id: string;
  name: string;
  description: string | null;
}

export interface PointsList {
  id: string;
  name: string;
  description: string | null;
  properties: {
    directCost: number;
    laborCost: number;
    materialCost: number;
    laborHours: number;
    tasks: PointsListTask[];
  };
  systemGroups: PointsListSystemGroup[];
}

export interface PointsListSystemGroup {
  id: string;
  name: string;
  description: null;
  isDefault: boolean;
  order: number;
  tabId: string;
  systems: PointsListSystem[];
}

export interface PointsListSystem {
  id: string;
  systemGroupId: string;
  paletteComponentId: string;
  order: number;
  properties: {
    systemTotal: {
      laborCost: number;
      laborHours: number;
      materialCost: OverridableNumber;
      directCost: OverridableNumber;
      partTasks: PointsListPartTask[];
      ports: PointsListPort[]
    };
    allSystemsTotal: {
      laborCost: number;
      laborHours: number;
      materialCost: OverridableNumber;
      directCost: OverridableNumber;
      partTasks: PointsListPartTask[];
      ports: PointsListPort[]
    };
    portInputOutputTotals: any[]; 
    taskRates: any[];
  };
  data: PointsListSystemInfo;
  partGroups: PointsListPartGroup[];

}

export interface PointsListPartGroup {
  id: string;
  systemId: string;
  name: string;
  description: string;
  isDefault: boolean;
  order: number;
  properties: {
    partsCount: number;
  };
  parts: PointsListPart[];
}

export interface PointsListPart {
  id: string;
  partGroupId: string;
  paletteComponentid: string;
  order: number;
  isExcluded: boolean;
  properties: {
    directCost: number;
    laborCose: number;
    materialCost: number;
    laborHours: number;
    laborMinutes: number;
  }
  data: {
    quantity: number;
    name: OverridableString;
    description: OverridableString;
    unitCost: OverridableNumber;
    manufacturer: OverridableString;
    pointDescription: OverridableString;
    modelNumber: OverridableString;
    listPrice: OverridableString;
    weight: OverridableNumber;
    location: OverridableString;
    supplier: OverridableString;
    salesNotes: OverridableString;
    defaultPartType: Overridable<DefaultPartType>;
    providedBy: Overridable<PartResponsibleParty>;
    installedBy: Overridable<PartResponsibleParty>;
    wiredBy: Overridable<PartResponsibleParty>;
    applicableDiagrams: any; // skipped
    customProperties: any; //skipped
    // ports: Overridable<PointsListPort[]>; // Changed from this to next line
    ports: PointsListPort[];
    stackedPorts: Overridable<PartStackedPorts[]>;
    tags: Overridable<string[]>;
    taskMinutes: PointsListPartTaskMinutes;
  }
}

export interface PartStackedPorts {
  id: string;
  name: string;
  activePortId: string;
  ports: PartStackedPort;
}

export interface PartStackedPort {
  id: string;
  name: string;
  customTypeId: string;
  categoryType: PartPortCategory;
  type: PartPortType;
}

export enum DefaultPartType {
  InputOutput = "InputOutput",
  Controller = "Controller"
}

export enum PartResponsibleParty {
  Self = "Self",
  Subcontractor = "Subcontractor",
  Other = "Other",
  Existing = "Existing",
}

export enum PartPortType {
  Analog = "Analog",
  Binary = "Binary",
  Universal = "Universal",
  Pulse = "Pulse",
  PulseWidth = "PulseWidth",
  VoltageSink = "VoltageSink",
  VoltageSource = "VoltageSource",
  Common = "Common",
  DryContact = "DryContact",
  BacnetMsTp = "BacnetMsTp",
  Ethernet = "Ethernet",
  Wifi = "Wifi",
  Generic = "Generic",
  PolyTube = "PolyTube"
}

export enum PartPortCategory {
  Input = "Input",
  Output = "Output",
  Network = "Network",
  Power = "Power",
  Other = "Other"
}

export interface PointsListSystemInfo {
  name: OverridableString;
  description: OverridableString;
  classification: {
    value: {
      id: number;
      name: string;
      laborMultiplier: number;
    }
  };
  tags: {
    value: string[];
    override: string[];
  };
  typicalCount: number;
  instanceNames: string[];
  salesNotes: string[];
}

export interface PointsListPort {
  allNames: string[];
  isConvertedDryContact: boolean;
  categoryType: string;
  customId: string; // TODO confirm this type
  customCategoryTypeName: string; // TODO confirm this type
  customTypeName: string; // TODO confirm this type
  type: string;
  quantity: OverridableNumber;
  properties: PointsListPortProperty[];
}

export interface PointsListPortProperty {
  type: string;
  value: Overridable<number>;
}

export interface PointsListPartTask {
  taskId: number;
  hours: OverridableNumber;
}

export interface PointsListPartTaskMinutes {
  taskId: number;
  minutes: OverridableNumber;
}

export interface PointsListTask {
  taskId: number;
  idDefault: boolean;
  name: OverridableString;
  isRemoved: OverridableBoolean;
}

export interface FinalEstimateAlternateEstimates {
  id: number;
  name: string;
  description: string;
}

export interface FinalEstimateInfo {
  id: number;
  name: string;
  description: string;
  isAwarded: boolean;
  sellPrice: number;
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  materialWefs: number;
  grossMargin: PercentageValue;
}

export interface ChangeOrder extends Estimate {
  finalEstimateId: number;
  status: ChangeOrderStatus;
  reference: ChangeOrderReference;
  clientCONumber: string;
  mechCONumber: string;
  mechCOPNumber: string;
  customValues: ChangeOrderCustomValue[]
}

interface ChangeOrderCustomValue {
  id: string;
  value: string;
}

export enum ChangeOrderStatus {
  InProgress = "InProgress",
  InReview = "InReview",
  Ready = "Ready",
  Submitted = "Submitted",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Canceled = "Canceled",
  OnHold = "OnHold"
}

export interface Estimate {
  isCompoundEscalationEnabled: boolean;
  compoundEscalationPercent: number;
  terms: EstimateTermSummary[];
  id: number;
  organizationId: number;
  organizationName: string;
  projectName: string;
  name: string;
  description: string;
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  materialWarranty: PercentageValue;
  materialSalesTax: PercentageValue;
  materialWFS: PercentageValue;
  materialWefs: number;
  grossMargin: PercentageValue;
  sellPrice: number;
  subcontractorModule: subcontractorModuleSummary;
  perDiemModule: ExpensesModuleSummary;
  laborModule: LaborModuleSummary;
  materialModule: materialModuleSummary;
  customModule: CustomModuleSummary;
  totalsModule: totalsModuleSummary;
  pointListModule: PointListModuleSummary;
}

export interface EstimateTermSummary {
  id: number;
  order: number;
  number: number;
  estimateId: number;
  properties: {
    moduleSummaries: {
      subcontractor: EstimateTermSubcontractor;
      expenses: EstimateTermExpenses;
      custom: EstimateTermCustom;
      labor: EstimateTermLabor;
      material: EstimateTermMaterial;
    };
    compoundEscalation: {
      hasEffectiveEscalation: boolean;
      effectiveEscalationPercent: number; // TODO check this type
    }
    excludeRegularEscalation: boolean;
    directCost: OverridableNumber;
    contingency: Overridable<PercentageValue>;
    escalation: Overridable<PercentageValue>;
    materialWarranty: PercentageValue;
    materialFreight: PercentageValue;
    materialSalesTax: PercentageValue;
    materialWFS: PercentageValue;
    materialWefs: PercentageValue;
    markup: Overridable<PercentageValue>;
    grossMargin: Overridable<PercentageValue>;
    markupCustomer: PercentageValue;
    sellPrice: OverridableNumber;
    dc: number;
    dcInfo: PercentageValue;
    tdc: number;
    tdcInfo: PercentageValue;
  }
  updatedAt: string;
}

export interface EstimateTermSubcontractor extends EstimateTermModuleSummary {
  quantity: number;
}
export interface EstimateTermExpenses extends EstimateTermModuleSummary {
}
export interface EstimateTermCustom extends EstimateTermModuleSummary {
}
export interface EstimateTermLabor extends EstimateTermModuleSummary {
  grandTotalHours: number;
}
export interface EstimateTermMaterial extends EstimateTermModuleSummary {
  quantity: number;
}

export interface EstimateTermModuleSummary {
  compoundEscalation: {
    hasEffectiveEscalation: boolean;
    effectiveEscalationPercent: number; // TODO check this type
  }
  excludeRegularEscalation: boolean;
  directCost: OverridableNumber;
  contingency: Overridable<PercentageValue>;
  escalation: Overridable<PercentageValue>;
  materialWarranty: PercentageValue;
  materialFreight: PercentageValue;
  materialSalesTax: PercentageValue;
  materialWFS: PercentageValue;
  materialWefs: PercentageValue;
  markup: Overridable<PercentageValue>;
  grossMargin: Overridable<PercentageValue>;
  markupCustomer: PercentageValue;
  sellPrice: OverridableNumber;
  dc: number;
  dcInfo: PercentageValue;
  tdc: number;
  tdcInfo: PercentageValue;
}

export interface Term {
  id: number;
  order: number;
  number: number;
  estimateid: number;
  data: {
    subCategories: TermSubCategory[];
  };
  properties: {
    moduleSummaries: {
      subcontractor: EstimateTermSubcontractor;
      expenses: EstimateTermExpenses;
      custom: EstimateTermCustom;
      labor: EstimateTermLabor;
      material: EstimateTermMaterial;
    };
    compoundEscalation: {
      hasEffectiveEscalation: boolean;
      effectiveEscalationPercent: number; // TODO check this type
    };
    excludeRegularEscalation: boolean;
    directCost: OverridableNumber;
    contingency: Overridable<PercentageValue>;
    escalation: Overridable<PercentageValue>;
    materialWarranty: PercentageValue;
    materialFreight: PercentageValue;
    materialSalesTax: PercentageValue;
    materialWFS: PercentageValue;
    materialWefs: PercentageValue;
    markup: Overridable<PercentageValue>;
    grossMargin: Overridable<PercentageValue>;
    markupCustomer: PercentageValue;
    sellPrice: OverridableNumber;
    dc: number;
    dcInfo: PercentageValue;
    tdc: number;
    tdcInfo: PercentageValue;
  }
}

export interface TermSubCategory {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  };
  services: TermService[];
  compoundEscalation: {
    hasEffectiveEscalation: boolean;
    effectiveEscalationPercent: number; // TODO check this type
  }
  excludeRegularEscalation: boolean;
  directCost: OverridableNumber;
  contingency: Overridable<PercentageValue>;
  escalation: Overridable<PercentageValue>;
  materialWarranty: PercentageValue;
  materialFreight: PercentageValue;
  materialSalesTax: PercentageValue;
  materialWFS: PercentageValue;
  materialWefs: PercentageValue;
  markup: Overridable<PercentageValue>;
  grossMargin: Overridable<PercentageValue>;
  markupCustomer: PercentageValue;
  sellPrice: OverridableNumber;
  dc: number;
  dcInfo: PercentageValue;
  tdc: number;
  tdcInfo: PercentageValue;
}

export interface TermService {
  id: number;
  organizationId: number;
  organizationName: string;
  projectName: string;
  name: string;
  description: string;
  baseEstimateId: number;
  termId: number;
  quantity: number;
  subCategory: {
    id: number;
    categoryId: number;
    name: string;
    description: string;
  };
  templateServiceId: number;
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  materialWarranty: PercentageValue;
  materialFreight: PercentageValue;
  materialSalesTax: PercentageValue;
  materialWFS: PercentageValue;
  materialWefs: number;
  markup: PercentageValue;
  grossMargin: PercentageValue;
  sellPrice: number;
  dc: number;
  dcInfo: PercentageValue;
  tdc: number;
  tdcInfo: PercentageValue;
  updatedAt: string;
  subcontractorModule: subcontractorModuleSummary;
  perDiemModule: ExpensesModuleSummary;
  laborModule: LaborModuleSummary;
  materialModule: materialModuleSummary;
  customModule: CustomModuleSummary;
  totalsModule: totalsModuleSummary;
  pointListModule: null;
}

export interface CustomModuleSummary {
  properties: {
    lockablePercentsStatus: LockablePercent;
    directCost: OverridableNumber;
    contingency: OverridablePercentage;
    escalation: OverridablePercentage;
    materialWarranty: PercentageValue;
    materialFreight: PercentageValue;
    materialSalesTax: PercentageValue;
    materialWFS: PercentageValue;
    materialWefs: PercentageValue;
    grossMargin: OverridablePercentage;
    sellPrice: OverridableNumber;
    dc: number;
    dcInfo: PercentageValue;
    tdc: number;
    tdcInfo: PercentageValue;
  };
  data: {
    items: CustomItem[];
  }
}

export interface CustomItem {
  description: string;
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  grossMargin: PercentageValue;
  sellPrice: number;
  dcInfo: PercentageValue;
}

export interface subcontractorModuleSummary {
  properties: {
    lumpSumPricingTotal: {
      directCost: number;
      quantity: number;
      contingency: PercentageValue;
      escalation: PercentageValue;
      markup: PercentageValue;
      grossMargin: PercentageValue;
      lockablePercentsStatus: LockablePercent;
      sellPrice: number;
      tdcInfo: PercentageValue;
    };
    unitPricingTotal: {
      directCost: number;
      quantity: number;
      contingency: PercentageValue;
      escalation: PercentageValue;
      markup: PercentageValue;
      grossMargin: PercentageValue;
      lockablePercentsStatus: LockablePercent;
      sellPrice: number;
      tdcInfo: PercentageValue;
    };
    quantity: number;
    grandTotalCost: number;
    grandTotalSellPrice: number;
    directCost: OverridableNumber;
    contingency: OverridablePercentage;
    escalation: OverridablePercentage;
    materialWarranty: PercentageValue;
    materialFreight: PercentageValue;
    materialSalesTax: PercentageValue;
    materialWFS: PercentageValue;
    materialWefs: PercentageValue;
    grossMargin: OverridablePercentage;
    sellPrice: OverridableNumber;
    dc: number;
    dcInfo: PercentageValue;
    tdc: number;
    tdcInfo: PercentageValue;
  };
  data: {
    lumpSumPricings: SubcontractorLumpSumData[];
    unitPricings: SubcontractorUnitPriceData[];
  }
}

export interface SubcontractorLumpSumData {
  isChecked: boolean;
  lockablePercentsStatus: LockablePercent;
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  grossMargin: PercentageValue;
  sellPrice: number;
  name: OverridableString;
  category: OverridableString;
  contact: OverridableString;
  description: OverridableString;
}


export interface SubcontractorUnitPriceData {
  isChecked: boolean;
  lockablePercentsStatus: LockablePercent;
  unitCost: number;
  directCost: number;
  quantity: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  grossMargin: PercentageValue;
  sellPrice: number;
  name: OverridableString;
  category: OverridableString;
  contact: OverridableString;
  description: OverridableString;
  systems: SubcontractorUnitPriceSystem[];
}

interface SubcontractorUnitPriceSystem {
  name: string,
  typicalCount: number;
}

// AKA perdiem module
export interface ExpensesModuleSummary {
  properties: {
    lockablePercentsStatus: LockablePercent;
    directCost: OverridableNumber;
    contingency: OverridablePercentage;
    escalation: OverridablePercentage;
    materialWarranty: PercentageValue;
    materialFreight: PercentageValue;
    materialSalesTax: PercentageValue;
    materialWFS: PercentageValue;
    materialWefs: PercentageValue;
    grossMargin: OverridablePercentage;
    sellPrice: OverridableNumber;
    dc: number;
    dcInfo: PercentageValue;
    tdc: number;
    tdcInfo: PercentageValue;
  };
  data: {
    roles: any[];
    travelCosts: ExpenseTypes[];
    employees: any[];
    summaries: ExpenseTypeSummary[];
  };
}

export interface ExpenseTypes {
  id: string;
  expenseTypeId: number;
  title: OverridableString;
  rate: OverridableNumber;
  type: OverridableString;
}

export interface ExpenseTypeSummary {
  expensesTravelCostId: string;
  directCost: number;
  contingency: PercentageValue;
  escalation: PercentageValue;
  grossMargin: PercentageValue;
  lockablePercentsStatus: LockablePercent;
  sellPrice: number;
  expenseTypeId: number | null;
}

export interface LaborModuleSummary {
  properties: {
    grandTotalHours: number;
    grandTotalCost: number;
    lockablePercentsStatus: LockablePercent;
    directCost: OverridableNumber;
    contingency: OverridablePercentage;
    escalation: OverridablePercentage;
    grossMargin: OverridablePercentage;
    sellPrice: OverridableNumber;
    dc: number;
    dcInfo: PercentageValue;
    tdc: number;
    tdcInfo: PercentageValue;
  };
  data: {
    roles: LaborRoleSummary[];
  }
}

export interface LaborRoleSummary {
  id: string;
  originalRoleId: number;
  name: OverridableString;
  isRemoved: OverridableBoolean;
  rate: {
    internalRate: OverridableNumber;
    customerRate: OverridableNumber;
  };
  rateOvertimeOne: {
    internalRate: OverridableNumber;
    customerRate: OverridableNumber;
  };
  rateOvertimeTwo: {
    internalRate: OverridableNumber;
    customerRate: OverridableNumber;
  };
  properties: {
    normalHoursRate: {
      hours: number;
    };
    overtimeOneHoursRate: {
      hours: number;
    };
    overtimeTwoHoursRate: {
      hours: number;
    };
    totalHours: number;
    directCost: number;
    contingency: PercentageValue;
    escalation: PercentageValue;
    grossMargin: PercentageValue;
    lockablePercentsStatus: LockablePercent;
    totalDirectCost: number;
    sellPrice: number;
  };
  tasks: LaborTask[];
}

export interface LaborTask {
  id: string;
  roleId: string;
  originalTaskId: number;
  name: OverridableString;
  code: OverridableString;
  isRemoved: OverridableBoolean;
  type: string;
  isCustom: boolean;
  servicePercent: number; // TODO: confirm this type for services
  hours: number;
  hoursOvertimeOne: number;
  hoursOvertimeTwo: number;
}

export interface materialModuleSummary {
  properties: {
    aggregatedWEFS: OverridablePercentage;
    quantity: number;
    directCost: OverridableNumber;
    contingency: OverridablePercentage;
    escalation: OverridablePercentage;
    materialWarranty: PercentageValue;
    materialFreight: PercentageValue;
    materialSalesTax: PercentageValue;
    materialWFS: PercentageValue;
    materialWefs: PercentageValue;
    grossMargin: OverridablePercentage;
    sellPrice: OverridableNumber;
    dc: number;
    dcInfo: PercentageValue;
    tdc: number;
    tdcInfo: PercentageValue;
  };
  data: {
    defaultStandardMaterials: PartGroup
    standardMaterials: PartGroup[]
    nonStandardMaterials: PartNonStandard[]
  }
}

export interface totalsModuleSummary {
  properties: {
    lockablePercentsStatus: LockablePercent;
    directCost: OverridableNumber;
    contingency: OverridablePercentage;
    escalation: OverridablePercentage;
    materialWarranty: PercentageValue;
    materialFreight: PercentageValue;
    materialSalesTax: PercentageValue;
    materialWFS: PercentageValue;
    materialWefs: PercentageValue;
    grossMargin: OverridablePercentage;
    sellPrice: OverridableNumber;
  }
}

export interface PointListModuleSummary {
  properties: {
    systemsCount: number;
    pointsCount: number;
    subcontractorCost: number;
    materialCost: number;
    laborCost: number;
    laborHours: number;
    directCost: number;
    systemsTotals: SystemSummary[];
  }
}

export interface SystemSummary {
  id: string;
  name: string;
  totalPoints: number;
  quantity: number;
  materialCost: number;
  laborCost: number;
  laborHours: number;
  directCost: number;
  unitPrice: number;
}

export interface PartGroup {
  partGroups: Part[]
  id: number;
  name: string;
  warranty: PercentageValue;
  escalation: PercentageValue;
  freight: PercentageValue;
  salesTax: PercentageValue;
}

export interface PartWithGroup extends Part {
  groupName: string;
}
export interface Part {
  partGroupCommonProperties: {
    name: string;
    description: string;
    manufacturer: string;
    modelNumber: string;
    supplier: string;
    unitCost: number;
    tags: string[];
  };
  directCost: number;
  quantity: OverridableNumber;
  warranty: PercentageValue;
  escalation: PercentageValue;
  freight: PercentageValue;
  salesTax: PercentageValue;
  contingency: PercentageValue;
  grossMargin: PercentageValue;
  sellPrice: number;
}

export interface PartNonStandard {
  part: {
    name: string;
    description: string;
    manufacturer: string;
    modelNumber: string;
    supplier: string;
    unitCost: number;
    tags: string[];
    quantity: number;
  };
  directCost: number;
  warranty: PercentageValue;
  escalation: PercentageValue;
  freight: PercentageValue;
  salesTax: PercentageValue;
  contingency: PercentageValue;
  grossMargin: PercentageValue;
  sellPrice: number;
}

export interface OverridablePercentage {
  value: PercentageValue;
  override: PercentageValue;
}

export interface OverridableNumber {
  value: number;
  override: number;
}

export interface OverridableString {
  value: string;
  override: string;
}

export interface OverridableBoolean {
  value: boolean;
  override: boolean;
}

export interface Overridable<T> {
  value: T;
  override: T | null;  // Use T | null to allow override to be explicitly set to null
}

export interface PercentageValue {
  amount: number;
  percent: number;
}

export interface LockablePercent {
  isContingencyLocked: boolean;
  isGrossMarginLocked: boolean;
  isWarrantyLocked: boolean;
  isEscalationLocked: boolean;
  isFreightLocked: boolean;
  isSalesTaxLocked: boolean;
}

export enum CellFormat {
  Currency = '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)',
  Percent = "0.00%",
  Hrs = "0.0",
  Mins = "0"
}

// ============================================================
// ============================================================

export interface ProjectInfoCustomField {
  key: string;
  value: string;
}

export interface CombinedListTableData {
  listData: WordList[];
  tableData: TabularData[];
}

export interface WordList {
  name: string;
  items: WordList[];
}

export interface TabularData {
  headers: string[];
  rows: string[][];
  columnWidth: number[];
  tableStyle: string;
  headerRowFontSize: number;
  headerColumnFontSize: number;
  verticalAlignment: string[];
  horizontalAlignment: string[];
  horizontalAlignmentHeaderColumn: string[];
  descriptionAfterTable: string;
  extraSpaceAfterTable: boolean;
}

export interface EstimateServiceDTO {
  baseEstimateId: number;
  alternateIds: number[];
  terms: EstimateServiceTermDTO[];
}

export interface EstimateServiceTermDTO {
  term: EstimateTermSummary;
  services: EstimateServiceTermServiceDTO[];
}

export interface ServiceAsTerms {
  name: string;
  description: string;
  id: number;
  subcontractor: ServiceAsTermsModuleEntry[];
  expenses: ServiceAsTermsModuleEntry[];
  custom: ServiceAsTermsModuleEntry[];
  labor: ServiceAsTermsModuleEntry[];
  material: ServiceAsTermsModuleEntry[];
}

export interface ServiceAsTermsModuleEntry {
  name: string;
  hrs?: number[];
  tdc: number[];
  gm: number[];
  sellPrice: number[];
}

export interface EstimateServiceTermServiceDTO {
  service: TermService;
  subcontractor: subcontractorModuleSummary;
  expense: ExpensesModuleSummary;
  custom: CustomModuleSummary;
  labor: LaborModuleSummary;
  material: materialModuleSummary;
  subcontractors: SubcontractorUnitPriceData[];
  expenses: ExpenseTypeSummary[];
  customs: CustomItem[];
  laborRoles: LaborRoleSummary[];
  parts: Part[];
}
