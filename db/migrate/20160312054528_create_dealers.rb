class CreateDealers < ActiveRecord::Migration[5.0]
  def change
    create_table :dealers do |t|
      t.string :title
      t.string :subdomain
      t.string :city
      t.string :country
      t.string :language
      t.string :timezone, default: 'Europe/Moscow'
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
