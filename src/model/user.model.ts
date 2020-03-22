export const LOCATION = 'location';
export const DESIGNATION = 'designation';
export const DEPARTMENT = 'department';
export type DIMENSTION =  typeof LOCATION | typeof DESIGNATION | typeof DEPARTMENT;
export interface User {
  User: string;
  location: string;
  designation: string;
  department: string;
}