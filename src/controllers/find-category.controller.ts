import prismaClient from 'database/prisma-client';
import { Request, Response } from 'express';

export default class FindCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const category = await prismaClient.category.findFirst({
            where: {
                id
            },
            include: {
                ProductCategory: true
            }
        });

        return response.json(category);
    }
}
