// import { Resource } from "../../types/modelTypes"
// import { schema, tSchema } from "../../db/schema"




// function toA<Resource>(table: string, params: unknown): Resource | null {
//     if (isStructuredLikeA<Resource>(table, params)) {
//         const resource = schema.find(t => t.name === table);
//         if (resource) {
//             if (convertColumns(resource, params)) {
//                 return params;
//             }
//         }

//     } else return null;
// }

// function isStructuredLikeA<Resource>(table: string, params: unknown): params is indexable {
//     const tryObject = <Resource>params
//     if (typeof tryObject == "object") {
//         const tryResource = <indexable>params;
//         const resource = schema.find(t => t.name === table);
//         resource?.columns.forEach(c => {
//             if (!tryResource[c.name]) return false;
//         })
//     } else return false;
//     return true
// }


// function convertColumns<Resource>(sc: tSchema, params: indexable): params is Resource {
//     let failed = false;
//     let failureMessage = ""
//     sc.columns.forEach(c => {
//         if (c.type === "string" && typeof params[c.name] !== "string") {
//             params[c.name] = params[c.name].toString();
//         } else if (c.type === "int" && typeof params[c.name] === "string") {
//             params[c.name] = parseInt(<string>params[c.name])
//             if (params[c.name] === NaN) {
//                 failed = true;
//                 failureMessage += "-- ERROR in convertColumns: " + c.name + " (" + params[c.name] + ") is not a Number -- \n"
//             }
//         } else if (c.type === "int" && typeof params[c.name] !== "number") {
//             failed = true;
//             failureMessage += "-- ERROR in convertColumns: " + c.name + " (" + params[c.name] + ") is not a Number -- \n"
//         } else if (c.type === "boolean" && typeof params[c.name] === "string") {
//             if (params[c.name] === "true") params[c.name] = true;
//             else if (params[c.name] === "false") params[c.name] = false;
//             else {
//                 failed = true;
//                 failureMessage += "-- ERROR in convertColumns: " + c.name + " (" + params[c.name] + ") is not a Boolean -- \n"
//             }
//         } else {
//             failed = true;
//             failureMessage += "-- ERROR in convertColumns: couldn't convert " + c.name + " (" + params[c.name] + " to c.type\n"
//         }
//     })
//     return !failed
// }