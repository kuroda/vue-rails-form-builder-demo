class Api::CustomersController < ApplicationController
  layout false

  def index
    @customers = Customer.order(:id)
      .select([ :id, :name, :plan, :gender, :confirmed, :approved])
    template = render_to_string(template: "api/customers/index", layout: false)
    data = { customers: @customers }
    render json: { template: template, data: data }
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
      render json: {
        templatePath: api_customers_path
      }
    else
      populate_phones
      render action: "new"
    end
  end

  def update
    @customer = Customer.find(params[:id])
    @customer.assign_attributes(customer_params)
    if @customer.save
      render json: {
        templatePath: api_customers_path
      }
    else
      populate_phones
      render action: "edit"
    end
  end

  def destroy
    customer = Customer.find(params[:id])
    customer.destroy

    @customers = Customer.order(:id)
      .select([ :id, :name, :plan, :gender, :confirmed, :approved])
    data = { customers: @customers }
    render json: { data: data }
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
