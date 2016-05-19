class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :title, nil: false
      t.string :owner_name
      t.string :website
      t.text   :description
      t.timestamps
    end
  end
end
