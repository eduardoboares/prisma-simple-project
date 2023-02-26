import prismaClient from 'database/prisma-client';
import { Request, Response } from 'express';

export default class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const category = await prismaClient.category.create({
            data: {
                name
            }
        });

        return response.json(category);
    }
}
