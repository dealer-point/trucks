class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :name
      t.string :lastname
      t.string :phone
      t.string :token
      t.string :locale, default: 'en'
      t.string :timezone, default: 'Europe/Moscow'
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
