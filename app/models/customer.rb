class Customer < ApplicationRecord
  has_many :phones
  accepts_nested_attributes_for :phones, allow_destroy: true, limit: 3,
    reject_if: -> (phone) { phone[:id].blank? && phone[:number].blank? }

  validates :name, presence: true, length: { maximum: 40 }
  validates :remarks, presence: true
end
