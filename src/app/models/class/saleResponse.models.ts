export class SaleResponse {
    first=                                     0;
    size=                                      0;
    totalPages=                                0;
    totalCount=                                0;
    items:                                     Sale[] = [ new Sale ];
}

export class Sale {
    id?=                                       "";
    files?:                                    File[] = [ new File ];
    customer?=                                 null;
    customerId?=                               "";
    productName=                               "";
    productDescription=                        "";
    price=                                     0;
    producedYear:                              Date = new Date();
}

export class File {
    saleId=                                    "";
    sale:                                      SaleFile = new SaleFile();
    uri=                                       "";
    description=                               "";
    type=                                      0;
    id=                                        "";
    createdOn=                                 Date;
    modifiedOn=                                null;
    deletedOn=                                 null;
    createdByUser=                             "";
    modifiedByUser=                            null;
    deletedByUser=                             null;
    deleted=                                   false;
}

export class SaleFile {
    customer=                                  null;
    customerId=                                "";
    productName=                               "";
    productDescription=                        "";
    price=                                     0;
    producedYear :                             Date = new Date();
    id=                                        "";
    createdOn:                                 Date = new Date();
    modifiedOn=                                null;
    deletedOn=                                 null;
    createdByUser=                             "";
    modifiedByUser=                            null;
    deletedByUser=                             null;
    deleted=                                   false;
}