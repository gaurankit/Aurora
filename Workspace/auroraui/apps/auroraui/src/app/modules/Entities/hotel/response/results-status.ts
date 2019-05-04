namespace ORXe_Flight_Response {
    export interface Error {
        code: string;
        message: string;
    }        
    export interface statusResponse {
        status: string;        
        resultsAvailable: number;        
        errors: Error[];        
    }
  }
  