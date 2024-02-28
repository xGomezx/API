import { config } from "dotenv";

if (process.env.NODE_ENV!=='production') {
    config()
}

/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:51:21 PM
 *
 * @type {*}
 */
export const PORT = process.env.PORT
/**
 * ${1:Description placeholder}
 * @date 2/28/2024 - 1:51:21 PM
 *
 * @type {*}
 */
export const MONGO_URI =process.env.MONGO_URI