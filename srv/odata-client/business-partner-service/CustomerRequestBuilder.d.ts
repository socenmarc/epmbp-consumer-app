import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { Customer } from './Customer';
/**
 * Request builder class for operations supported on the [[Customer]] entity.
 */
export declare class CustomerRequestBuilder extends RequestBuilder<Customer> {
    /**
     * Returns a request builder for retrieving one `Customer` entity based on its keys.
     * @param customer Key property. See [[Customer.customer]].
     * @returns A request builder for creating requests to retrieve one `Customer` entity based on its keys.
     */
    getByKey(customer: string): GetByKeyRequestBuilder<Customer>;
    /**
     * Returns a request builder for querying all `Customer` entities.
     * @returns A request builder for creating requests to retrieve all `Customer` entities.
     */
    getAll(): GetAllRequestBuilder<Customer>;
    /**
     * Returns a request builder for updating an entity of type `Customer`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Customer`.
     */
    update(entity: Customer): UpdateRequestBuilder<Customer>;
}
//# sourceMappingURL=CustomerRequestBuilder.d.ts.map