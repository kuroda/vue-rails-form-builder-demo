class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.order(:id)
    render action: "index", layout: false
  end
end
