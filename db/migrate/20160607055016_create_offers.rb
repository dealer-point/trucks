class CreateOffers < ActiveRecord::Migration[5.0]
  def change
    create_table :offers do |t|
      t.json :data
      t.string :name
      t.integer :version, default: 0
      t.integer :company_id
      t.integer :user_id

      t.timestamps
    end
  end
end
