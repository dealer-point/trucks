/// <reference path='common/services/user.d.ts' />
// Declarerequire function
declare function require(string: string): Function;

/*
  Declare 'Waves' module
*/
interface IWaves {
  init(): Function;
}
// declare module "waves" { }
declare var Waves: IWaves;

interface IAppRootScope extends ng.IRootScopeService {
    currentUser: IUser
}
