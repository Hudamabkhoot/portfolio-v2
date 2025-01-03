'use server'

import projectModal from "../models/projectModel"
import connectDB from "../config/database"
import { useLocale } from "next-intl"


export async function getProjects() {
    const locale = useLocale
    const orderValue = locale === 'ar' ? 6 : 1;

    try {
        await connectDB()
        const data = JSON.parse(JSON.stringify(await projectModal.find({ lang: locale }).sort({ order: orderValue })))

        return { data }

    } catch(err) {
        return { errMsg: err.message}
    }
}