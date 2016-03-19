class CreateRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :roles do |t|
      t.string :title
      t.string :activities, array: true, using: 'gin', default: '{}'

      t.timestamps
    end
  end
end
