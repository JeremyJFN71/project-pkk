import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class ProductImage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public image: string

  @column()
  public product_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Product, {
    localKey: 'product_id'
  })
  public product: BelongsTo<typeof Product>
}