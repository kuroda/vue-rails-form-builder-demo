class Api::CustomersController < ApplicationController
  layout false

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
      response.headers["x-template-path"] = api_customers_path
      response.headers["x-push-state-url"] = "#"
    else
      render action: "new"
    end
  end

  private def customer_params
    params.require(:customer).permit(
      :name, :plan, :gender, :confirmed, :approved, :remarks)
  end
end
