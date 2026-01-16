import { PRODUCT_DATA } from '../../constants/rest/product.data';
import { ProductCreateDTO, ProductUpdateDTO } from '../../types/rest/product.types';

export const productFixtures = {
  create: {
    valid: {
      iphone15: {
        title: PRODUCT_DATA.IPHONE_15.TITLE,
        price: PRODUCT_DATA.IPHONE_15.PRICE,
        description: PRODUCT_DATA.IPHONE_15.DESCRIPTION,
        categoryId: PRODUCT_DATA.IPHONE_15.CATEGORY_ID,
        images: [...PRODUCT_DATA.IPHONE_15.IMAGES],
      } as ProductCreateDTO,

      iphone16Pro: {
        title: PRODUCT_DATA.IPHONE_16_PRO.TITLE,
        price: PRODUCT_DATA.IPHONE_16_PRO.PRICE,
        description: PRODUCT_DATA.IPHONE_16_PRO.DESCRIPTION,
        categoryId: PRODUCT_DATA.IPHONE_16_PRO.CATEGORY_ID,
        images: [...PRODUCT_DATA.IPHONE_16_PRO.IMAGES],
      } as ProductCreateDTO,

      iphone17Ultra: {
        title: PRODUCT_DATA.IPHONE_17_ULTRA.TITLE,
        price: PRODUCT_DATA.IPHONE_17_ULTRA.PRICE,
        description: PRODUCT_DATA.IPHONE_17_ULTRA.DESCRIPTION,
        categoryId: PRODUCT_DATA.IPHONE_17_ULTRA.CATEGORY_ID,
        images: [...PRODUCT_DATA.IPHONE_17_ULTRA.IMAGES],
      } as ProductCreateDTO,
    },

    invalid: {
      emptyTitle: {
        title: '',
        price: 100,
        description: 'Test description',
        categoryId: 1,
        images: ['https://placehold.co/600x400'],
      } as ProductCreateDTO,

      negativePrice: {
        title: 'Test Product',
        price: -10,
        description: 'Test description',
        categoryId: 1,
        images: ['https://placehold.co/600x400'],
      } as ProductCreateDTO,

      missingImages: {
        title: 'Test Product',
        price: 100,
        description: 'Test description',
        categoryId: 1,
        images: [],
      } as ProductCreateDTO,
    },
  },

  update: {
    valid: {
      updateTitle: {
        title: 'Updated Product Title',
      } as ProductUpdateDTO,

      updatePrice: {
        price: 299.99,
      } as ProductUpdateDTO,

      updateImages: {
        images: [
          'https://placehold.co/600x400/4A90E2/FFFFFF',
          'https://placehold.co/600x400/50E3C2/FFFFFF',
        ],
      } as ProductUpdateDTO,
    },
  },
};
