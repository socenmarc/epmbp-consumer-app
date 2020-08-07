/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerAddressRequestBuilder } from './BusinessPartnerAddressRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerAddress" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerAddress extends Entity implements BusinessPartnerAddressType {
  /**
   * Technical entity name for BusinessPartnerAddress.
   */
  static _entityName = 'A_BusinessPartnerAddress';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BusinessPartnerAddress.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Key identifying a business partner in the SAP system. The key is unique within a client.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Address Number.
   * Internal key for identifying a Business Address Services address.
   * For more information about the meaning and use of the address number and the Business Address Services concepts, see the function group SZA0 documentation.
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Validity Start of a Business Partner Address.
   * @nullable
   */
  validityStartDate?: Moment;
  /**
   * Validity End of a Business Partner Address.
   * @nullable
   */
  validityEndDate?: Moment;
  /**
   * Authorization Group.
   * You can use authorization groups to stipulate which business partners a user is allowed to process.
   * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * GUID of a Business Partner Address.
   * @nullable
   */
  addressUuid?: string;
  /**
   * Street 3.
   * Additional address field which is printed above the Street line.
   * The Street address contains two lines above the street and two lines below the street.See Print the Street address.
   * Maximum length: 40.
   * @nullable
   */
  additionalStreetPrefixName?: string;
  /**
   * Street 5.
   * Additional address field which is printed under the Street line.
   * The Street address has two lines above the street and two lines below the steet.See Print the Street address.
   * Maximum length: 40.
   * @nullable
   */
  additionalStreetSuffixName?: string;
  /**
   * Address time zone.
   * Time zone as part of an address.
   * The time zone is automatically determined by the system in address maintenance if time zone Customizing is maintained.It depends on the country and the region. (Region means state, province or county, depending on the country)The automatic determination is only made if there is no value in the time zone field.
   * Maximum length: 6.
   * @nullable
   */
  addressTimeZone?: string;
  /**
   * c/o name.
   * Part of the address (c/o = care of) if the recipient is different from the occupant and the names are not similar (e.g. subtenants).
   * Put the country-specific code (e.g. c/o) in front of the name of the occupant. This is not automatically done in the print format, like the language-specific word "PO Box".John Smithc/o David BrownThis field is not always automatically printed, as it was subsequently added to the address structure.The print program or form may need to be adjusted.This exception applies to the following fields:Street2, Street3, Street4, Street5, c/o name, and to all address fields added after Release 4.5.
   * Maximum length: 40.
   * @nullable
   */
  careOfName?: string;
  /**
   * City code for city/street file.
   * Maximum length: 12.
   * @nullable
   */
  cityCode?: string;
  /**
   * City.
   * City name as part of the address.
   * The city name is saved redundantly in another database field in upper- case letters, for search help.If the Postal regional structure ('city file') is active, the city name is checked against the Cities defined in the regional structure.
   * Maximum length: 40.
   * @nullable
   */
  cityName?: string;
  /**
   * Company Postal Code (for Large Customers).
   * Postal code that is assigned directly to one company (= company postal code = major customer postal code).
   * This field is used for countries where major companies are assigned their own postal code by the national post office.This postal code has to be entered in the field "Company Postal Code". Postal codes for group major customers, however, have to be entered in the field "PO Box Postal Code", since individual customers with a shared postal code for group major customers are differentiated by means of their PO box.
   * Maximum length: 10.
   * @nullable
   */
  companyPostalCode?: string;
  /**
   * Country Key.
   * The country key contains information which the system uses to check entries such as the length of the postal code or bank account number.
   * The two-character ISO code in accordance with ISO 3166, which is delivered by SAP as a default, is usually used.It could also be the vehicle license plate country-code or a typical country key, for example, in Germany the Federal statistics office key.The country keys are determined at system installation in the global settings.The definition of the country key in the SAP system does not have to match political or government entities.Since the country key does not have to correspond to the ISO code in all installations, programs that differ according to certain values of the country key cannot query the country key T005-LAND1, but have to program based on the ISO code T005 INTCA.
   * Maximum length: 3.
   * @nullable
   */
  country?: string;
  /**
   * County.
   * Specifies the county’s name
   * This field is used to store the county’s name. You can enter the name of the county in this field.
   * Maximum length: 40.
   * @nullable
   */
  county?: string;
  /**
   * Number of Delivery Service.
   * The delivery service is part of the PO box address.
   * Some countries offer different services in addition to regular postal delivery and PO boxes, for example the Private Bag or Response Bag. If an address is related to one of these delivery services, the information about this particular delivery service has to be entered in the corresponding fields.In the field "Number of Delivery Service," the number of the Private Bag, Response Bag, or other relevant service has to be entered. Entering a number is not mandatory for each delivery service.For each address, either the information about the PO box or the information about the delivery service can be entered, but not both types of information at the same time.Mr PickeringPrivate Bag 106999Timaru 7942Delivery services will only be taken into account for address formatting in countries in which they are commonly used in addition to regular postal delivery and PO boxes, for example, in Australia, New Zealand, and the USA. In all other countries, these fields will not be taken into account for address formatting.
   * Maximum length: 10.
   * @nullable
   */
  deliveryServiceNumber?: string;
  /**
   * Type of Delivery Service.
   * The delivery service is part of the PO box address.
   * Some countries offer different services in addition to regular postal delivery and PO boxes, for example the Private Bag or Response Bag. If an address is related to one of these delivery services, the information about this particular delivery service has to be entered in the corresponding fields.In the field "Type of Delivery Service," the type of the delivery service has to be entered.For each address, either the information about the PO box or the information about the delivery service can be entered, but not both types of information at the same time.Mr PickeringPrivate Bag 106999Timaru 7942Delivery services will only be taken into account for address formatting in countries in which they are commonly used in addition to regular postal delivery and PO boxes, for example, in Australia, New Zealand, and the USA. In all other countries, these fields will not be taken into account for address formatting.
   * Maximum length: 4.
   * @nullable
   */
  deliveryServiceTypeCode?: string;
  /**
   * District.
   * City or District supplement
   * In some countries, this entry is appended with a hyphen to the city name by the automatic address formatting, other countries, it is output on a line of its own or (e.g. in the USA) not printed.See the examples in the Address Layout Key documentation.
   * Maximum length: 40.
   * @nullable
   */
  district?: string;
  /**
   * Form-of-Address Key.
   * Key for form of address text.
   * You can also define a form of address text in Customizing.The form of address text can be maintained in different languages.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: string;
  /**
   * Full name of a party (Bus. Partner, Org. Unit, Doc. address).
   * This field contains the full name or formatted name of a party.
   * For organizations or document addresses, typically the fields Name1 and Name2 are concatenated.For persons the field contains the formatted name according to country specific rules. It corresponds e.g. to the content of the fields BUT000-NAME1_TEXT or ADRP-NAME_TEXT.
   * Maximum length: 80.
   * @nullable
   */
  fullName?: string;
  /**
   * City (different from postal city).
   * City of residence which is different from the postal city
   * In some countries, the residential city is required if it differs from the postal city.In the USA, the official street indexes, against which data can be checked, are based on the residential city, not the postal city, which may be different.It is the same in France, where a postally correct address must contain the residential city in a separate line above the postal city, if it differs from the postal city.This field is not always automatically printed, as it was subsequently added to the address structure.The print program or form may need to be adjusted.This exception applies to the following fields:Street2, Street3, Street4, Street5, c/o name, and to all address fields added after Release 4.5.
   * Maximum length: 40.
   * @nullable
   */
  homeCityName?: string;
  /**
   * House Number.
   * House number as part of an address.
   * It is printed in the Street line.Other supplementary street information can be entered in the House number supplement or one of the Street2, Street3, Street4 or Street5 fields. See Print the Street address.A house number (e.g. 117) or a house number with supplement (e.g. 117a), or a house number range (e.g. 16-20), can be maintained in this field.
   * Maximum length: 10.
   * @nullable
   */
  houseNumber?: string;
  /**
   * House number supplement.
   * House number supplement as part of an address, e.g.
   * App. 17 orSuite 600.It is printed in the Street line.Further Street supplements can be put in one of the fields Street2, Street3, Street4 or Street5.See Print the Street address.
   * Maximum length: 10.
   * @nullable
   */
  houseNumberSupplementText?: string;
  /**
   * Language Key.
   * The language key indicates
   * - the language in which texts are displayed,- the language in which you enter texts,- the language in which the system prints texts.
   * Maximum length: 2.
   * @nullable
   */
  language?: string;
  /**
   * PO Box.
   * PO Box number as part of an address.
   * Only enter the PO Box number in this field. The text "PO Box" is provided in the recipient language by the system when you print the address.When you print an address, the "Street address" and the "PO Box address" are distinguished. The print program determines which of them has priority if both are maintained in an address record.Besides the PO Box number, the PO Box address uses the following fields:PO Box postal code, if specified (otherwise the normal postal code)PO Box city, if specified (otherwise the normal city)PO Box region, if specified (otherwise the normal region)PO Box country, if specified (otherwise the normal country)If the address is a "PO Box" (without a number), do not fill the "PO Box" field. Select the "PO Box w/o Number" indicator instead.You can also enter a company postal code for organizational addresses, instead of a PO Box. A separate field is predefined for this entry.For general information and examples about address formatting, see the documentation on the Address Structure Key.
   * Maximum length: 10.
   * @nullable
   */
  poBox?: string;
  /**
   * PO Box city.
   * Different city for the PO Box as an address component.
   * The PO Box city can be entered here if it is different from the address city.If the address is only a PO Box address,  enter the city in the normal city field.If the address contains two different city names for the address and the PO Box address, use this field.
   * Maximum length: 40.
   * @nullable
   */
  poBoxDeviatingCityName?: string;
  /**
   * PO box country.
   * Different PO Box country in address.
   * The PO Box country can be entered here, if it is different from the street address country.If the address only has a PO Box address, the country is in the normal country field.Use this field if the address has two different country values for the street address and the PO Box address.This field is not always automatically printed, as it was subsequently added to the address structure.The print program or form may need to be adjusted.This exception applies to the following fields:Street2, Street3, Street4, Street5, c/o name, and to all address fields added after Release 4.5.
   * Maximum length: 3.
   * @nullable
   */
  poBoxDeviatingCountry?: string;
  /**
   * Region for PO Box (Country, State, Province, ...).
   * Different Region for PO Box in an address.
   * Enter the PO Box Region here, if it differs from the street address region.If the address only has a PO Box address, the Region in in the normal Region field.Use this field if the address has two different Region values for the street address and the PO Box address.This field is not always automatically printed, as it was subsequently added to the address structure.The print program or form may need to be adjusted.This exception applies to the following fields:Street2, Street3, Street4, Street5, c/o name, and to all address fields added after Release 4.5.
   * Maximum length: 3.
   * @nullable
   */
  poBoxDeviatingRegion?: string;
  /**
   * Flag: PO Box Without Number.
   * PO Box address without PO Box number flag.
   * Only the word 'PO Box' is output in PO Box addresses without PO Box number.Set this flag for a PO Box address without PO Box number.This field is not always automatically printed, as it was subsequently added to the address structure.The print program or form may need to be adjusted.This exception applies to the following fields:Street2, Street3, Street4, Street5, c/o name, and to all address fields added after Release 4.5.
   * @nullable
   */
  poBoxIsWithoutNumber?: boolean;
  /**
   * PO Box Lobby.
   * The PO box lobby is part of the PO box address.
   * In some countries, entering a PO box, postal code and city is not sufficient to uniquely identify a PO box, because the same PO box number is assigned multiple times in some cities.Therefore, additional information might be required to determine the post office of the PO box in question. This information can be entered in the field "PO Box Lobby."Mr NellingPO Box 4099HighfieldTimaru 7942The PO box lobby will only be taken into account for address formatting in countries in which it is commonly used in addition to regular postal delivery and PO boxes, for example, in Canada or New Zealand. In all other countries, this field will not be taken into account for address formatting.
   * Maximum length: 40.
   * @nullable
   */
  poBoxLobbyName?: string;
  /**
   * PO Box Postal Code.
   * Postal code that is required for a unique assignment of the PO box.
   * This field is used for countries where a different postal code applies to mail that is sent to the PO box rather than to the street address of a particular business partner.Postal codes for group major customers also have to be entered in the field for the PO box postal code since individual customers with a shared postal code for group major customers are differentiated by means of the PO box. Postal codes for major customers (= company postal codes), however, are assigned to one customer only and have to be entered in the field 'Company Postal Code'.
   * Maximum length: 10.
   * @nullable
   */
  poBoxPostalCode?: string;
  /**
   * Person number.
   * Internal key for identifying a person in Business Address Services.
   * For more information about the meaning and use of the person number and Business Address Services concepts, see the function group SZA0 documentation.
   * Maximum length: 10.
   * @nullable
   */
  person?: string;
  /**
   * City Postal Code.
   * Postal code as part of the address
   * If different postal codes are maintained for the PO Box and Street address of an address, this field contains the Street address postal code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: string;
  /**
   * Communication Method (Key) (Business Address Services).
   * Communication method with which you can exchange documents and messages with a business partner.
   * In Business Address Services, you can specify a standard communication method that can be used by programs to determine the means of communication for sending messages.One business partner wants all messages by fax, another by e-mail.The application context can restrict the possible methods of communication. For example, invitations should perhaps only be sent by post because of enclosures, whereas minutes can be sent by post, fax or e-mail.Communication strategies can be defined for this purpose and applied in application contexts.
   * Maximum length: 3.
   * @nullable
   */
  prfrdCommMediumType?: string;
  /**
   * Region (State, Province, County).
   * In some countries, the region forms part of the address. The meaning depends on the country.
   * The automatic address formatting function prints the region in addresses in the USA, Canada, Italy, Brazil or Australia, and the county in Great Britain.For more information, see the examples in the documentation on the Address Layout Key.Meaning of the regional code in ...Australia       -&gt;  ProvinceBrazil          -&gt;  StateCanada          -&gt;  ProvinceGermany         -&gt;  StateGreat Britain   -&gt;  CountyItaly           -&gt;  ProvinceJapan           -&gt;  PrefectureSwitzerland     -&gt;  CantonUSA             -&gt;  State.
   * Maximum length: 3.
   * @nullable
   */
  region?: string;
  /**
   * Street.
   * Street name as part of the address.
   * The street name is saved, redundantly in upper case in another database field, for search help purposes.There are other fields for address parts which can be printed above or below the street. See Print the Street address.The house number and other supplements are usually maintained in their own fields. See Formatting the Street line.
   * Maximum length: 60.
   * @nullable
   */
  streetName?: string;
  /**
   * Street 2.
   * Additional address field which is printed above the Street line.
   * The Street address contains two lines above the street and two lines below the street.See Print the Street address.This field is not always automatically printed, as it was subsequently added to the address structure.The print program or form may need to be adjusted.This exception applies to the following fields:Street2, Street3, Street4, Street5, c/o name, and to all address fields added after Release 4.5.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName?: string;
  /**
   * Street 4.
   * Additional address field which is printed below the Street line.
   * The Street address contains two lines above the street and two lines below the street.See Print the Street address.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName?: string;
  /**
   * Tax Jurisdiction.
   * Specifies the  tax jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  taxJurisdiction?: string;
  /**
   * Transportation zone to or from which the goods are delivered.
   * Sales and distribution:
   * Regional zone of Goods recipient.Purchasing:Regional zone of supplier.You can define regional zones to suit the requirements of your own business and country.Sales and distributionthe system automatically proposes a suitable route by using the transportation zone of the goods recipient in combination with other information about the delivery, such as theCountries of origin and destinationShipping conditionsTransportation groupIn the USA, for example, you can define regional zones to correspond to the US postal zip codes.
   * Maximum length: 10.
   * @nullable
   */
  transportZone?: string;
  /**
   * Address number in external system.
   * Address number from an external system or a legacy system
   * If the current address has a different number in an external system, you can save this number here for information purposes.In direct input you are able to maintain an address for a business partner by stating the external address number. If your business partner data is maintained in a legacy system, you can thus transmit changes to a BP address to the SAP system without having to know the SAP address number in the legacy system.
   * Maximum length: 20.
   * @nullable
   */
  addressIdByExternalSystem?: string;
  /**
   * County code for county.
   * Specifies the county’s code
   * This field stores the county’s code. You cannot enter any data in this field. The system fetches this data from the ADRCOUNTY table and updates it in this field.
   * Maximum length: 8.
   * @nullable
   */
  countyCode?: string;
  /**
   * Township code for Township.
   * Specifies the township’s code
   * This field stores the township’s code. You cannot enter any data in this field. The system fetches this data from the ADRTOWNSHIP table and updates it in this field.
   * Maximum length: 8.
   * @nullable
   */
  townshipCode?: string;
  /**
   * Township.
   * Specifies the township’s name
   * This field is used to store the township’s name. You can enter the name of the township in this field.
   * Maximum length: 40.
   * @nullable
   */
  townshipName?: string;
  /**
   * One-to-many navigation property to the [[BuPaAddressUsage]] entity.
   */
  toAddressUsage!: BuPaAddressUsage[];
  /**
   * One-to-many navigation property to the [[AddressEmailAddress]] entity.
   */
  toEmailAddress!: AddressEmailAddress[];
  /**
   * One-to-many navigation property to the [[AddressFaxNumber]] entity.
   */
  toFaxNumber!: AddressFaxNumber[];
  /**
   * One-to-many navigation property to the [[AddressPhoneNumber]] entity.
   */
  toMobilePhoneNumber!: AddressPhoneNumber[];
  /**
   * One-to-many navigation property to the [[AddressPhoneNumber]] entity.
   */
  toPhoneNumber!: AddressPhoneNumber[];
  /**
   * One-to-many navigation property to the [[AddressHomePageUrl]] entity.
   */
  toUrlAddress!: AddressHomePageUrl[];

  /**
   * Returns an entity builder to construct instances `BusinessPartnerAddress`.
   * @returns A builder that constructs instances of entity type `BusinessPartnerAddress`.
   */
  static builder(): EntityBuilderType<BusinessPartnerAddress, BusinessPartnerAddressTypeForceMandatory> {
    return Entity.entityBuilder(BusinessPartnerAddress);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerAddress` entity type.
   * @returns A `BusinessPartnerAddress` request builder.
   */
  static requestBuilder(): BusinessPartnerAddressRequestBuilder {
    return new BusinessPartnerAddressRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerAddress`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerAddress`.
   */
  static customField(fieldName: string): CustomField<BusinessPartnerAddress> {
    return Entity.customFieldSelector(fieldName, BusinessPartnerAddress);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BuPaAddressUsage, BuPaAddressUsageType } from './BuPaAddressUsage';
import { AddressEmailAddress, AddressEmailAddressType } from './AddressEmailAddress';
import { AddressFaxNumber, AddressFaxNumberType } from './AddressFaxNumber';
import { AddressPhoneNumber, AddressPhoneNumberType } from './AddressPhoneNumber';
import { AddressHomePageUrl, AddressHomePageUrlType } from './AddressHomePageUrl';

export interface BusinessPartnerAddressType {
  businessPartner: string;
  addressId: string;
  validityStartDate?: Moment;
  validityEndDate?: Moment;
  authorizationGroup?: string;
  addressUuid?: string;
  additionalStreetPrefixName?: string;
  additionalStreetSuffixName?: string;
  addressTimeZone?: string;
  careOfName?: string;
  cityCode?: string;
  cityName?: string;
  companyPostalCode?: string;
  country?: string;
  county?: string;
  deliveryServiceNumber?: string;
  deliveryServiceTypeCode?: string;
  district?: string;
  formOfAddress?: string;
  fullName?: string;
  homeCityName?: string;
  houseNumber?: string;
  houseNumberSupplementText?: string;
  language?: string;
  poBox?: string;
  poBoxDeviatingCityName?: string;
  poBoxDeviatingCountry?: string;
  poBoxDeviatingRegion?: string;
  poBoxIsWithoutNumber?: boolean;
  poBoxLobbyName?: string;
  poBoxPostalCode?: string;
  person?: string;
  postalCode?: string;
  prfrdCommMediumType?: string;
  region?: string;
  streetName?: string;
  streetPrefixName?: string;
  streetSuffixName?: string;
  taxJurisdiction?: string;
  transportZone?: string;
  addressIdByExternalSystem?: string;
  countyCode?: string;
  townshipCode?: string;
  townshipName?: string;
  toAddressUsage: BuPaAddressUsageType[];
  toEmailAddress: AddressEmailAddressType[];
  toFaxNumber: AddressFaxNumberType[];
  toMobilePhoneNumber: AddressPhoneNumberType[];
  toPhoneNumber: AddressPhoneNumberType[];
  toUrlAddress: AddressHomePageUrlType[];
}

export interface BusinessPartnerAddressTypeForceMandatory {
  businessPartner: string;
  addressId: string;
  validityStartDate: Moment;
  validityEndDate: Moment;
  authorizationGroup: string;
  addressUuid: string;
  additionalStreetPrefixName: string;
  additionalStreetSuffixName: string;
  addressTimeZone: string;
  careOfName: string;
  cityCode: string;
  cityName: string;
  companyPostalCode: string;
  country: string;
  county: string;
  deliveryServiceNumber: string;
  deliveryServiceTypeCode: string;
  district: string;
  formOfAddress: string;
  fullName: string;
  homeCityName: string;
  houseNumber: string;
  houseNumberSupplementText: string;
  language: string;
  poBox: string;
  poBoxDeviatingCityName: string;
  poBoxDeviatingCountry: string;
  poBoxDeviatingRegion: string;
  poBoxIsWithoutNumber: boolean;
  poBoxLobbyName: string;
  poBoxPostalCode: string;
  person: string;
  postalCode: string;
  prfrdCommMediumType: string;
  region: string;
  streetName: string;
  streetPrefixName: string;
  streetSuffixName: string;
  taxJurisdiction: string;
  transportZone: string;
  addressIdByExternalSystem: string;
  countyCode: string;
  townshipCode: string;
  townshipName: string;
  toAddressUsage: BuPaAddressUsageType[];
  toEmailAddress: AddressEmailAddressType[];
  toFaxNumber: AddressFaxNumberType[];
  toMobilePhoneNumber: AddressPhoneNumberType[];
  toPhoneNumber: AddressPhoneNumberType[];
  toUrlAddress: AddressHomePageUrlType[];
}

export namespace BusinessPartnerAddress {
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: StringField<BusinessPartnerAddress> = new StringField('BusinessPartner', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID: StringField<BusinessPartnerAddress> = new StringField('AddressID', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[validityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_START_DATE: DateField<BusinessPartnerAddress> = new DateField('ValidityStartDate', BusinessPartnerAddress, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE: DateField<BusinessPartnerAddress> = new DateField('ValidityEndDate', BusinessPartnerAddress, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<BusinessPartnerAddress> = new StringField('AuthorizationGroup', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[addressUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_UUID: StringField<BusinessPartnerAddress> = new StringField('AddressUUID', BusinessPartnerAddress, 'Edm.Guid');
  /**
   * Static representation of the [[additionalStreetPrefixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_STREET_PREFIX_NAME: StringField<BusinessPartnerAddress> = new StringField('AdditionalStreetPrefixName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[additionalStreetSuffixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_STREET_SUFFIX_NAME: StringField<BusinessPartnerAddress> = new StringField('AdditionalStreetSuffixName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[addressTimeZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TIME_ZONE: StringField<BusinessPartnerAddress> = new StringField('AddressTimeZone', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[careOfName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARE_OF_NAME: StringField<BusinessPartnerAddress> = new StringField('CareOfName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[cityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_CODE: StringField<BusinessPartnerAddress> = new StringField('CityCode', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[cityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_NAME: StringField<BusinessPartnerAddress> = new StringField('CityName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[companyPostalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_POSTAL_CODE: StringField<BusinessPartnerAddress> = new StringField('CompanyPostalCode', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<BusinessPartnerAddress> = new StringField('Country', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY: StringField<BusinessPartnerAddress> = new StringField('County', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[deliveryServiceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_SERVICE_NUMBER: StringField<BusinessPartnerAddress> = new StringField('DeliveryServiceNumber', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_SERVICE_TYPE_CODE: StringField<BusinessPartnerAddress> = new StringField('DeliveryServiceTypeCode', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[district]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRICT: StringField<BusinessPartnerAddress> = new StringField('District', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[formOfAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_OF_ADDRESS: StringField<BusinessPartnerAddress> = new StringField('FormOfAddress', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[fullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FULL_NAME: StringField<BusinessPartnerAddress> = new StringField('FullName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[homeCityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_CITY_NAME: StringField<BusinessPartnerAddress> = new StringField('HomeCityName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[houseNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_NUMBER: StringField<BusinessPartnerAddress> = new StringField('HouseNumber', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[houseNumberSupplementText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_NUMBER_SUPPLEMENT_TEXT: StringField<BusinessPartnerAddress> = new StringField('HouseNumberSupplementText', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<BusinessPartnerAddress> = new StringField('Language', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[poBox]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX: StringField<BusinessPartnerAddress> = new StringField('POBox', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_DEVIATING_CITY_NAME: StringField<BusinessPartnerAddress> = new StringField('POBoxDeviatingCityName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_DEVIATING_COUNTRY: StringField<BusinessPartnerAddress> = new StringField('POBoxDeviatingCountry', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_DEVIATING_REGION: StringField<BusinessPartnerAddress> = new StringField('POBoxDeviatingRegion', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_IS_WITHOUT_NUMBER: BooleanField<BusinessPartnerAddress> = new BooleanField('POBoxIsWithoutNumber', BusinessPartnerAddress, 'Edm.Boolean');
  /**
   * Static representation of the [[poBoxLobbyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_LOBBY_NAME: StringField<BusinessPartnerAddress> = new StringField('POBoxLobbyName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[poBoxPostalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_POSTAL_CODE: StringField<BusinessPartnerAddress> = new StringField('POBoxPostalCode', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON: StringField<BusinessPartnerAddress> = new StringField('Person', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[postalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTAL_CODE: StringField<BusinessPartnerAddress> = new StringField('PostalCode', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[prfrdCommMediumType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRFRD_COMM_MEDIUM_TYPE: StringField<BusinessPartnerAddress> = new StringField('PrfrdCommMediumType', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[region]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGION: StringField<BusinessPartnerAddress> = new StringField('Region', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[streetName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_NAME: StringField<BusinessPartnerAddress> = new StringField('StreetName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[streetPrefixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_PREFIX_NAME: StringField<BusinessPartnerAddress> = new StringField('StreetPrefixName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[streetSuffixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_SUFFIX_NAME: StringField<BusinessPartnerAddress> = new StringField('StreetSuffixName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[taxJurisdiction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_JURISDICTION: StringField<BusinessPartnerAddress> = new StringField('TaxJurisdiction', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[transportZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORT_ZONE: StringField<BusinessPartnerAddress> = new StringField('TransportZone', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[addressIdByExternalSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID_BY_EXTERNAL_SYSTEM: StringField<BusinessPartnerAddress> = new StringField('AddressIDByExternalSystem', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[countyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY_CODE: StringField<BusinessPartnerAddress> = new StringField('CountyCode', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[townshipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOWNSHIP_CODE: StringField<BusinessPartnerAddress> = new StringField('TownshipCode', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the [[townshipName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOWNSHIP_NAME: StringField<BusinessPartnerAddress> = new StringField('TownshipName', BusinessPartnerAddress, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[toAddressUsage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_ADDRESS_USAGE: Link<BusinessPartnerAddress, BuPaAddressUsage> = new Link('to_AddressUsage', BusinessPartnerAddress, BuPaAddressUsage);
  /**
   * Static representation of the one-to-many navigation property [[toEmailAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_EMAIL_ADDRESS: Link<BusinessPartnerAddress, AddressEmailAddress> = new Link('to_EmailAddress', BusinessPartnerAddress, AddressEmailAddress);
  /**
   * Static representation of the one-to-many navigation property [[toFaxNumber]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_FAX_NUMBER: Link<BusinessPartnerAddress, AddressFaxNumber> = new Link('to_FaxNumber', BusinessPartnerAddress, AddressFaxNumber);
  /**
   * Static representation of the one-to-many navigation property [[toMobilePhoneNumber]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_MOBILE_PHONE_NUMBER: Link<BusinessPartnerAddress, AddressPhoneNumber> = new Link('to_MobilePhoneNumber', BusinessPartnerAddress, AddressPhoneNumber);
  /**
   * Static representation of the one-to-many navigation property [[toPhoneNumber]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PHONE_NUMBER: Link<BusinessPartnerAddress, AddressPhoneNumber> = new Link('to_PhoneNumber', BusinessPartnerAddress, AddressPhoneNumber);
  /**
   * Static representation of the one-to-many navigation property [[toUrlAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_URL_ADDRESS: Link<BusinessPartnerAddress, AddressHomePageUrl> = new Link('to_URLAddress', BusinessPartnerAddress, AddressHomePageUrl);
  /**
   * All fields of the BusinessPartnerAddress entity.
   */
  export const _allFields: Array<StringField<BusinessPartnerAddress> | DateField<BusinessPartnerAddress> | BooleanField<BusinessPartnerAddress> | Link<BusinessPartnerAddress, BuPaAddressUsage> | Link<BusinessPartnerAddress, AddressEmailAddress> | Link<BusinessPartnerAddress, AddressFaxNumber> | Link<BusinessPartnerAddress, AddressPhoneNumber> | Link<BusinessPartnerAddress, AddressHomePageUrl>> = [
    BusinessPartnerAddress.BUSINESS_PARTNER,
    BusinessPartnerAddress.ADDRESS_ID,
    BusinessPartnerAddress.VALIDITY_START_DATE,
    BusinessPartnerAddress.VALIDITY_END_DATE,
    BusinessPartnerAddress.AUTHORIZATION_GROUP,
    BusinessPartnerAddress.ADDRESS_UUID,
    BusinessPartnerAddress.ADDITIONAL_STREET_PREFIX_NAME,
    BusinessPartnerAddress.ADDITIONAL_STREET_SUFFIX_NAME,
    BusinessPartnerAddress.ADDRESS_TIME_ZONE,
    BusinessPartnerAddress.CARE_OF_NAME,
    BusinessPartnerAddress.CITY_CODE,
    BusinessPartnerAddress.CITY_NAME,
    BusinessPartnerAddress.COMPANY_POSTAL_CODE,
    BusinessPartnerAddress.COUNTRY,
    BusinessPartnerAddress.COUNTY,
    BusinessPartnerAddress.DELIVERY_SERVICE_NUMBER,
    BusinessPartnerAddress.DELIVERY_SERVICE_TYPE_CODE,
    BusinessPartnerAddress.DISTRICT,
    BusinessPartnerAddress.FORM_OF_ADDRESS,
    BusinessPartnerAddress.FULL_NAME,
    BusinessPartnerAddress.HOME_CITY_NAME,
    BusinessPartnerAddress.HOUSE_NUMBER,
    BusinessPartnerAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT,
    BusinessPartnerAddress.LANGUAGE,
    BusinessPartnerAddress.PO_BOX,
    BusinessPartnerAddress.PO_BOX_DEVIATING_CITY_NAME,
    BusinessPartnerAddress.PO_BOX_DEVIATING_COUNTRY,
    BusinessPartnerAddress.PO_BOX_DEVIATING_REGION,
    BusinessPartnerAddress.PO_BOX_IS_WITHOUT_NUMBER,
    BusinessPartnerAddress.PO_BOX_LOBBY_NAME,
    BusinessPartnerAddress.PO_BOX_POSTAL_CODE,
    BusinessPartnerAddress.PERSON,
    BusinessPartnerAddress.POSTAL_CODE,
    BusinessPartnerAddress.PRFRD_COMM_MEDIUM_TYPE,
    BusinessPartnerAddress.REGION,
    BusinessPartnerAddress.STREET_NAME,
    BusinessPartnerAddress.STREET_PREFIX_NAME,
    BusinessPartnerAddress.STREET_SUFFIX_NAME,
    BusinessPartnerAddress.TAX_JURISDICTION,
    BusinessPartnerAddress.TRANSPORT_ZONE,
    BusinessPartnerAddress.ADDRESS_ID_BY_EXTERNAL_SYSTEM,
    BusinessPartnerAddress.COUNTY_CODE,
    BusinessPartnerAddress.TOWNSHIP_CODE,
    BusinessPartnerAddress.TOWNSHIP_NAME,
    BusinessPartnerAddress.TO_ADDRESS_USAGE,
    BusinessPartnerAddress.TO_EMAIL_ADDRESS,
    BusinessPartnerAddress.TO_FAX_NUMBER,
    BusinessPartnerAddress.TO_MOBILE_PHONE_NUMBER,
    BusinessPartnerAddress.TO_PHONE_NUMBER,
    BusinessPartnerAddress.TO_URL_ADDRESS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerAddress> = new AllFields('*', BusinessPartnerAddress);
  /**
   * All key fields of the BusinessPartnerAddress entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerAddress>> = [BusinessPartnerAddress.BUSINESS_PARTNER, BusinessPartnerAddress.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerAddress.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerAddress> } = BusinessPartnerAddress._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerAddress> }, field: Field<BusinessPartnerAddress>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
