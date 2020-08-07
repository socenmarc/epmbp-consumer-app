import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { Supplier } from './Supplier';
/**
 * Request builder class for operations supported on the [[Supplier]] entity.
 */
export declare class SupplierRequestBuilder extends RequestBuilder<Supplier> {
    /**
     * Returns a request builder for retrieving one `Supplier` entity based on its keys.
     * @param supplier Key property. See [[Supplier.supplier]].
     * @returns A request builder for creating requests to retrieve one `Supplier` entity based on its keys.
     */
    getByKey(supplier: string): GetByKeyRequestBuilder<Supplier>;
    /**
     * Returns a request builder for querying all `Supplier` entities.
     * @returns A request builder for creating requests to retrieve all `Supplier` entities.
     */
    getAll(): GetAllRequestBuilder<Supplier>;
    /**
     * Returns a request builder for updating an entity of type `Supplier`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Supplier`.
     */
    update(entity: Supplier): UpdateRequestBuilder<Supplier>;
}
//# sourceMappingURL=SupplierRequestBuilder.d.ts.map