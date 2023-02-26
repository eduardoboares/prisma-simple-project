import prismaClient from 'database/prisma-client';
import { Request, Response } from 'express';

export default class CreateProductCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id_product, id_category } = request.body;

        const productCategory = await prismaClient.productCategory.create({
            data: {
                id_product,
                id_category
            }
        });

        return response.json(productCategory);
    }
}
