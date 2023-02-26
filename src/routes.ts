import CreateCategoryController from 'controllers/create-category.controller';
import CreateProductCategoryController from 'controllers/create-product-category.controller';
import FindCategoryController from 'controllers/find-category.controller';
import { Router } from 'express';
import CreateProductWithExistCategoryController from './controllers/create-product-with-exist-category';
import CreateProductController from './controllers/create-product.controller';
import FindProductController from './controllers/find-product.controller';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategoryController();
const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);
router.post('/categoryProduct', createProductCategory.handle);
router.post('/productWithCategory', createProductCategoryExist.handle);
router.get('/product/:id', findProduct.handle);
router.get('/category/:id', findCategory.handle);

export default router;
