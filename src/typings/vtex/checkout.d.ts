interface CheckoutOrderForm {
  orderFormId: string;
  salesChannel: string;
  country: string;
  loggedIn: boolean;
  isCheckedIn: boolean;
  storeId: string | null;
  checkedInPickupPointId: string | null;
  allowManualPrice: boolean;
  canEditData: boolean;
  userProfileId: string | null;
  userType: string | null;
  ignoreProfileData: boolean;
  value: number;
  messages: any[];
  items: OrderFormItem[];
  selectableGifts: any[];
  totals: Array<{
    id: string;
    name: string;
    value: number;
  }>;
  logisticsInfo: LogisticsInfo[] | null;
  clientProfileData: ClientProfileData | null;
  paymentData: PaymentData;
  marketingData: OrderFormMarketingData | null;
  sellers: Array<{
    id: string;
    name: string;
    logo: string;
  }>;
  clientPreferencesData: {
    locale: string;
    optinNewsLetter: any | null;
  };
  commercialConditionData: any | null;
  storePreferencesData: {
    countryCode: string;
    currencyCode: string;
    currencyFormatInfo: {
      currencyDecimalDigits: number;
      currencyDecimalSeparator: string;
      currencyGroupSeparator: string;
      currencyGroupSize: number;
      startsWithCurrencySymbol: boolean;
    };
    currencyLocale: string;
    currencySymbol: string;
    saveUserData: boolean;
    timeZone: string;
  };
  giftRegistryData: any | null;
  openTextField: any | null;
  invoiceData: any | null;
  customData: any | null;
  itemMetadata: {
    items: MetadataItem[];
  };
  hooksData: any | null;
  ratesAndBenefitsData: {
    rateAndBenefitsIdentifiers: any[];
    teaser: any[];
  };
  subscriptionData: SubscriptionData | null;
  itemsOrdination: any | null;
}

interface OrderFormItem {
  id: string;
  name: string;
  detailUrl: string;
  imageUrl: string;
  skuName: string;
  quantity: number;
  uniqueId: string;
  productId: string;
  refId: string;
  ean: string;
  priceValidUntil: string;
  price: number;
  tax: number;
  listPrice: number;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  parentItemIndex: number | null;
  parentAssemblyBinding: string | null;
  productCategoryIds: string;
  priceTags: string[];
  manualPrice: number;
  measurementUnit: string;
  additionalInfo: {
    brandName: string;
    brandId: string;
    offeringInfo: any | null;
    offeringType: any | null;
    offeringTypeId: any | null;
  };
  offerings: any;
  productCategories: Record<string, string>;
  productRefId: string;
  seller: string;
  sellerChain: string[];
  availability: string;
  unitMultiplier: number;
  skuSpecifications: SKUSpecification[];
}

interface SKUSpecification {
  fieldName: string;
  fieldValues: string[];
}

interface MetadataItem {
  id: string;
  name: string;
  imageUrl: string;
  detailUrl: string;
  seller: string;
  assemblyOptions: AssemblyOption[];
  skuName: string;
  productId: string;
  refId: string;
  ean: string | null;
}

interface CompositionItem {
  id: string;
  minQuantity: number;
  maxQuantity: number;
  initialQuantity: number;
  priceTable: string;
  seller: string;
}

interface Composition {
  minQuantity: number;
  maxQuantity: number;
  items: CompositionItem[];
}

interface AssemblyOption {
  id: string;
  name: string;
  composition: Composition | null;
}

interface SubscriptionDataEntry {
  executionCount: number;
  itemIndex: number;
  plan: {
    frequency: {
      interval: number;
      periodicity: 'YEAR' | 'MONTH' | 'WEEK' | 'DAY';
    };
    type: string;
    // validity: {};
  };
}

interface SubscriptionData {
  subscriptions: SubscriptionDataEntry[];
}

interface ShippingData {
  address: CheckoutAddress | null;
  logisticsInfo: LogisticsInfo[];
  selectedAddresses: CheckoutAddress[];
  availableAddresses: CheckoutAddress[];
  pickupPoints: PickupPoint[];
}

interface PickupPoint {
  friendlyName: string;
  address: CheckoutAddress;
  additionalInfo: string;
  id: string;
  businessHours: BusinessHour[];
}

interface LogisticsInfo {
  addressId: string | null;
  deliveryChannels: DeliveryChannel[];
  itemId: string;
  itemIndex: number;
  shipsTo: string[];
  slas: SLA[];
  selectedDeliveryChannel: string | null;
  selectedSla: string | null;
}

interface DeliveryChannel {
  id: string;
}

interface SLA {
  id: string;
  deliveryChannel: string;
  name: string;
  deliveryIds: DeliveryId[];
  shippingEstimate: string;
  shippingEstimateDate: string | null;
  lockTTL: string | null;
  availableDeliveryWindows: any[];
  deliveryWindow: string | null;
  price: number;
  listPrice: number;
  tax: number;
  pickupStoreInfo: {
    isPickupStore: boolean;
    friendlyName: string | null;
    address: CheckoutAddress | null;
    additionalInfo: any | null;
    dockId: string | null;
  };
  pickupPointId: string | null;
  pickupDistance: number | null;
  polygonName: string | null;
  transitTime: string | null;
}

interface DeliveryId {
  courierId: string;
  warehouseId: string;
  dockId: string;
  courierName: string;
  quantity: number;
}

interface CheckoutAddress {
  addressId: string;
  addressType: string;
  city: string | null;
  complement: string | null;
  country: string;
  geoCoordinates: number[];
  neighborhood: string | null;
  number: string | null;
  postalCode: string | null;
  receiverName: string | null;
  reference: string | null;
  state: string | null;
  street: string | null;
  isDisposable: boolean;
}

interface BusinessHour {
  DayOfWeek: number;
  ClosingTime: string;
  OpeningTime: string;
}

interface ClientProfileData {
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  documentType: string;
  phone: string;
  corporateName: string;
  tradeName: string;
  corporateDocument: string;
  stateInscription: string;
  corporatePhone: string;
  isCorporate: boolean;
  profileCompleteOnLoading: boolean;
  profileErrorOnLoading: boolean;
  customerClass: string;
}

interface PaymentData {
  installmentOptions: Array<{
    paymentSystem: string;
    bin: string | null;
    paymentName: string | null;
    paymentGroupName: string | null;
    value: number;
    installments: Array<{
      count: number;
      hasInterestRate: false;
      interestRate: number;
      value: number;
      total: number;
      sellerMerchantInstallments: Array<{
        count: number;
        hasInterestRate: false;
        interestRate: number;
        value: number;
        total: number;
      }>;
    }>;
  }>;
  paymentSystems: Array<{
    id: string;
    name: string;
    groupName: string;
    validator: {
      regex: string;
      mask: string;
      cardCodeRegex: string;
      cardCodeMask: string;
      weights: number[];
      useCvv: boolean;
      useExpirationDate: boolean;
      useCardHolderName: boolean;
      useBillingAddress: boolean;
    };
    stringId: string;
    template: string;
    requiresDocument: boolean;
    isCustom: boolean;
    description: string | null;
    requiresAuthentication: boolean;
    dueDate: string;
    availablePayments: any | null;
  }>;
  payments: any[];
  giftCards: any[];
  giftCardMessages: any[];
  availableAccounts: any[];
  availableTokens: any[];
}

interface OrderFormMarketingData {
  utmCampaign?: string;
  utmMedium?: string;
  utmSource?: string;
  utmiCampaign?: string;
  utmiPart?: string;
  utmipage?: string;
  marketingTags?: string;
  coupon?: string;
}

interface ItemInput {
  id: string;
  quantity: number;
  seller: string;
}

interface LogisticInfoInput {
  itemIndex: number;
  selectedSla: string;
  selectedDeliveryChannel: string;
  deliveryWindow?: { startDateUtc: string; endDateUtc: string };
}
