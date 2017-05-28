class Api::CustomersController < ApplicationController
  layout false

  def index
    @customers = Customer.order(:id)
    response.headers['document-title'] = "List of customers"
  end

  def new
    @customer = Customer.new
    response.headers['document-title'] = "New customer"
  end

  def edit
    @customer = Customer.find(params[:id])
  end
end
