import { CATEGORIES_DATA } from '../../constants/rest/categories.data';
import { CategoriesCreateDTO, CategoriesUpdateDTO } from '../../types/rest/categories.types';

export const CategoriesFixtures = {
  create: {
    valid: {
      clothes: {
        name: `${CATEGORIES_DATA.NAMES.CLOTHES}_${Date.now()}`,
        image: CATEGORIES_DATA.IMAGES.DEFAULT,
      } as CategoriesCreateDTO,

      electronics: {
        name: CATEGORIES_DATA.NAMES.ELECTRONICS,
        image: CATEGORIES_DATA.IMAGES.GRAY,
      } as CategoriesCreateDTO,

      furniture: {
        name: CATEGORIES_DATA.NAMES.FURNITURE,
        image: CATEGORIES_DATA.IMAGES.RANDOM,
      } as CategoriesCreateDTO,
    },

    invalid: {
      emptyName: {
        name: '',
        image: CATEGORIES_DATA.IMAGES.DEFAULT,
      } as CategoriesCreateDTO,

      missingImage: {
        name: CATEGORIES_DATA.NAMES.FOOD,
      } as Partial<CategoriesCreateDTO>,
    },
  },

  update: {
    valid: {
      changeName: {
        name: `Updated_${Date.now()}`,
      } as CategoriesUpdateDTO,

      changeImage: {
        image: CATEGORIES_DATA.IMAGES.UNSPLASH_NATURE,
      } as CategoriesUpdateDTO,

      changeNameImage: {
        name: CATEGORIES_DATA.NAMES.BOOKS,
        image: CATEGORIES_DATA.IMAGES.UNSPLASH_TECH,
      } as CategoriesUpdateDTO,
    },

    invalid: {
      emptyName: {
        name: '',
        image: CATEGORIES_DATA.IMAGES.DEFAULT,
      } as CategoriesUpdateDTO,

      missingImage: {
        name: CATEGORIES_DATA.NAMES.FOOD,
      } as Pick<CategoriesUpdateDTO, 'name'>,
    },
  },
};
