class AlterCustomers1 < ActiveRecord::Migration[5.1]
  def change
    add_column :customers, :avatar, :binary
  end
end
