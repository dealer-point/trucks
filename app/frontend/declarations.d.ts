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
