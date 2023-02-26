import prismaClient from 'database/prisma-client';
import { Request, Response } from 'express';

export default class CreateProductController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const { name, bar_code, price } = request.body;

        const product = await prismaClient.product.create({
            data: {
                name,
                bar_code,
                price
            }
        });

        return response.json(product);
    }
}
