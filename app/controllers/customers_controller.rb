class CustomersController < ApplicationController
  def index
    @customers = Customer.order(:id)
  end

  def new
    @customer = Customer.new
  end

  def edit
    @customer = Customer.find(params[:id])
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      redirect_to :customers
    else
      render action: "new"
    end
  end

  def update
    @customer = Customer.find(params[:id])
    @customer.assign_attributes(customer_params)
    if @customer.save
      redirect_to :customers
    else
      render action: "edit"
    end
  end

  private def customer_params
    params.require(:customer).permit(
      :name, :plan, :gender, :confirmed, :approved, :remarks)
  end
end
