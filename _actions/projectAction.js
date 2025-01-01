'use server'

import projectModal from "../models/projectModel"
import connectDB from "../config/database"


export async function getProjects() {
    try {
        await connectDB()
        const data = JSON.parse(JSON.stringify(await projectModal.find().sort({ order: 1 })))

        return { data }

    } catch(err) {
        return { errMsg: err.message}
    }
}