class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|

      t.string :kind, nil: false, nil: false
      t.string :status, nil: false, nil: false, default: 'pending'
      t.integer :created_by_id, nil: false
      t.text :description
      t.integer :assigned_by_id
      t.integer :processed_by_id
      t.datetime :assigned_at
      t.datetime :processed_at

      t.references :target, polymorphic: true, index: true
      t.references :parent, polymorphic: true, index: true

      t.timestamps
    end
  end
end
