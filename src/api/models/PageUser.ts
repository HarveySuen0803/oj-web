/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { User } from './User';
export type PageUser = {
    records?: Array<User>;
    total?: number;
    size?: number;
    current?: number;
    /**
     * @deprecated
     */
    orders?: Array<OrderItem>;
    /**
     * @deprecated
     */
    optimizeCountSql?: boolean;
    /**
     * @deprecated
     */
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /**
     * @deprecated
     */
    maxLimit?: number;
    /**
     * @deprecated
     */
    countId?: string;
    pages?: number;
};

