class Customer < ApplicationRecord
  validates :name, presence: true, length: { maximum: 40 }
  validates :remarks, presence: true
end
