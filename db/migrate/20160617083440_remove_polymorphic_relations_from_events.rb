class RemovePolymorphicRelationsFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :processed_by_id
    remove_column :events, :processed_at
    remove_column :events, :target_type
    remove_column :events, :target_id

    remove_column :events, :parent_type
    remove_column :events, :parent_id
  end
end
