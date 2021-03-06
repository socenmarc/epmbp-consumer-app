import { SupplierPurchasingOrgTextRequestBuilder } from './SupplierPurchasingOrgTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierPurchasingOrgText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierPurchasingOrgText extends Entity implements SupplierPurchasingOrgTextType {
    /**
     * Technical entity name for SupplierPurchasingOrgText.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierPurchasingOrgText.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Supplier.
     * Maximum length: 10.
     */
    supplier: string;
    /**
     * Purchasing Organization.
     * Maximum length: 4.
     */
    purchasingOrganization: string;
    /**
     * Language key.
     * The language key is an abbreviation for the language of the object being processed (for example, standard text, form, style).
     * Maximum length: 2.
     */
    language: string;
    /**
     * Text ID.
     * The text ID defines the various types of texts related to a text object. For example, the object "TEXT" (standard texts) can have the following text IDs:
     * ST for user-specific standard texts (individual texts)SYST for cross-application system textsvarious IDs for specific application departments. You must have the appropriate access authorization in order to access these texts.
     * Maximum length: 4.
     */
    longTextId: string;
    /**
     * String.
     * @nullable
     */
    longText?: string;
    /**
     * Returns an entity builder to construct instances `SupplierPurchasingOrgText`.
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrgText`.
     */
    static builder(): EntityBuilderType<SupplierPurchasingOrgText, SupplierPurchasingOrgTextTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierPurchasingOrgText` entity type.
     * @returns A `SupplierPurchasingOrgText` request builder.
     */
    static requestBuilder(): SupplierPurchasingOrgTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPurchasingOrgText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrgText`.
     */
    static customField(fieldName: string): CustomField<SupplierPurchasingOrgText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SupplierPurchasingOrgTextType {
    supplier: string;
    purchasingOrganization: string;
    language: string;
    longTextId: string;
    longText?: string;
}
export interface SupplierPurchasingOrgTextTypeForceMandatory {
    supplier: string;
    purchasingOrganization: string;
    language: string;
    longTextId: string;
    longText: string;
}
export declare namespace SupplierPurchasingOrgText {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<SupplierPurchasingOrgText>;
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_ORGANIZATION: StringField<SupplierPurchasingOrgText>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<SupplierPurchasingOrgText>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: StringField<SupplierPurchasingOrgText>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: StringField<SupplierPurchasingOrgText>;
    /**
     * All fields of the SupplierPurchasingOrgText entity.
     */
    const _allFields: Array<StringField<SupplierPurchasingOrgText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierPurchasingOrgText>;
    /**
     * All key fields of the SupplierPurchasingOrgText entity.
     */
    const _keyFields: Array<Field<SupplierPurchasingOrgText>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierPurchasingOrgText.
     */
    const _keys: {
        [keys: string]: Field<SupplierPurchasingOrgText>;
    };
}
//# sourceMappingURL=SupplierPurchasingOrgText.d.ts.map