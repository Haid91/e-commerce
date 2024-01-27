import Product from './Product';
import Category from './Category';
import Tag from './Tag';
import ProductTag from './ProductTag';

// Defining relationships between models

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Product belongs to many Tags through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tag belongs to many Products through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Exporting models
export { Product, Category, Tag, ProductTag };