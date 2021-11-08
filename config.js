/*
Create and export configuration variables
*/

const environments = {};

// create staging (default) object
environments.staging = {
    port : 3000,
    envName : "staging"
};
// create production environment
environments.production = {
    port : 5000,
    envName : "production"
}; 

// export required environment
const currEnv = typeof(process.env.NODE_ENV) === "string" ? process.env.NODE_ENV.toLowerCase() : "";

// validate current environment
const envExport = typeof(environments[currEnv]) === "object" ? environments[currEnv] : environments.staging;

// Export environment
module.exports = envExport;