import { createReducer, on } from '@ngrx/store';
import { CustomerRegister } from 'src/app/models';
import * as CustomerActions from 'src/app/store/actions/customer/customer.actions';

export interface customerState {
    Customer : CustomerRegister
}

export const initialUserEntries : CustomerRegister = new CustomerRegister() ;

export const CustomerReducer = createReducer(
    initialUserEntries,

    on(CustomerActions.storeCustomerSuccess , (state , { customer })=>{
       

        state = customer;
        return state;
    }),
    
    on(CustomerActions.storeCustomerFailure , (state , {error}) => {
        
        return {...state , error : error};
    }),

    on( CustomerActions.addLoginDataToCustomer , ( state , loginResponse ) => {

        window.localStorage.setItem("token" , loginResponse.logingResponse.token);

        return { ...state , ...loginResponse.logingResponse };
    }),

    on(CustomerActions.addCustomerDataFromPayload , (state , { customerInfo }) => {

        const { customerData : { email } , logingResponse : { expiration , lifetime , mD5 , token , userId } } = customerInfo || {};

        const payload = getCustomerInfoFromToken( token );
    
        const customer : CustomerRegister = {
            firstName : payload.firstName,
            lastName : payload.lastName,
            documentNumber : payload.documentNumber,
            prefix : '34',
            phone : payload.phone,
            active : true,
            token : token,
            userId : userId,
            tokenExpiration: expiration,
            lifeTime: lifetime,
            mD5: mD5,
            email : email,
            password : ""
        }

        window.localStorage.setItem("token" , token);

        state = customer;

        return state;

    }),

    on( CustomerActions.addCustomerDataFromToken , (state , { order }) => {

        const token : string | null = window.localStorage.getItem("token");

        if( token && order === 'store_customerInfo_from_token' ){

            const payload = getCustomerInfoFromToken( token );

            return { ...payload }

        } else {

            return state;
        }
        
    }),

    on( CustomerActions.cleanCustomerData , ( state , { order }) => {

        console.log(state , order);

        window.localStorage.removeItem("token");

        return new CustomerRegister();
    })
) 

const getCustomerInfoFromToken = ( token : string ) => {

    const tokenParts = token.split('.');
    
    const payloadBase64 = tokenParts[1];

    const payloadDecoded = atob(payloadBase64);

    return JSON.parse(payloadDecoded);
}