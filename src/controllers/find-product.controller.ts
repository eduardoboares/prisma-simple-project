import prismaClient from 'database/prisma-client';
import { Request, Response } from 'express';

export default class FindProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const product = await prismaClient.product.findFirst({
            where: {
                id
            },
            include: {
                ProductCategory: true
            }
        });

        return response.json(product);
    }
}
