interface Entity {
    id: number;
}

interface User extends Entity{
    name: string;
}

interface Product extends Entity {
    name: string;
    price: number;
}

type Repository<T extends Entity> = {
    index: () => T[] | undefined;
    create: (entity: T) => void;
    update: (entity: T) => void;
    delete: (entity: T) => void;
    show: (id: number) => T | undefined;
};

const createInMemoryRepository = <T extends Entity>(): Repository<T> => {
    let entities: T[] = [];

    const index = () => entities;
    const create = (entity: T) => entities.push(entity);
    const update = (entity: T) => {
        const entityIndex = entities.findIndex((e) => e.id === entity.id);
        if (entityIndex !== -1) {
            entities[entityIndex] = entity;
        }
    };
    const destroy = (entity: T) => {
        entities = entities.filter((e) => e.id !== entity.id);
    };
    const show = (id: number) => entities.find((entity) => entity.id === id);

    return {
        index,
        create,
        update,
        delete: destroy,
        show,
    };
};

const extendRepository = <T extends Product>(repository: Repository<T>): Repository<T> & {
    findByName: (name: string) => T[];
    findByPriceRange: (minPrice: number, maxPrice: number) => T[];
    find: (name: string) => T | undefined;
} => {
    return {
        ...repository,
        findByName: (name: string) => {
            return repository.index().filter(product => product.name === name);
        },
        findByPriceRange: (minPrice: number, maxPrice: number) => {
            return repository.index().filter(
                product => product.price >= minPrice && product.price <= maxPrice
            );
        },
        find: (name: string) => {
            return repository.index().find(product => product.name === name);
        }
    };
};

const userRepository = createInMemoryRepository<User>();
const productRepository = extendRepository(createInMemoryRepository<Product>());
