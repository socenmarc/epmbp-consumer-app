/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomerCompanyText } from './CustomerCompanyText';

/**
 * Request builder class for operations supported on the [[CustomerCompanyText]] entity.
 */
export class CustomerCompanyTextRequestBuilder extends RequestBuilder<CustomerCompanyText> {
  /**
   * Returns a request builder for retrieving one `CustomerCompanyText` entity based on its keys.
   * @param customer Key property. See [[CustomerCompanyText.customer]].
   * @param companyCode Key property. See [[CustomerCompanyText.companyCode]].
   * @param language Key property. See [[CustomerCompanyText.language]].
   * @param longTextId Key property. See [[CustomerCompanyText.longTextId]].
   * @returns A request builder for creating requests to retrieve one `CustomerCompanyText` entity based on its keys.
   */
  getByKey(customer: string, companyCode: string, language: string, longTextId: string): GetByKeyRequestBuilder<CustomerCompanyText> {
    return new GetByKeyRequestBuilder(CustomerCompanyText, {
      Customer: customer,
      CompanyCode: companyCode,
      Language: language,
      LongTextID: longTextId
    });
  }

  /**
   * Returns a request builder for querying all `CustomerCompanyText` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerCompanyText` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerCompanyText> {
    return new GetAllRequestBuilder(CustomerCompanyText);
  }

  /**
   * Returns a request builder for creating a `CustomerCompanyText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerCompanyText`.
   */
  create(entity: CustomerCompanyText): CreateRequestBuilder<CustomerCompanyText> {
    return new CreateRequestBuilder(CustomerCompanyText, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerCompanyText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerCompanyText`.
   */
  update(entity: CustomerCompanyText): UpdateRequestBuilder<CustomerCompanyText> {
    return new UpdateRequestBuilder(CustomerCompanyText, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerCompanyText`.
   * @param customer Key property. See [[CustomerCompanyText.customer]].
   * @param companyCode Key property. See [[CustomerCompanyText.companyCode]].
   * @param language Key property. See [[CustomerCompanyText.language]].
   * @param longTextId Key property. See [[CustomerCompanyText.longTextId]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerCompanyText`.
   */
  delete(customer: string, companyCode: string, language: string, longTextId: string): DeleteRequestBuilder<CustomerCompanyText>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerCompanyText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerCompanyText` by taking the entity as a parameter.
   */
  delete(entity: CustomerCompanyText): DeleteRequestBuilder<CustomerCompanyText>;
  delete(customerOrEntity: any, companyCode?: string, language?: string, longTextId?: string): DeleteRequestBuilder<CustomerCompanyText> {
    return new DeleteRequestBuilder(CustomerCompanyText, customerOrEntity instanceof CustomerCompanyText ? customerOrEntity : {
      Customer: customerOrEntity!,
      CompanyCode: companyCode!,
      Language: language!,
      LongTextID: longTextId!
    });
  }
}
