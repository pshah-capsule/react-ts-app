export const LOCATION = 'location';
export const DESIGNATION = 'designation';
export const DEPARTMENT = 'department';
export type DIMENSTION =  typeof LOCATION | typeof DESIGNATION | typeof DEPARTMENT;
export interface SentimentData {
  segment: string;
  sentiment: number;
  percentage: number;
}
export interface User {
  User: string;
  location: string;
  designation: string;
  department: string;
}