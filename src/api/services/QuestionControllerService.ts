/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from '../models/BaseResponseBoolean';
import type { BaseResponseLong } from '../models/BaseResponseLong';
import type { BaseResponsePageQuestion } from '../models/BaseResponsePageQuestion';
import type { BaseResponsePageQuestionVo } from '../models/BaseResponsePageQuestionVo';
import type { BaseResponseQuestion } from '../models/BaseResponseQuestion';
import type { BaseResponseQuestionVo } from '../models/BaseResponseQuestionVo';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { QuestionAddRequest } from '../models/QuestionAddRequest';
import type { QuestionEditRequest } from '../models/QuestionEditRequest';
import type { QuestionQueryRequest } from '../models/QuestionQueryRequest';
import type { QuestionUpdateRequest } from '../models/QuestionUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionControllerService {
    /**
     * @param requestBody
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static updQuestion(
        requestBody: QuestionUpdateRequest,
    ): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageQuestionVo OK
     * @throws ApiError
     */
    public static getMyQuestionVoPage(
        requestBody: QuestionQueryRequest,
    ): CancelablePromise<BaseResponsePageQuestionVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/my/list/page/vo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageQuestion OK
     * @throws ApiError
     */
    public static getQuestionPage(
        requestBody: QuestionQueryRequest,
    ): CancelablePromise<BaseResponsePageQuestion> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/list/page',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponsePageQuestionVo OK
     * @throws ApiError
     */
    public static getQuestionVoPage(
        requestBody: QuestionQueryRequest,
    ): CancelablePromise<BaseResponsePageQuestionVo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/list/page/vo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static editQuestion(
        requestBody: QuestionEditRequest,
    ): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/edit',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseBoolean OK
     * @throws ApiError
     */
    public static delQuestion(
        requestBody: DeleteRequest,
    ): CancelablePromise<BaseResponseBoolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns BaseResponseLong OK
     * @throws ApiError
     */
    public static addQuestion(
        requestBody: QuestionAddRequest,
    ): CancelablePromise<BaseResponseLong> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns BaseResponseQuestion OK
     * @throws ApiError
     */
    public static getQuestionById(
        id: number,
    ): CancelablePromise<BaseResponseQuestion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get',
            query: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns BaseResponseQuestionVo OK
     * @throws ApiError
     */
    public static getQuestionVoById(
        id: number,
    ): CancelablePromise<BaseResponseQuestionVo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get/vo',
            query: {
                'id': id,
            },
        });
    }
}
