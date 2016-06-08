class AddFieldsToCompany < ActiveRecord::Migration[5.0]
  def change
    add_column :companies, :short_name, :string
    add_column :companies, :owner_name, :string
    add_column :companies, :phone, :string
    add_column :companies, :site, :string
  end
end
