/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.17.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Attribute } from './attribute';


/**
 * input to setUserFacilityAttributes
 */
export interface InputSetUserFacilityAttributes { 
    /**
     * user id
     */
    user: number;
    /**
     * facility id
     */
    facility: number;
    attributes: Array<Attribute>;
}

