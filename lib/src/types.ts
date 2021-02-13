//import * as conf from "@azure/msal-browser";
import { CacheOptions, BrowserSystemOptions }  from "@azure/msal-browser";
import { AuthError, AuthenticationResult, AccountInfo } from "@azure/msal-common";

export type DataObject = {
    isAuthenticated: boolean,
    accessToken: string,
    idToken: string,
    user: User,
    custom: object,
    account?: AccountInfo
}

export type FrameworkOptions = {
    globalMixin?: boolean
}


export type Options = {
    auth: Auth,
    loginRequest: Request,
    tokenRequest: Request,
    cache?: CacheOptions,
    system?: BrowserSystemOptions,
    framework?: FrameworkOptions
}

export type Request = {
    scopes?: string[]
    account? : AccountInfo
}

// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
export type Auth = {
    clientId: string,
    authority: string,
    redirectUri: string,
    autoRefreshToken?: boolean,
    requireAuthOnInitialize?: boolean,
    onAuthentication: (ctx: object, error: AuthError, response: AuthenticationResult) => any,
    onToken: (ctx: object, error: AuthError | null, response: AuthenticationResult | null) => any,
    beforeSignOut: (ctx: object) => any
}

export interface iMSAL {
    data: DataObject,
    signIn: () => Promise<any> | void,
    signOut: () => Promise<any> | void,
    acquireToken: () => Promise<any> | void,
    isAuthenticated: () => boolean,
    getCurrentAccount: () => undefined | AccountInfo
    getOrganization: () => Promise<any> | void
}

export type User = {
    name: string,
    userName: string
}