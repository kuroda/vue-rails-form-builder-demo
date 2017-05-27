class Api::CustomersController < ApplicationController
  def index
    @customers = Customer.order(:id)
    render action: "index", layout: false
  end

  def new
    @customer = Customer.new
    render action: "new", layout: false
  end

  def edit
    @customer = Customer.find(params[:id])
    render action: "edit", layout: false
  end
end
