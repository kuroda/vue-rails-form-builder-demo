class CustomersController < ApplicationController
  def index
    @customers = Customer.order(:id)
  end

  def new
    @customer = Customer.new
    populate_phones
  end

  def edit
    @customer = Customer.find(params[:id])
    populate_phones
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      redirect_to :customers
    else
      populate_phones
      render action: "new"
    end
  end

  def update
    @customer = Customer.find(params[:id])
    @customer.assign_attributes(customer_params)
    if @customer.save
      redirect_to :customers
    else
      populate_phones
      render action: "edit"
    end
  end

  private def populate_phones
    (3 - @customer.phones.size).times do
      @customer.phones.build
    end
  end

  private def customer_params
    params.require(:customer).permit(
      :name,
      :plan,
      :gender,
      :confirmed,
      :approved,
      :remarks,
      :phones_attributes => [ :id, :number, :primary, :_destroy ]
    )
  end
end
