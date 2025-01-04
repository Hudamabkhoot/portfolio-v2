'use server'

import projectModal from "../models/projectModel"
import connectDB from "../config/database"


export async function getProjects() {

    try {
        const connectionSuccess = await connectDB();

        if (!connectionSuccess) {
            throw new Error("Failed to connect to the database");
        }

        const projects = await projectModal.find().sort({ order: 1 });


        if (!projects || projects.length === 0) {
            throw new Error('No projects found');
        }

        return { data: JSON.parse(JSON.stringify(projects)) };

    } catch(err) {
        return {
            error: true,
            message: err.message || 'An unexpected error occurred while fetching the projects.',
        };
    }
}