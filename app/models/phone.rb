class Phone < ApplicationRecord
  belongs_to :customer

  validates :number, format: { with: /\A\d+(-\d+)*\z/ }
end
