class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.order(:id)
    response.headers['document-title'] = "List of customers"
    render action: "index", layout: false
  end

  def new
    @customer = Customer.new
    response.headers['document-title'] = "New customer"
    render action: "new", layout: false
  end

  def edit
    @customer = Customer.find(params[:id])
    render action: "edit", layout: false
  end
end
