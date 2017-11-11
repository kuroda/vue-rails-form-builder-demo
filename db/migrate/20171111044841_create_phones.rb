class CreatePhones < ActiveRecord::Migration[5.1]
  def change
    create_table :phones do |t|
      t.references :customer, null: false
      t.string :number, null: false
      t.boolean :primary, null: false, default: false

      t.timestamps
    end
  end
end
