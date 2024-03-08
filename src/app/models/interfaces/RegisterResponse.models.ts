export interface RegisterResponse {
    result: RegisterResponseResult;
}

export interface RegisterResponseResult {
    result:                  Result;
    id:                      number;
    exception:               null;
    status:                  number;
    isCanceled:              boolean;
    isCompleted:             boolean;
    isCompletedSuccessfully: boolean;
    creationOptions:         number;
    asyncState:              null;
    isFaulted:               boolean;
}

export interface Result {
    /* files:          any[];
    products:       any[]; */
    firstName:      string;
    lastName:       string;
    documentNumber: string;
    email:          string;
    phone:          string;
    salt:           string;
    passwordHash:   string;
    active:         boolean;
    status:         number;
    id:             string;
    createdOn:      Date;
    modifiedOn:     null;
    deletedOn:      null;
    createdByUser:  string;
    modifiedByUser: null;
    deletedByUser:  null;
    deleted:        boolean;
}