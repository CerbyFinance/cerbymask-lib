import { EventEmitter } from "stream";

export interface CerbymaskWindow extends Window {
    cerbymask: {
        connect: Function,
        validateWallet: Function,
        submitTransaction(transaction: TransactionFieldsT): Function,
        getPublicAddresses: Function,
        events: EventEmitter;
    }
}
export interface RequestT {
    title: string;
    data: any;
}

export interface TransactionFieldsT {
    _id?: string;
    from: string;
    to: string;
    amount: string;
    rri: string;
    token?: number;
}

export interface NetworkT {
    name: string;
    url: string;
}

export interface SignedTransactionT {
    blob: string;
    publicKeyOfSigner: string;
    signatureDER: string;
}

export interface ValidatorT {
    address: string;
    infoURL: string;
    isExternalStakeAccepted: boolean;
    name: string;
    ownerAddress: string;
    ownerDelegation: string;
    proposalsCompleted: string;
    proposalsMissed: string;
    registered: boolean;
    totalDelegatedStake: string;
    uptimePercentage: string;
    validatorFee: string;
}

export interface PromotedValidatorT extends ValidatorT {

}

export interface StakeT {
    from: string;
    validator: string;
    amount: string;
}

export default CerbymaskWindow
