class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.string :plan, default: "A"
      t.string :gender
      t.text :remarks
      t.boolean :confirmed, null: false, default: false
      t.boolean :approved, null: false, default: false

      t.timestamps
    end
  end
end
