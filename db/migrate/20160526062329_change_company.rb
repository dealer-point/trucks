class ChangeCompany < ActiveRecord::Migration[5.0]
  def change
    rename_column :companies, :title, :name
    rename_column :companies, :owner_name, :city
    rename_column :companies, :website, :country
    add_column :companies, :created_by_id, :integer
  end
end
