import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('description')
      table.integer('category_id').unsigned()
      table.string('wa_number')
      table.integer('price')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())

      table.foreign('category_id').references('id').inTable('categories').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
