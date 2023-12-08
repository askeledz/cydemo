import { env } from "../support/config/config"

let envi = ''

export class Utility {
    getEnvi() {
        console.log(Cypress.env('ENV'))
        //value === undefined || value === null
        if (Cypress.env('ENV') == undefined || Cypress.env('ENV') == null || Cypress.env('ENV') == '') {
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
        else if (envi == 'prod')
        return "https://streamtwc.com/";
    }
}