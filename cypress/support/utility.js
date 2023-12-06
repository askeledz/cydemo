import { env } from "../support/config/config"

let envi = ''

export class Utility {
    getEnvi() {
        if (Cypress.env('ENV') == undefined) {
            envi = env
        } else {
            envi = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        }
        return envi
    }

    getBaseUrl() {
        envi = this.getEnvi()
        if (envi == 'qa')
            return "https://d2ufixqq814vug.cloudfront.net/";
        else if (envi == 'staging')
            return "https://d3rf4q5kqya1k5.cloudfront.net/";
        else if (envi == 'dev')
            return "https://d1yynrn0800a33.cloudfront.net/";
        else (envi == 'prod')
        return "https://streamtwc.com/";
    }
}