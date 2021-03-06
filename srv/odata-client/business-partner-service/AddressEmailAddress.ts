/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressEmailAddressRequestBuilder } from './AddressEmailAddressRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_AddressEmailAddress" of service "API_BUSINESS_PARTNER".
 */
export class AddressEmailAddress extends Entity implements AddressEmailAddressType {
  /**
   * Technical entity name for AddressEmailAddress.
   */
  static _entityName = 'A_AddressEmailAddress';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AddressEmailAddress.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Address Number.
   * Internal key for identifying a Business Address Services address.
   * For more information about the meaning and use of the address number and the Business Address Services concepts, see the function group SZA0 documentation.
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Person number.
   * Internal key for identifying a person in Business Address Services.
   * For more information about the meaning and use of the person number and Business Address Services concepts, see the function group SZA0 documentation.
   * Maximum length: 10.
   */
  person!: string;
  /**
   * Sequence Number.
   * Maximum length: 3.
   */
  ordinalNumber!: string;
  /**
   * Flag: this address is the default address.
   * @nullable
   */
  isDefaultEmailAddress?: boolean;
  /**
   * Email Address.
   * Internet mail address, also called e-mail address.
   * Example: user.name@company.comThe Internet mail address is used to send mail via the Internet world-wide; the protocol used is SMTP (Simple Mail Transfer Protocol).The Internet mail address format is specified in various RFCs (Internet Request for Comment), including RFCs 821 and 822.This is not an IP address (192.56.30.6).
   * Maximum length: 241.
   * @nullable
   */
  emailAddress?: string;
  /**
   * E-Mail Address Search Field.
   * This field is generated by the system from the complete Internet mail address and is stored in table ADR6.
   * It contains the first 20 characters of the Internet mail address in normalized form, that is, without comment characters and converted into uppercase.The field cannot be maintained by the user or from an interface.The table ADR6 contains an index for this field.Using an Internet mail address, the corresponding key of table ADR6 and the owner of the address are determined (for example, business partner or user).
   * Maximum length: 20.
   * @nullable
   */
  searchEmailAddress?: string;
  /**
   * Communication link notes.
   * Additional information about the communication connection
   * You can maintain further information about the communication connection here. In the case of telephone numbers, for example, you can maintain the times at which the call recipient is available and those at which they are not, or you can specify whether the number is that of the secretary.The information is stored in table ADRT, regardless of language.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: string;

  /**
   * Returns an entity builder to construct instances `AddressEmailAddress`.
   * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
   */
  static builder(): EntityBuilderType<AddressEmailAddress, AddressEmailAddressTypeForceMandatory> {
    return Entity.entityBuilder(AddressEmailAddress);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AddressEmailAddress` entity type.
   * @returns A `AddressEmailAddress` request builder.
   */
  static requestBuilder(): AddressEmailAddressRequestBuilder {
    return new AddressEmailAddressRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressEmailAddress`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
   */
  static customField(fieldName: string): CustomField<AddressEmailAddress> {
    return Entity.customFieldSelector(fieldName, AddressEmailAddress);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AddressEmailAddressType {
  addressId: string;
  person: string;
  ordinalNumber: string;
  isDefaultEmailAddress?: boolean;
  emailAddress?: string;
  searchEmailAddress?: string;
  addressCommunicationRemarkText?: string;
}

export interface AddressEmailAddressTypeForceMandatory {
  addressId: string;
  person: string;
  ordinalNumber: string;
  isDefaultEmailAddress: boolean;
  emailAddress: string;
  searchEmailAddress: string;
  addressCommunicationRemarkText: string;
}

export namespace AddressEmailAddress {
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID: StringField<AddressEmailAddress> = new StringField('AddressID', AddressEmailAddress, 'Edm.String');
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON: StringField<AddressEmailAddress> = new StringField('Person', AddressEmailAddress, 'Edm.String');
  /**
   * Static representation of the [[ordinalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDINAL_NUMBER: StringField<AddressEmailAddress> = new StringField('OrdinalNumber', AddressEmailAddress, 'Edm.String');
  /**
   * Static representation of the [[isDefaultEmailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_EMAIL_ADDRESS: BooleanField<AddressEmailAddress> = new BooleanField('IsDefaultEmailAddress', AddressEmailAddress, 'Edm.Boolean');
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<AddressEmailAddress> = new StringField('EmailAddress', AddressEmailAddress, 'Edm.String');
  /**
   * Static representation of the [[searchEmailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_EMAIL_ADDRESS: StringField<AddressEmailAddress> = new StringField('SearchEmailAddress', AddressEmailAddress, 'Edm.String');
  /**
   * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COMMUNICATION_REMARK_TEXT: StringField<AddressEmailAddress> = new StringField('AddressCommunicationRemarkText', AddressEmailAddress, 'Edm.String');
  /**
   * All fields of the AddressEmailAddress entity.
   */
  export const _allFields: Array<StringField<AddressEmailAddress> | BooleanField<AddressEmailAddress>> = [
    AddressEmailAddress.ADDRESS_ID,
    AddressEmailAddress.PERSON,
    AddressEmailAddress.ORDINAL_NUMBER,
    AddressEmailAddress.IS_DEFAULT_EMAIL_ADDRESS,
    AddressEmailAddress.EMAIL_ADDRESS,
    AddressEmailAddress.SEARCH_EMAIL_ADDRESS,
    AddressEmailAddress.ADDRESS_COMMUNICATION_REMARK_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AddressEmailAddress> = new AllFields('*', AddressEmailAddress);
  /**
   * All key fields of the AddressEmailAddress entity.
   */
  export const _keyFields: Array<Field<AddressEmailAddress>> = [AddressEmailAddress.ADDRESS_ID, AddressEmailAddress.PERSON, AddressEmailAddress.ORDINAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property AddressEmailAddress.
   */
  export const _keys: { [keys: string]: Field<AddressEmailAddress> } = AddressEmailAddress._keyFields.reduce((acc: { [keys: string]: Field<AddressEmailAddress> }, field: Field<AddressEmailAddress>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
