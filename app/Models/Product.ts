import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

import ProductImage from './ProductImage'
import Category from './Category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public category_id: number

  @column()
  public wa_number: string

  @column()
  public price: number

  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['name']
  })
  public slug: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ProductImage, {
    foreignKey: 'product_id'
  })
  public images: HasMany<typeof ProductImage>

  @belongsTo(() => Category, {
    localKey: 'category_id'
  })
  public product: BelongsTo<typeof Category>
}
