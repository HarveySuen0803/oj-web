/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from '../models/BaseResponseBoolean';
import type { BaseResponseLoginUserVo } from '../models/BaseResponseLoginUserVo';
import type { BaseResponseLong } from '../models/BaseResponseLong';
import type { BaseResponsePageUser } from '../models/BaseResponsePageUser';
import type { BaseResponsePageUserVo } from '../models/BaseResponsePageUserVo';
import type { BaseResponseUser } from '../models/BaseResponseUser';
import type { BaseResponseUserVo } from '../models/BaseResponseUserVo';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { UserAddRequest } from '../models/UserAddRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserQueryRequest } from '../models/UserQueryRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserUpdateMyRequest } from '../models/UserUpdateMyRequest';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * @param requestBody
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static updUser(
        requestBody: UserUpdateRequest,
    ): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static updMyUser(
        requestBody: UserUpdateMyRequest,
    ): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/update/my',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseLong OK
     * @throws ApiError
     */
    public static register(
        requestBody: UserRegisterRequest,
    ): CancelablePromise<BaseResponseLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static logout(): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/logout',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseLoginUserVo OK
     * @throws ApiError
     */
    public static login(
        requestBody: UserLoginRequest,
    ): CancelablePromise<BaseResponseLoginUserVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageUser OK
     * @throws ApiError
     */
    public static getUserPage(
        requestBody: UserQueryRequest,
    ): CancelablePromise<BaseResponsePageUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/list/page',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageUserVo OK
     * @throws ApiError
     */
    public static getUserVoPage(
        requestBody: UserQueryRequest,
    ): CancelablePromise<BaseResponsePageUserVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/list/page/vo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static delUser(
        requestBody: DeleteRequest,
    ): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseLong OK
     * @throws ApiError
     */
    public static addUser(
        requestBody: UserAddRequest,
    ): CancelablePromise<BaseResponseLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns BaseResponseUser OK
     * @throws ApiError
     */
    public static getUserById(
        id: number,
    ): CancelablePromise<BaseResponseUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get',
            query: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns BaseResponseUserVo OK
     * @throws ApiError
     */
    public static getUserVoById(
        id: number,
    ): CancelablePromise<BaseResponseUserVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get/vo',
            query: {
                'id': id,
            },
        });
    }
    /**
     * @returns BaseResponseLoginUserVo OK
     * @throws ApiError
     */
    public static getLoginUserVo(): CancelablePromise<BaseResponseLoginUserVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get/login',
        });
    }
}
